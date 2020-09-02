import initialState from './initialState';
  
function addReducer(state = initialState, {type, data}) {
  switch(type) {
    case 'GET_SEARCH_REPO_REQUEST':
      return { ...state };
    case 'GET_SEARCH_REPO_RESPONSE':
      return { ...state, searchResults: data };
    default:
      return state;
  }
}

export default addReducer;
  