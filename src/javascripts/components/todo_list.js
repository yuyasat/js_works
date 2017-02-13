import React from 'react';
import ReactDom from 'react-dom';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.onTodoDelete(this.props.todo.id);
  }

  render() {
    return(
      <div className='todo'>
        <h2 className='todoTitle'>{this.props.todo.title}</h2>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleDelete}>削除</button>
      </div>
    )
  }
}
