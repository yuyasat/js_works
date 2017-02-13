import React from 'react';
import ReactDom from 'react-dom';

import InputForm from './input_form.js'
import TodoList from './todo_list.js'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
  }

  handleTodoSubmit(todo) {
    todo.id = new Date();
    const newMessages = this.state.todos.concat(todo);
    this.setState({ todos: newMessages })
  }

  handleTodoDelete(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  render() {
    const todoItems = this.state.todos.map((todo) => {
      return(
        <TodoList key={todo.id} todo={todo} onTodoDelete={this.handleTodoDelete} />
      )
    });
    return(
      <div className='todoBox'>
        <InputForm onTodoSubmit={this.handleTodoSubmit} />
        {todoItems}
      </div>
    )
  }
}
