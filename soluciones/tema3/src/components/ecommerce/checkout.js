import React, { Component, PropTypes } from 'react';
import Header from './header';
import FormItem from './checkout_form_item';

// Página de Checkout, formulario de datos personales
class Checkout extends Component {
  constructor(props){
    super(props);
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
    const errors = this.props.errors;

    return (
      <div className='checkout'>
        <Header text='Checkout' />
        <div className='checkout-form'>
          <form>
          <FormItem label='Nombre' error={ errors.firstName }>
            <input type="text" name="firstName"
              className={ errors.firstName ? 'error' : ''}
              value={ this.state.firstName }
              onChange={ this.handleFieldChange('firstName') } />
          </FormItem>

          <FormItem label='Apellido' error={ errors.lastName }>
              <input type="text" name="lastName"
                className={ errors.firstName ? 'error' : ''}
                value={ this.state.lastName }
                onChange={ this.handleFieldChange('lastName') } />
          </FormItem>
          <FormItem label='Email' error={ errors.email }>
              <input type="text" name="email"
                className={ errors.firstName ? 'error' : ''}
                value={ this.state.email }
                onChange={ this.handleFieldChange('email') } />
          </FormItem>
          <FormItem label='Dirección' error={ errors.address }>
              <textarea
                className={ errors.firstName ? 'error big' : 'big'}
                value={ this.state.address }
                onChange={ this.handleFieldChange('address') } />
          </FormItem>
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