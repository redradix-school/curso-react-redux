import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveOrder, updateDetails } from '../../modules/order';
import { goToCart } from '../../modules/route';
import Header from './header';
import FormItem from './checkout_form_item';

// Página de Checkout, formulario de datos personales
// En este contenedor usamos bindActionCreators y mapDispatchToProps (ver final del archivo)
export class Checkout extends Component {
  constructor(props){
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(e){
    this.props.updateDetails({
      [e.target.name]: e.target.value
    });
  }

  handleGoBack(e){
    e.preventDefault();
    this.props.goToCart();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.saveOrder(this.props.details);
  }

  render(){
    const errors = this.props.errors;
    const { firstName, lastName, email, address } = this.props.details;
    return (
      <div className='checkout'>
        <Header text='Checkout' />
        <div className='checkout-form'>
          <form>
          <FormItem label='Nombre' error={ errors.firstName }>
            <input type="text" name="firstName"
              className={ errors.firstName ? 'error' : ''}
              value={ firstName }
              onChange={ this.handleFieldChange } />
          </FormItem>

          <FormItem label='Apellido' error={ errors.lastName }>
              <input type="text" name="lastName"
                className={ errors.firstName ? 'error' : ''}
                value={ lastName }
                onChange={ this.handleFieldChange } />
          </FormItem>
          <FormItem label='Email' error={ errors.email }>
              <input type="text" name="email"
                className={ errors.firstName ? 'error' : ''}
                value={ email }
                onChange={ this.handleFieldChange } />
          </FormItem>
          <FormItem label='Dirección' error={ errors.address }>
              <textarea
                name='address'
                className={ errors.firstName ? 'error big' : 'big'}
                value={ address }
                onChange={ this.handleFieldChange } />
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
  details: PropTypes.object,
  saveOrder: PropTypes.func,
  updateDetails: PropTypes.func,
  goToCart: PropTypes.func
}

const mapStateToProps = state => {
  return {
    errors: state.order.errors,
    details: state.order.details
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    saveOrder,
    updateDetails,
    goToCart,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);