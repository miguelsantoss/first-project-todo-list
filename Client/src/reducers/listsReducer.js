export default function reducer(state=[], action) {
	switch(action.type) {
		case "CREATE_LIST": {
			state = state.concat({
				name: action.payload,
				id: state[state.length - 1].id + 1,
				todos: [],
			});
			break;
		}
		case "DELETE_LIST": {
			state = state.filter((list) => list.name != action.payload);
			break;
		}
		case "CREATE_TODO": {
			const { listName, name, priority } = action.payload;
			state.forEach((list) => {
				if(list.name == listName) {
					list.todos = list.todos.concat({
						name,
						priority,
						id: 10,
						done: false,
					});
				}
			});
			break;
		}
		case "DELETE_TODO": {
			const { listName, name } = action.payload;
			state.forEach((list) => {
				if(list.name == listName) {
					list.todos = list.todos.filter((list) => {
						return list.name != name;
					});
				}
			});
			break;
		}
	}
	return state
};