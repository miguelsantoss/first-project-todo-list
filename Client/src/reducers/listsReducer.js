export default function reducer(state={}, action) {
	switch(action.type) {
		case "CREATE_LIST": {
			let { listArray } = state;
			listArray = JSON.parse(JSON.stringify(listArray));
			listArray = listArray.concat({
				name: action.payload,
				id: listArray[listArray.length - 1].id + 1,
				todos: [],
			});

			state = { ...state, listArray };
			break;
		}
		case "DELETE_LIST": {
			let { listArray } = state;
			listArray = JSON.parse(JSON.stringify(listArray));
			listArray = listArray.filter((list) => list.name != action.payload);
			state = { ...state, listArray };
			break;
		}
		case "CREATE_TODO": {
			const { listId, name, priority } = action.payload;
			
			let { listArray } = state;
			listArray = JSON.parse(JSON.stringify(listArray))



			listArray.forEach((list) => {
				if(list.id == listId) {
					const id = list.todos[list.todos.length - 1].id + 1;
					list.todos = list.todos.concat({
						name,
						priority,
						id,
						done: false,
					});
				}
			});
			state = { ...state, listArray };
			break;
		}
		case "DELETE_TODO": {
			const { listId, name } = action.payload;
			
			let { listArray } = state;
			listArray = JSON.parse(JSON.stringify(listArray))

			listArray.forEach((list) => {
				if(list.id == listId) {
					list.todos = list.todos.filter((list) => {
						return list.name != name;
					});
				}
			});
			state = { ...state, listArray };
			break;
		}
	}
	return state
};