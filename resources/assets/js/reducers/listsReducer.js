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
      const selected = listArray.length ? listArray[0].id : 0;
      state = { ...state, listArray, selected, fetchingLists: false, error: false }
      break;
    }
    case 'FETCH_LISTS_REJECTED': {
      state = { ...state, error: action.payload }
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

      break;
    }



  }
  return state
};
