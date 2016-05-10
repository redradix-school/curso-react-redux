import React, { Component, PropTypes } from 'react';

// Un elemento del catálogo
class CatalogItem extends Component {
  constructor(props){
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(e){
    e.preventDefault();
    this.props.onAddToCart({ product: this.props.product });
  }

  render(){
    const { name, description, price } = this.props.product;
    return (
      <div className="product row">
        <div className="product-summary col three-fourths">
          <h2 className="product-title">{ name }</h2>
          <div className="product-details">
            <div className="product-image col one-fourth">
              <img src="http://placehold.it/64x64" height="64" width="64" />
            </div>
            <div className="product-summary col three-fourths">
              <p>{ description }</p>
            </div>
          </div>
        </div>
        <div className="product-add-to-cart col one-fourth">
          <div className="product-price">{ price } &euro;</div>
          <div className="add-to-cart">
            <a className="button" onClick={ this.handleAddToCart }>Comprar</a>
          </div>
        </div>
      </div>
    )
  }
}

CatalogItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default CatalogItem;