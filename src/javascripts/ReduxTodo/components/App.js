import React, { Component } from 'react'

import AddTodo from './AddTodo'
import Todo from './Todo'
import TodoList from './TodoList'
import Footer from './Footer'

export default class App extends Component {
  render() {
    const todos = [
      { text: 'aiueo' }, { text: 'kakiku' }, { text: 'sasisu' }
    ]
    return (
      <div>
        <AddTodo onAddClick={(text) => console.log("add todo", text)} />
        <TodoList todos={todos} onTodoClick={(index) => console.log('todo clicked', index)}/>
        <Footer
          filter='SHOW_ALL'
          onFilterChange={(filter) =>
            console.log('filter change', filter)
          } />
      </div>
    )
  }
}
