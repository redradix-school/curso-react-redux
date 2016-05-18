import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router';
import { connect } from 'react-redux';
import { saveOrder, changeField } from '../../modules/order';
import Header from './header';
import FormItem from './checkout_form_item';

// Página de Checkout, formulario de datos personales
// En este contenedor usamos bindActionCreators y mapDispatchToProps (ver final del archivo)
export class Checkout extends Component {
  constructor(props){
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRouteLeave = this.handleRouteLeave.bind(this);
  }

  componentDidMount(){
    //router Leave hook (route, function)
    this.props.router.setRouteLeaveHook(this.props.route, this.handleRouteLeave);
  }

  handleRouteLeave(location){
    //si va a thankyou es porque los datos son válidos, no hacemos nada
    if(location.pathname === 'thankyou') return;
    //solo si es el usuario ha escrito algo
    const { details } = this.props;
    if(details.firstName || details.lastName || details.email || details.address){
      return "¿Seguro que quiere abandonar el proceso?";
    }
  }

  handleFieldChange(e){
    this.props.changeField({
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

              <Link className="button" to="cart">Volver al carrito</Link>
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
  changeField: PropTypes.func,
  //inyectado por withRouter()
  router: PropTypes.object
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
    changeField,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));