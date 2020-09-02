import { put, takeEvery } from "redux-saga/effects";
// import { call, put, takeEvery, takeLatest, take } from "redux-saga/effects";
import axios from 'axios';


import { 
    GET_SEARCH_REPO_REQUEST,
    receiveApiDataAction,
 } from "./actions";

export function* getSearchRepoRequest() {
      try {
        const response = yield axios.get("https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc");
        console.warn(response.data);
        const { data } = response;
        yield put(receiveApiDataAction(data));
      } catch (e) {
          console.log(e);
      }
};
  

export default function* requestApiData() {
  yield takeEvery( GET_SEARCH_REPO_REQUEST, getSearchRepoRequest );
}
