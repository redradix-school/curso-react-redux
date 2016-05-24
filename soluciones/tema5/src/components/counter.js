import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class Counter extends Component {
  render(){
    const { clicks, dispatch } = this.props,
          incrementAction = { type: 'INCREMENT' };

    return (
      <button onClick={ () => dispatch(incrementAction) }>Has hecho click { clicks } veces</button>
    );
  }
}

const mapStateToProps = state => ({ clicks: state })

export default connect(mapStateToProps)(Counter);