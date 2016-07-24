const initialState = {
  listArray: [],
  selected: 0,
  fetchingLists: true,
  error: false
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_LISTS_PENDING': {
      state = { ...state, fetchingLists: true, error: false };
      break;
    }
    case 'FETCH_LISTS_FULFILLED': {
      const listArray = action.payload;
      const selected = listArray.length ? listArray[0].id : 0;
      state = { ...state, listArray, selected, fetchingLists: false, error: false }
      break;
    }
    case 'FETCH_LISTS_REJECTED': {
      state = { ...state, error: action.payload }
      break;
    }


    case 'CREATE_LIST_FULFILLED': {
      /*let { listArray } = state;
      listArray = JSON.parse(JSON.stringify(listArray));

      let id = 0;
      if(listArray.length) {
        id = listArray[listArray.length - 1].id + 1;
      }

      listArray = listArray.concat({
        name: action.payload,
        id: id,
        todos: [],
      });

      state = { ...state, listArray };*/
      break;
    }
    case 'CREATE_LIST_REJECTED': {

      break;
    }
  }
  return state
};
