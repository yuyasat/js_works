import React from 'react';
import ReactDom from 'react-dom';

export default class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      i: this.props.gridState.i,
      j: this.props.gridState.j,
      color: this.props.gridState.color,
    }
    this.clickGrid = this.clickGrid.bind(this)
  }
  styles() {
    return({
      defaultStyle: {
        float: 'left',
        width: '30px',
        height: '20px',
        border: '1px solid #000000',
        white_space: 'pre-wrap',
      },
      red: {
        background: '#ff0000',
      }
    });
  }
  clickGrid() {
    this.props.onClickGrid(this.state);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      color: newProps.gridState.color,
    });
  }

  render() {
    const styles = this.styles();
    const color = this.state.color

    let style;
    if(color === 1) {
      style = Object.assign(styles.defaultStyle, styles.red)
    } else {
      style = styles.defaultStyle
    }
    return(
      <div style={style} onClick={this.clickGrid} />
    )
  }
}
