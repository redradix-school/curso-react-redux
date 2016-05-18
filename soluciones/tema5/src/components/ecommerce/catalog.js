import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from '../../lib/api';
import { saveProducts, fetchProducts } from '../../modules/catalog';
import { addToCart } from '../../modules/cart';
import { push } from 'react-router-redux';
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
        this.props.dispatch(fetchProducts());
      }
    }, 300)
    //Version sin thunk
    // get('/products.json')
    // .then(products => {
    //   //simulate server latency
    //   setTimeout(() => {
    //     this.props.dispatch(saveProducts(products))
    //   }, 300);
    // });
    //Version con thunk
    //this.props.dispatch(fetchProducts());
  }

  handleAddToCart(id){
    //añadir producto al carrito
    this.props.dispatch(addToCart(id));
    //y luego navegar a la página del carrito
    this.props.dispatch(push('cart'));
  }

  render(){
    const items = this.props.items.map(item =>
      <CatalogItem key={ item.id } product={ item } onAddToCart={ this.handleAddToCart } />);

    return (
      <div className='catalog'>
        <Header text='Products' />
        <div className='catalog-list'>
          { this.props.error.status ?  `Error al cargar los datos - ${ this.props.error.text} ` : null }
          { this.props.isFetching ? 'Cargando...' : items }
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
    items: state.catalog.data,
    isFetching: state.catalog.isFetching,
    error: state.catalog.error
  }
}


export default connect(mapStateToProps)(Catalog);