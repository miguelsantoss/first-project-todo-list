import axios from 'axios';
import { ProdURL, DevURL } from '../constants/url';
import * as api from '../constants/apiCalls';

const URL = ProdURL;

export function fetchLists() {
  return function(dispatch) {
    axios.get(URL + api.getLists)
      .then((response) => {
        dispatch({type: 'FETCH_LISTS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_LISTS_REJECTED', payload: err})
      })
  };
}

export function createList(name) {
  return function(dispatch) {
    axios.post(URL + api.createList + name)
      .then((response) => {
        dispatch({type: 'CREATE_LIST_FULFILLED', payload: {
            id: response.data.id,
            name
          }
        })
      })
      .catch((err) => {
        dispatch({type: 'CREATE_LIST_REJECTED', payload: err})
      })
  };
}

export function deleteList(id) {
  return function(dispatch) {
    axios.delete(URL + api.deleteList + id)
      .then((response) => {
        dispatch({type: 'DELETE_LIST_FULFILLED', payload: { id, response: response.data } })
      })
      .catch((err) => {
        dispatch({type: 'DELETE_LIST_REJECTED', payload: err})
      })
  };
}

export function createTodo(listId, name, priority) {
  return function(dispatch) {
    axios.post(URL + api.createTodo.listId   + listId +
                       api.createTodo.name     + name +
                       api.createTodo.priority + priority)
      .then((response) => {
        dispatch({type: 'CREATE_TODO_FULFILLED', payload: {
            todo_id: response.data.id,
            name,
            priority,
            id: listId
          }
        })
      })
      .catch((err) => {
        dispatch({type: 'CREATE_TODO_REJECTED', payload: err})
      })
  };
}

export function deleteTodo(id) {
  return function(dispatch) {
    axios.delete(URL + api.deleteTodo + id)
      .then((response) => {
        dispatch({type: 'DELETE_TODO_FULFILLED', payload: { id, response: response.data } })
      })
      .catch((err) => {
        dispatch({type: 'DELETE_TODO_REJECTED', payload: err})
      })
  };
}

export function changeSelected(newId) {
  return {
    type: 'CHANGE_SELECTED',
    payload: {
      newId,
    }
  }
}

export function changeTodoState(id) {
  return function(dispatch) {
    axios.put(URL + api.markTodo + id)
      .then((response) => {
        dispatch({type: 'CHANGE_TODO_STATE_FULFILLED', payload: { id, response: response.data }})
      })
      .catch((err) => {
        dispatch({type: 'CHANGE_TODO_STATE_REJECTED', payload: err})
      })
  };
}

export function changeTodoPriority(id, priority) {
  return function(dispatch) {
    axios.put(URL + api.priorityTodo.id + id + api.priorityTodo.priority + priority)
      .then((response) => {
        dispatch({type: 'CHANGE_TODO_PRIORITY_FULFILLED', payload: { id, priority, response: response.data }})
      })
      .catch((err) => {
        dispatch({type: 'CHANGE_TODO_PRIORITY_REJECTED', payload: err})
      })
  };
}

export function renameList(id, name) {
  return function(dispatch) {
    axios.put(URL + api.renameList.id + id + api.renameList.name + name)
      .then((response) => {
        dispatch({type: 'RENAME_LIST_FULFILLED', payload: { id, name, response: response.data }})
      })
      .catch((err) => {
        dispatch({type: 'RENAME_LIST_REJECTED', payload: err})
      })
  };
}

export function renameTodo(id, name) {
  return function(dispatch) {
    axios.put(URL + api.renameTodo.id + id + api.renameTodo.name + name)
      .then((response) => {
        dispatch({type: 'RENAME_TODO_FULFILLED', payload: { id, name, response: response.data }})
      })
      .catch((err) => {
        dispatch({type: 'RENAME_TODO_REJECTED', payload: err})
      })
  };
}
