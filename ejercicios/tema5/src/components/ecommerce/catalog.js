import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from '../../lib/api';
import { saveProducts } from '../../modules/catalog';
import { addToCart } from '../../modules/cart';
import { goToCart } from '../../modules/route';
import catalogData from '../../data/shopping_cart';
import Header from './header';
import CatalogItem from './catalog_item';

// Listado de productos de la tienda
export class Catalog extends Component {
  constructor(props){
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount(){
    //Simulamos un delay
    setTimeout(() => {
      if(this.props.items.length === 0){
        this.props.dispatch(saveProducts(catalogData.products));
      }
    }, 300)

  }

  handleAddToCart(id){
    //añadir producto al carrito
    this.props.dispatch(addToCart(id));
    //y luego navegar a la página del carrito
    this.props.dispatch(goToCart());
  }

  render(){
    const items = this.props.items.map(item =>
      <CatalogItem key={ item.id } product={ item } onAddToCart={ this.handleAddToCart } />);

    return (
      <div className='catalog'>
        <Header text='Products' />
        <div className='catalog-list'>
          { items.length ? items : 'Cargando...'}
        </div>
      </div>

    )
  }
}

Catalog.propTypes = {
  items: PropTypes.arrayOf(React.PropTypes.object),
  dispatch: PropTypes.func.isRequired
}

Catalog.defaultProps = {
  items: []
}
const mapStateToProps = (state) => {
  return {
    items: state.catalog
  }
}


export default connect(mapStateToProps)(Catalog);