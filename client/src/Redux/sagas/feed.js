import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  GET_POSTS,
  POST_STORY,
  POST_COMMENT,
  POST_REACTION,
  SUGGESTED_FRIENDS,
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
  getSuggestedFriendsSuccessfully,
  getSuggestedFriendsFailed,
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
      // console.log("hey in getting post sagas");
      const response = yield call(services.getPosts);
      // console.log("response of get posts =====> ", response);
      // debugger;
      if (response.status==200) {
        yield put(getPostSuccessfully(response.post));
      } else {
        yield put(getPostFailed("Fetching post failed"));
      }
    } catch (error) {
      console.log("error in fecthing post sagas", error);
    }
  });
}

export function* postReaction() {
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

export function* getSuggestedFriends() {
  yield takeEvery(SUGGESTED_FRIENDS, function* () {
    try {
      const response = yield call(services.getSuggestedFriends);
      if (response.status === 200) {
        yield put(getSuggestedFriendsSuccessfully(response.data));
      } else {
        yield put(
          getSuggestedFriendsFailed("Failed to fetch suggestion of friends")
        );
      }
    } catch (error) {
      console.log("sagas error in suggested friends ", error);
      yield put(
        getSuggestedFriendsFailed("Failed to fetch suggestion of friends")
      );
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(postStory),
    fork(getPosts),
    fork(postReaction),
    fork(postComment),
    fork(getSuggestedFriends),
  ]);
}
