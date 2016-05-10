import React, { Component, PropTypes } from 'react';
import Header from './header';
import FormItem from './checkout_form_item';

// Página de Checkout, formulario de datos personales
class Checkout extends Component {
  constructor(props){
    super(props);
    //form state
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: ''
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Una función de orden superior: devuelve una
  // nueva función que gestiona los cambios de un campo concreto
  handleFieldChange(name){
    return (e) => {
      let newState = {};
      newState[name] = e.target.value;
      this.setState(newState);
    }
  }

  handleGoBack(e){
    e.preventDefault();
    this.props.onBackToCart();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onProcessOrder({
      order: Object.assign({}, this.state)
    });
  }

  render(){
    const { errors }  = this.props;
    return (
      <div className='checkout'>
        <Header text='Checkout' />
        <div className='checkout-form'>
          <form>
          { /* TODO - campos del formulario usando FormItem */ }
          <div className="row">
            <div className="col one-whole">
              <button className="button" onClick={ this.handleGoBack }>Volver al carrito</button>
              <button className="button" onClick={ this.handleSubmit }>Finalizar</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

Checkout.propTypes = {
  errors: PropTypes.object,
  onBackToCart: PropTypes.func.isRequired,
  onProcessOrder: PropTypes.func.isRequired
}

export default Checkout;