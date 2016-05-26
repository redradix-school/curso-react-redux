import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from '../../lib/api';
import { fetchProducts } from '../../modules/catalog';
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

  //componentDidMount() NO se ejecuta con react shallow render!
  componentDidMount(){
    //Simulamos un delay
    if(this.props.items.length === 0){
      this.props.fetchProducts();
    }
  }

  handleAddToCart(id){
    //añadir producto al carrito
    this.props.addToCart(id);
    //y luego navegar a la página del carrito
    this.props.push('cart');
  }

  render(){
    const items = this.props.items.map(item =>
      <CatalogItem key={ item.id } product={ item } onAddToCart={ this.handleAddToCart } />);

    return (
      <div className='catalog'>
        <Header text='Products' />
        <div className='catalog-list'>
          { this.props.error && this.props.error.status ?  `Error al cargar los datos - ${ this.props.error.text} ` : null }
          { this.props.isFetching ? 'Cargando...' : items }
        </div>
      </div>

    )
  }
}

Catalog.propTypes = {
  items: PropTypes.arrayOf(React.PropTypes.object),
  isFetching: PropTypes.bool,
  error: PropTypes.shape({
    status: PropTypes.string,
    text: PropTypes.string
  }),
  fetchProducts: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

Catalog.defaultProps = {
  items: [],
  error: {
    status: '',
    text: ''
  },
  fetchProducts: () => {},
  push: () => {},
  addToCart: () => {}
}
const mapStateToProps = (state) => {
  return {
    items: state.catalog.data,
    isFetching: state.catalog.isFetching,
    error: state.catalog.error
  }
}


export default connect(mapStateToProps, {
  fetchProducts,
  push,
  addToCart
})(Catalog);