import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const initialState = {
  user: {
  },
  lists: {
    listArray: [],
    selected: 0,
    fetchingLists: true,
    error: false
  }
};
const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, initialState, middleware);
