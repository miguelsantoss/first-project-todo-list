const initialState = {
  listArray: [],
  selected: 0
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_LISTS_PENDING': {
      state = { ...state, fetchingLists: true, error: false };
      break;
    }
    case 'FETCH_LISTS_FULFILLED': {
      const listArray = action.payload;
      listArray.forEach((list) => {
        list.items.forEach((todo) => {
          if(todo.done == "0")
            todo.done = false;
          else
            todo.done = true;
        })
      })
      const selected = listArray.length ? listArray[0].id : 0;
      state = { ...state, listArray, selected }
      break;
    }
    case 'FETCH_LISTS_REJECTED': {
      /*Some error*/
      break;
    }


    case 'CREATE_LIST_FULFILLED': {
      const { name, id } = action.payload;
      const todos = [];

      let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      listArray = listArray.concat({
        name, id, todos
      });

      state = { ...state, listArray };
      break;
    }
    case 'CREATE_LIST_REJECTED': {
      /*Some error*/
      break;
    }

    case 'DELETE_LIST_FULFILLED': {
      const { id } = action.payload;

      let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      listArray = listArray.filter((list) => list.id != id);

      state = { ...state, listArray };
      break;
    }
    case 'DELETE_LIST_REJECTED': {
      /*Some error*/
      break;
    }

    case 'CREATE_TODO_FULFILLED': {
      const { name, id, todo_id } = action.payload;
      const { priority } = action.payload;

      let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      listArray.forEach((list) => {
        if(list.id == id) {
          console.log(list);
          list.items = list.items.concat({
            name,
            priority,
            id: todo_id,
            done: false,
          });
        }
      });
      state = { ...state, listArray };
      break;
      break;
    }
    case 'CREATE_TODO_REJECTED': {
      /*Some error*/
      break;
    }

    case 'DELETE_TODO_FULFILLED': {
      const { id } = action.payload;

      let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      listArray.forEach((list) => {
        list.items = list.items.filter((todo) => {
            return todo.id != id;
          });
      });
      state = { ...state, listArray };
      break;
    }
    case 'DELETE_TODO_REJECTED': {
      /*Some error*/
      break;
    }

    case "CHANGE_SELECTED": {
      const selected = action.payload.newId;

      let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      state = { ...state, listArray, selected };
      break;
    }

    case "CHANGE_TODO_STATE_FULFILLED": {
      const { id } = action.payload;

      let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      listArray.forEach((list) => {
        list.items.forEach((todo) => {
          if(todo.id == id) {
            todo.done = !todo.done;
          }
        });
      });

      state = { ...state, listArray };
      break;
    }

    case "CHANGE_TODO_STATE_REJECTED": {
      /*Some error*/
      break;
    }

    case "CHANGE_TODO_PRIORITY_FULFILLED": {
      const { id, priority } = action.payload;

      let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      listArray.forEach((list) => {
        list.items.forEach((todo) => {
          if(todo.id == id) {
            todo.priority = priority;
          }
        });
      });

      state = { ...state, listArray };
      break;
    }

    case "CHANGE_TODO_PRIORITY_REJECTED": {
      /*Some error*/
      break;
    }

    case "RENAME_LIST_FULFILLED": {
      const { id, name } = action.payload;

      let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      listArray.forEach((list) => {
        if(list.id == id) {
          list.name = name;
        }
      });

      state = { ...state, listArray };
      break;
    }
    case "RENAME_LIST_REJECTED": {
      /*Some error*/
      break;
    }

    case "RENAME_TODO_FULFILLED": {
      const { id, name } = action.payload;

      let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      listArray.forEach((list) => {
        list.items.forEach((todo) => {
          if(todo.id == id) {
            todo.name = name;
          }
        });
      });

      state = { ...state, listArray };
      break;
    }
    case "RENAME_TODO_REJECTED": {
      /*Some error*/
      break;
    }
  }
  return state;
};
