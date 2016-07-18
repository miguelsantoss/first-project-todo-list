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

export function deleteList(name, id=null/*FIXME*/) {
	return {
		type: "DELETE_LIST",
		payload: name
	}
}

export function createTodo(listName, name, priority) {
	return {
		type: "CREATE_TODO",
		payload: {
			listName,
			name,
			priority,
		}
	}
}

export function deleteTodo(listName, name) {
	return {
		type: "DELETE_TODO",
		payload: {
			listName,
			name,
		}
	}
}