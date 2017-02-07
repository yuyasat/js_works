import React from 'react';
import ReactDom from 'react-dom';

export default class Sub extends React.Component {
  render() {
    return(
      <p>{this.props.text}</p>
    )
  }
}
