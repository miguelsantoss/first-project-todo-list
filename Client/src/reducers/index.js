import { combineReducers } from 'redux';

const userReducer = (state, actions) => {

};

const todosReducer = (state, actions) => {

};

const listsReducer = (state, actions) => {

};

const reducers = combineReducers({
	user: userReducer,
	todos: todosReducer,
	lists: listsReducer,
});

export default reducers;