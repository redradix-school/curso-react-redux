import React from 'react';
import Header from './header';
import CatalogItem from './catalog_item';

const Catalog = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    onNavigate: React.PropTypes.func.isRequired,
    onAddToCart: React.PropTypes.func.isRequired
  },
  render(){
    //TODO: mapear "items" del catálogo a componentes CatalogItem
    const items = [];

    return (
      <div className='catalog'>
        <Header text='Productos' />
        <div className='catalog-list'>
          { items }
        </div>
      </div>

    )
  }
});

export default Catalog;