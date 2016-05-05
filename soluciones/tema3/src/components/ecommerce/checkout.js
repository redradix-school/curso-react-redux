import React, { PropTypes } from 'react';
import Header from './header';

//stateless component - represents a form field row
//expected props: label - text, error - null or errorMessage, children - form control(s)
const FormItem = (props) => (
  <div className='row'>
    <div className='col one-third'><label>{ props.label }</label></div>
    <div className='col two-thirds'>
      { props.children }
      <span className={ props.error ? 'error-text' : 'hidden '}>
        { props.error }
      </span>
    </div>
  </div>
);

const Checkout = React.createClass({
  propTypes: {
    errors: PropTypes.object,
    onBackToCart: PropTypes.func.isRequired,
    onProcessOrder: PropTypes.func.isRequired
  },
  getInitialState(){
    return {
      firstName: '',
      lastName: '',
      email: '',
      address: ''
    };
  },
  handleFieldChange(name){
    return (e) => {
      e.preventDefault();
      let newState = {};
      newState[name] = e.target.value;
      this.setState(newState);
    }
  },
  handleGoBack(e){
    e.preventDefault();
    this.props.onBackToCart();
  },
  handleSubmit(e){
    e.preventDefault();
    this.props.onProcessOrder({
      order: Object.assign({}, this.state)
    });
  },
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
              onChange={this.handleFieldChange('firstName')} />
          </FormItem>

          <FormItem label='Apellido' error={ errors.lastName }>
              <input type="text" name="lastName"
                className={ errors.firstName ? 'error' : ''}
                value={ this.state.lastName }
                onChange={this.handleFieldChange('lastName')} />
          </FormItem>
          <FormItem label='Email' error={ errors.email }>
              <input type="text" name="email"
                className={ errors.firstName ? 'error' : ''}
                value={ this.state.email }
                onChange={this.handleFieldChange('email')} />
          </FormItem>
          <FormItem label='Dirección' error={ errors.address }>
              <textarea
                className={ errors.firstName ? 'error big' : 'big'}
                value={ this.state.address }
                onChange={this.handleFieldChange('address')} />
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
});

export default Checkout;