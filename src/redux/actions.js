export const GET_SEARCH_REPO_REQUEST = "GET_SEARCH_REPO_REQUEST";
export const GET_SEARCH_REPO_RESPONSE = "GET_SEARCH_REPO_RESPONSE";


export const getSearchRepoRequest = () => ({ type: GET_SEARCH_REPO_REQUEST });
export const receiveApiDataAction = data => ({ type: GET_SEARCH_REPO_RESPONSE, data });
