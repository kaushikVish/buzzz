import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { GET_POSTS, POST_STORY } from "../constants/feed";
import {
  postStorySuccessfully,
  postStoryFailed,
  getPostSuccessfully,
  getPostFailed,
} from "../actions/feed";
import services from "../services/index";

export function* postStory() {
  yield takeEvery(POST_STORY, function* ({ payload }) {
    try {
      const response = yield call(services.postStory, payload);
      console.log("response ====>", response);
      if (response.status === 200) {
        yield put(postStorySuccessfully("Posted Successfully"));
      } else {
        yield put(postStoryFailed("Posted Failed"));
      }
    } catch (error) {
      console.log("error response ====>", error);
    }
  });
}

export function* getPosts() {
  yield takeEvery(GET_POSTS, function* () {
    try {
      console.log("hey in getting post sagas");
      const response = yield call(services.getPosts);
      console.log("response of get posts =====> ", response);
      if (response.status === 200) {
        yield put(getPostSuccessfully(response.post));
      } else {
        yield put(getPostFailed("Fetching post failed"));
      }
    } catch (error) {}
  });
}

export default function* rootSaga() {
  yield all([fork(postStory), fork(getPosts)]);
}
