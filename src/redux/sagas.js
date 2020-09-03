import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios';


import { 
    GET_SEARCH_REPO_REQUEST,
    receiveApiDataAction,
 } from "./actions";

export function* getSearchRepoRequest(action) {
      try {
        const response = yield axios.get("https://api.github.com/search/repositories",
            {
                params: {
                    q: action.data,
                    sort: 'stars',
                    order: 'desc'
                }
            }
        );
        const { data } = response;
        yield put(receiveApiDataAction(data));
      } catch (e) {
          console.log(e);
      }
};
  

export default function* requestApiData() {
  yield takeEvery( GET_SEARCH_REPO_REQUEST, getSearchRepoRequest );
}
