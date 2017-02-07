import React from 'react';
import ReactDom from 'react-dom';

const REAUEST_URL = 'https://api.github.com/users/yuyataki/repos'

class ApiSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // React component lifecycle: http://qiita.com/kawachi/items/092bfc281f88e3a6e456
  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    // Fetch Info: http://qiita.com/tomoyukilabs/items/9b464c53450acc0b9574
    fetch(REAUEST_URL).then((response) => response.json())
                      .then((responseData) => { this.setState({ data: responseData }) })
  }

  render() {
    return(
      <ul>
        {this.state.data.map((item) => { return(<li key={item.id}>{item.name}</li>) })}
      </ul>
    );
  }
}

ReactDom.render(
  <ApiSample />,
  document.getElementById('api-call')
);
