import React from 'react';
import ReactDom from 'react-dom';

import Hello from './components/hello.jsx';
import World from './components/world.jsx';

ReactDom.render(
  <div>
      <Hello />
      <World />
  </div>,
  document.getElementById('hello-world')
);
