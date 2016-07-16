export function createTodo() {
	return {
		type: "CREATE_TODO",
		payload: {
		    todoText: 'Cook Dinner',
		    id: 0,
		    priority: 'HIGH',
		    done: false,
		}
	}
}