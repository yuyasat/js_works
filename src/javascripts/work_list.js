import React from 'react';
import ReactDom from 'react-dom';

class WorkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      samples: [
        'index', 'hello_world', 'like_button', 'parent_children', 'api_sample', 'pre_poje',
        'poject',
      ]
    }
  }

  render() {
    const listItems = this.state.samples.map((sample) => {
      return(<ListItem key={sample.toString()} sample={sample} />)
    });
    return(
      <ul>{listItems}</ul>
    )
  }
}

export class ListItem extends React.Component {
  render() {
    return(
      <li><a href={this.props.sample + '.html'}>{this.props.sample}</a></li>
    );
  }
}

ReactDom.render(
  <div>
    <h1>Work List</h1>
    <WorkList />
  </div>,
  document.getElementById('work-list')
);
