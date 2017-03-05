import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  const todos = props.todos.map((todo, index) =>
    <Todo {...todo}
          key={index}
          onClick={() => this.props.onTodoClick(index)} />
  )
  return (
    <ul>
      {todos}
    </ul>
  )
}

export default TodoList
