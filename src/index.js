import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './pages/App';
import UserHomePage from './pages/UserHomePage';
import LandingPage from './pages/LandingPage';

require('../styles/index.scss');

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}></IndexRoute>
        <Route path="home" component={UserHomePage}></Route>
    </Route>
  </Router>,
app);
