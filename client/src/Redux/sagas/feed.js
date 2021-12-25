import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  GET_POSTS,
  LIKE_POST,
  DISLIKE_POST,
  POST_STORY,
  POST_COMMENT,
  POST_REACTION,
} from "../constants/feed";
import {
  postStorySuccessfully,
  postStoryFailed,
  getPostSuccessfully,
  getPostFailed,
  postReactionSuccessfully,
  postReactionFailed,
  postCommentSuccessfully,
  postCommentFailed,
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

export function* postReaction() {
  console.log("Hey sagasg like post");
  yield takeEvery(POST_REACTION, function* ({ payload }) {
    try {
      const response = yield call(services.postReaction, payload);
      if (response.status === 200) {
        yield put(postReactionSuccessfully("Like Post Successfully"));
      } else {
        yield put(postReactionFailed("Like Post Failed"));
      }
    } catch (error) {
      yield put(postReactionFailed("Like Post Failed"));
    }
  });
}

export function* postComment() {
  yield takeEvery(POST_COMMENT, function* ({ payload }) {
    try {
      const response = yield call(services.postComment, payload);
      if (response.status === 200) {
        yield put(postCommentSuccessfully("Post Comment Successfully"));
      } else {
        yield put(postCommentFailed("Post Comment Failed"));
      }
    } catch (error) {
      yield put(postCommentFailed("Post Comment Failed"));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(postStory),
    fork(getPosts),
    fork(postReaction),
    fork(postComment),
  ]);
}
