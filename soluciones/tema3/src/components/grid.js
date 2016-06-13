import React from 'react';

/**
 * Componentes funcionales para representar
 * filas y columnas
 */
export const Row = (props) => (
  <div className='row'>{ props.children }</div>
);

export const Col = (props) => (
  <div className={ 'col ' + props.width } >{ props.children }</div>
);

export const ColHalf = (props) => (
  <Col width='one-half'>{ props.children }</Col>
);

export const ColFull = (props) => (
  <Col width='one-whole'>{ props.children }</Col>
);
