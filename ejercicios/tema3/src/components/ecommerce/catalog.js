import React, { Component, PropTypes } from 'react';
import Header from './header';
import CatalogItem from './catalog_item';

// Listado de productos de la tienda
class Catalog extends Component {
  render(){
    /* TODO - mapear items a componentes CatalogItem */
    const items = [];

    return (
      <div className='catalog'>
        <Header text='Products' />
        <div className='catalog-list'>
          { items }
        </div>
      </div>

    )
  }
}

Catalog.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object),
  // funcion a la que llamar cuando se añade un producto al carrito
  onAddToCart: React.PropTypes.func.isRequired
}

export default Catalog;