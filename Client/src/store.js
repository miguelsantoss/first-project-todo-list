import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, {
  user: {
    username: 'test',
    name: 'test-name',
    age: 30,
  },
  lists: {
    selected: 0,
    listArray: [
      {
        name: 'After Work',
        id: 0,
        todos: [
          {
            name: 'Buy oranges',
            id: 0,
            priority: 'LOW',
            done: true
          },
          {
            name: 'Watch a movie',
            id: 1,
            priority: 'MEDIUM',
            done: false
          },
          {
            name: 'Cook dinner',
            id: 2,
            priority: 'HIGH',
            done: false
          }
        ]
      },
      {
        name: 'Before Work',
        id: 1,
        todos: [
          {
            name: 'Wake up',
            id: 3,
            priority: 'LOW',
            done: true
          },
          {
            name: 'Get breakfast',
            id: 4,
            priority: 'MEDIUM',
            done: false
          },
          {
            name: 'Get dressed',
            id: 5,
            priority: 'HIGH',
            done: false
          }
        ]
      }
    ],
  },
}, middleware);
