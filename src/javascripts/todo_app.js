import React from 'react';
import ReactDom from 'react-dom';

import Todo from './components/todo.js';

ReactDom.render(
  <Todo />,
  document.getElementById('todo-list')
);
