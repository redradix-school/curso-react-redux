import React, { PropTypes } from 'react';

// Componente sin estado / funcional
// Representa un elemento de formulario
const FormItem = (props) => (
  <div className='row'>
    <div className='col one-third'>
      <label>{ props.label }</label>
    </div>
    <div className='col two-thirds'>
      { props.children }
      <span className={ props.error ? 'error-text' : 'hidden '}>
        { props.error }
      </span>
    </div>
  </div>
);

FormItem.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string
}

export default FormItem;