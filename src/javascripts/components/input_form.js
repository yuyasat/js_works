import React from 'react';
import ReactDom from 'react-dom';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault(); // submitした後の遷移を防ぐ
    const title = this.refs.title.value.trim();
    const text = this.refs.text.value.trim();

    if(!title || !text) { return }

    this.props.onTodoSubmit({ title: title, text: text });

    this.refs.title.value = ''
    this.refs.text.value = ''
  }

  render() {
    return(
      <form className='commentForm' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='タスク名' ref='title' />
        <input type='text' placeholder='詳細' ref='text' />
        <button>追加</button>
      </form>
    )
  }
}
