import { combineReducers } from 'redux';

import userReducer from './userReducer';
import listsReducer from './listsReducer';

const reducers = combineReducers({
  user: userReducer,
  lists: listsReducer,
});

export default reducers;
