import React, { Component, PropTypes } from 'react';
import { Row, ColHalf } from '../grid';

/**
 * TODO: definir props para establecer el valor
 * del input y un "callback" para los cambios
 */
const AddTodo = (props) => (
    <Row>
      <input
        type='text'
        placeholder='¿Qué quieres hacer?' />
    </Row>
);


/**
 * TODO: prop para cambiar el estado de un Todo
 */
const TodoItem = ({ id, text, completed }) => {
  //estilos para TodoItem
  const commonStyle = {
  }
  //estilos para TodoItem completado
  const completedStyle = {
    ...commonStyle,
    textDecoration: 'line-through'
  }

  return (
    <li
      style={ completed ? completedStyle : commonStyle }>
      { text }
    </li>)
};

/* TODO: generar un array de <TodoItem /> a partir de las props */
const TodoList = ({ todos }) => (
  <ul>
    { /* mapear todos a TodoItem */ }
  </ul>
);

/* TODO: filtrar lista de todos por el filter */
const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case 'active':
    case 'completed':
    default:
      return todos;
  }
}

/* TODO: filtrar todos y utilizar componente TodoList */
const VisibleTodoList = ({ todos, filter, onTodoToggle }) => (
  null
)

// estilos para enlace de filtro activo
const linkActiveStyle = {
  textDecoration: 'none',
  color: '#000'
}

// TODO: prop para gestionar el cambio de filtro
const FilterLink = ({ text, filter, active }) => (
  <a style={ active ? linkActiveStyle : {} }  href='javascript:void(0)'>{ text }</a>
)
// TODO: prop para gestionar el cambio de filtro
const Filter = ({ filter }) => (
  <Row>
    Ver:
    <FilterLink text='Todos' filter='all' active={ filter === 'all' }  /> |
    <FilterLink text='Activos' filter='active' active={ filter === 'active' } /> |
    <FilterLink text='Completados' filter='completed' active={ filter === 'completed' } />
  </Row>
);

class TodoApp extends Component {
  constructor(){
    super();
    this.state = {
      newTodo: '',
      todos: [],
      filter: 'all'
    }
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleNewTodoKeyUp = this.handleNewTodoKeyUp.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }

  // guarda el texto introducido por el usuario en el estado interno
  handleNewTodoChange(e){
    // TODO: guardar texto del nuevo todo en estado
  }

  // guarda el nuevo todo al pulsar <ENTER>
  handleNewTodoKeyUp(e){
    if(e.keyCode === 13){
      // TODO: crear nuevo objeto Todo a partir del texto
      const newTodo = {
        id: Date.now().toString(16),
        //TODO: completed y text!
      }

      //TODO: añadir el nuevo Todo a la lista de todos
      //sin mutarla!!
      const newList = [];

      //TODO: setState
    }
  }

  // guarda el nuevo filtro seleccionado por el usuario
  handleFilterChange(newFilter){
    this.setState({
      filter: newFilter
    })
  }

  // marca como completado / no completado un todo a partir de su id
  handleTodoClick(id){
    // TODO: toggle de completed en el todo específico
    // pista: .map()
    const newTodos = this.state.todos

    this.setState({
      todos: newTodos
    })
  }
  
  render(){
    const { newTodo, todos, filter } = this.state;
    return (
      <div className='todo-app'>
        <h1>Todos</h1>
        { /* TODO: AddTodo props */ }
        <AddTodo />
        <Row>
          { /* TODO: VisibleTodoList props */ }
          <VisibleTodoList />
        </Row>
        { /* TODO: Filter props */ }
        <Filter />
      </div>
    )
  }
}

export default TodoApp;
