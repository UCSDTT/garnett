import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Home from './Components/Home';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
