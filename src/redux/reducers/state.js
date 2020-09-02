import initialState from './initialState';
  
function addReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_SEARCH_REPO_REQUEST':
      return { ...state };
    case 'GET_SEARCH_REPO_RESPONSE':
      return { ...state, searchResults: action.data };
    default:
      return state;
  }
}

export default addReducer;
  