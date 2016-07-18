export function fetchLists(user) {
  return {
    type: "FETCH_LISTS",
    payload: user,
  }
}

export function createList(name) {
  return {
    type: "CREATE_LIST",
    payload: name
  }
}

export function deleteList(name) {
  return {
    type: "DELETE_LIST",
    payload: name
  }
}

export function createTodo(listId, name, priority) {
  return {
    type: "CREATE_TODO",
    payload: {
      listId,
      name,
      priority,
    }
  }
}

export function deleteTodo(listId, name) {
  return {
    type: "DELETE_TODO",
    payload: {
      listId,
      name,
    }
  }
}

export function changeSelected(newId) {
  return {
    type: "CHANGE_SELECTED",
    payload: {
      newId,
    }
  }
}