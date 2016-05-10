import React, { Component, PropTypes } from 'react';
import Header from './header';
import CatalogItem from './catalog_item';

// Listado de productos de la tienda
class Catalog extends Component {
  render(){
    const items = this.props.items.map(item =>
      <CatalogItem key={ item.id } product={ item } onAddToCart={ this.props.onAddToCart } />);

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
  onAddToCart: React.PropTypes.func.isRequired
}

export default Catalog;