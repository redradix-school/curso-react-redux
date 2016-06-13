import React, { Component, PropTypes } from 'react';
import { Row, ColHalf } from '../grid';

const AddTodo = ({ value, onChange, onKeyUp }) => (
    <Row>
      <input
        type='text'
        value={ value }
        onChange={ onChange }
        onKeyUp={ onKeyUp }
        placeholder='¿Qué quieres hacer?' />
    </Row>
);
const commonStyle = {

}
const completedStyle = {
  ...commonStyle,
  textDecoration: 'line-through'
}

const TodoItem = ({ id, text, completed, onTodoToggle }) => (
  <li
    style={ completed ? completedStyle : commonStyle }
    onClick={ () => onTodoToggle(id) }>
    { text }
  </li>
);

const TodoList = ({ todos, onTodoToggle }) => (
  <ul>
    { todos.map(todo =>
      <TodoItem
        key={ todo.id }
        id={ todo.id }
        onTodoToggle={ onTodoToggle }
        text={ todo.text }
        completed={ todo.completed } />
        )
    }
  </ul>
);

const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

const VisibleTodoList = ({ todos, filter, onTodoToggle }) => (
  <TodoList todos={ getVisibleTodos(todos, filter )} onTodoToggle={ onTodoToggle } />
)

const linkActiveStyle = {
  textDecoration: 'none',
  color: '#000'
}
const FilterLink = ({ text, filter, active, onFilterChange }) => (
  <a style={ active ? linkActiveStyle : {} } onClick={ () => onFilterChange(filter) } href='javascript:void(0)'>{ text }</a>
)

const Filter = ({ filter, onFilterChange }) => (
  <Row>
    Ver:
    <FilterLink text='Todos' filter='all' active={ filter === 'all' } onFilterChange={ onFilterChange } /> |
    <FilterLink text='Activos' filter='active' active={ filter === 'active' } onFilterChange={ onFilterChange } /> |
    <FilterLink text='Completados' filter='completed' active={ filter === 'completed' } onFilterChange={ onFilterChange } />
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

  handleNewTodoChange(e){
    this.setState({
      newTodo: e.target.value
    })
  }

  handleNewTodoKeyUp(e){
    if(e.keyCode === 13){
      const newTodo = {
        id: Date.now().toString(16),
        text: this.state.newTodo,
        completed: false
      }

      const newList = [ newTodo ].concat(this.state.todos);
      this.setState({
        newTodo: '',
        todos: newList
      })
    }
  }

  handleFilterChange(newFilter){
    this.setState({
      filter: newFilter
    })
  }

  handleTodoClick(id){
    const newTodos = this.state.todos.map(t => {
      if(t.id === id){
        return {
          ...t,
          completed: !t.completed
        }
      }
      return t
    });

    this.setState({
      todos: newTodos
    })
  }

  render(){
    const { newTodo, todos, filter } = this.state;
    return (
      <div className='todo-app'>
        <h1>Todos</h1>
        <AddTodo
          value={ newTodo }
          onChange={ this.handleNewTodoChange }
          onKeyUp={ this.handleNewTodoKeyUp } />
        <Row>
          <VisibleTodoList
            filter={ filter }
            todos={ todos }
            onTodoToggle={ this.handleTodoClick } />
        </Row>        
        <Filter
          filter={ filter }
          onFilterChange={ this.handleFilterChange } />

      </div>
    )
  }
}

export default TodoApp;
