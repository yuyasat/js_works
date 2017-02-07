
import React from 'react';
import ReactDom from 'react-dom';
import Sub from './components/sub';

export default class Parent extends React.Component {
  render() {
    return(
      <div>
        <Sub text='child-1' />
        <Sub text='child-2' />
      </div>
    );
  }
}
ReactDom.render(
  <Parent />,
  document.getElementById('parent-children')
)
