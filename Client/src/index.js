import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './pages/App';
import LandingPage from './pages/LandingPage';
import UserHomePage from './pages/UserHomePage';

import store from './store';

require('../styles/index.scss');

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage}></IndexRoute>
        <Route path='home' component={UserHomePage}></Route>
      </Route>
    </Router>
  </Provider>,
app);
