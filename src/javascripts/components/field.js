import React from 'react';
import ReactDom from 'react-dom';

import GridRow from './grid_row'

export default class Field extends React.Component {
  // TODO: Keep the color number as static variable.
  constructor(props) {
    super(props);

    const row = 11
    const column = 7
    const gridStates = Array.from(Array(row).keys()).map((index_j) => {
      return(
        Array.from(Array(column).keys()).map((index_i) => {
          return { color: 0, i: index_i, j: index_j }
        })
      )
    });

    this.row = row;
    this.column = column;
    this.state = {
      gridStates: gridStates
    }
    this.handleClickGrid = this.handleClickGrid.bind(this);
  }

  countColor(j, i, gridStates) {
    const color = gridStates[j][i].color;
    let n = 1;
    gridStates[j][i].color = 0;
    if(j - 1 >= 0 && gridStates[j - 1][i].color === color) {
      n += this.countColor(j - 1, i, gridStates)
    }
    if(j + 1 < this.row && gridStates[j + 1][i].color === color) {
      n += this.countColor(j + 1, i, gridStates)
    }
    if(i - 1 >= 0 && gridStates[j][i - 1].color === color) {
      n += this.countColor(j, i - 1, gridStates)
    }
    if(i + 1 < this.column && gridStates[j][i + 1].color === color) {
      n += this.countColor(j, i + 1, gridStates)
    }
    gridStates[j][i].color = color;
    return n;
  }

  deleteColor(j, i, gridStates) {
    const color = gridStates[j][i].color;
    gridStates[j][i].color = 0;
    if(j - 1 >= 0 && gridStates[j - 1][i].color === color) {
      this.deleteColor(j - 1, i, gridStates)
    }
    if(j + 1 < this.row && gridStates[j + 1][i].color === color) {
      this.deleteColor(j + 1, i, gridStates)
    }
    if(i - 1 >= 0 && gridStates[j][i - 1].color === color) {
      this.deleteColor(j, i - 1, gridStates)
    }
    if(i + 1 < this.column && gridStates[j][i + 1].color === color) {
      this.deleteColor(j, i + 1, gridStates)
    }
    return gridStates;
  }

  handleClickGrid(state) {
    let newGridStates = this.state.gridStates
    newGridStates[state.j][state.i].color = 1;
    let updatedGridStates;
    if(this.countColor(state.j, state.i, newGridStates) >= 4) {
      updatedGridStates = this.deleteColor(state.j, state.i, newGridStates)
    }
    this.setState({
      gridStates: updatedGridStates === undefined ? newGridStates : updatedGridStates
    });
  }

  render() {
    const grids = this.state.gridStates.map((gridStateRow, index_j) => {
      return(
        <GridRow
          key={'row' + index_j}
          gridStateRow={gridStateRow}
          handleClickGrid={this.handleClickGrid} />
      )
    });
    return(
      <div>
        {grids}
      </div>
    )
  }
}
