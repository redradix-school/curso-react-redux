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
    const items = this.props.items.map(item => <CatalogItem key={item.id} product={item} onAddToCart={this.props.onAddToCart} />);
    return (
      <div className='catalog'>
        <Header text='Products' />
        <div className='catalog-list'>
          { items }
        </div>
      </div>

    )
  }
});

export default Catalog;