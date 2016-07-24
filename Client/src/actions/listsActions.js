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
        dispatch({type: 'CREATE_LIST_FULFILLED', payload: name})
      })
      .catch((err) => {
        dispatch({type: 'CREATE_LIST_REJECTED', payload: err})
      })
  };
}

export function deleteList(id) {
  return {
    type: 'DELETE_LIST',
    payload: id
  }
}

export function createTodo(listId, name, priority) {
  return {
    type: 'CREATE_TODO',
    payload: {
      listId,
      name,
      priority,
    }
  }
}

export function deleteTodo(listId, name) {
  return {
    type: 'DELETE_TODO',
    payload: {
      listId,
      name,
    }
  }
}

export function changeSelected(newId) {
  return {
    type: 'CHANGE_SELECTED',
    payload: {
      newId,
    }
  }
}

export function changeTodoState(listId, id) {
  return {
    type: 'CHANGE_TODO_STATE',
    payload: {
      listId,
      id,
    }
  }
}
