import React from 'react';
import ReactDom from 'react-dom';

import TopGrid from './poject_top_grid';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 1,
      position: 1, // 0: 右, 1: 上, 2: 左, 3: 下
      color1: Math.floor(Math.random() * 4) + 1,
      color2: Math.floor(Math.random() * 4) + 1,
    }
    this._onKeyDown = this._onKeyDown.bind(this);
  }
  styles() {
    return({
      defaultStyle: {
        height: '42px',
        white_space: 'pre-wrap',
      },
    })
  }
  componentWillReceiveProps() {
    this.setState({
      color1: Math.floor(Math.random() * 4) + 1,
      color2: Math.floor(Math.random() * 4) + 1,
    });
  }
  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown);
  }
  _onKeyDown(e) {
    const column = this.state.column
    const position = this.state.position
    if(e.keyCode === 39 && column < 7) { // right
      if(column === 6 || position === 0 && column === 5) { return }
      this.setState({ column: column + 1 })
    } else if(e.keyCode === 37 && column > 0) { // left
      if(column === 0 || position === 2 && column === 1) { return }
      this.setState({ column: column - 1 })
    } else if(e.keyCode === 88 || e.keyCode === 38) { // x or up
      if(position === 3 && column === 0 || position === 1 && column === 6) { return }
      this.setState({
        position: position === 0 ? 3 : position - 1,
      })
    } else if(e.keyCode === 90 || e.keyCode === 38) { // z
      if(position === 3 && column === 6 || position === 1 && column === 0) { return }
      this.setState({
        position: position === 3 ? 0 : position + 1
      })
    } else if(e.keyCode === 40) { // down
      this.props.handleDown(this.state);
    }
  }

  render() {
    const column = this.state.column
    const key = new Date().getTime();
    return(
      <div style={this.styles().defaultStyle}>
        <TopGrid key={'1'+key} topGridState={this.state} position='1' />
        <TopGrid key={'2'+key} topGridState={this.state} position='2' />
      </div>
    )
  }
}
