import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  GET_POSTS,
  POST_STORY,
  POST_COMMENT,
  POST_REACTION,
  SUGGESTED_FRIENDS,
  ADD_FRIEND,
  DELETE_POST,
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
  addFriendSuccessfully,
  addFriendFailed,
  deletePostSuccessfully,
  deletePostFailed,
} from "../actions/feed";
import services from "../services/index";

export function* postStory() {
  yield takeEvery(POST_STORY, function* ({ payload }) {
    try {
      const response = yield call(services.postStory, payload);
      console.log("response ====>", response);
      if (response) {
        yield put(postStorySuccessfully(response));
      } else {
        yield put(postStoryFailed("Posted Failed"));
      }
    } catch (error) {
      console.log("error response ====>", error);
    }
  });
}

export function* getPosts() {
  yield takeEvery(GET_POSTS, function* ({payload}) {
    try {
      const response = yield call(services.getPosts,payload);
      if (response.status == 200) {
        yield put(getPostSuccessfully(response.post));
      } else {
        yield put(getPostFailed("Fetching post failed"));
      }
    } catch (error) {
      yield put(getPostFailed());
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

export function* addFriend() {
  yield takeEvery(ADD_FRIEND, function* ({ payload }) {
    try {
      const response = yield call(services.addFriend, payload);
      if (response) {
        yield put(addFriendSuccessfully(response));
      } else {
        yield put(addFriendFailed(response.message));
      }
    } catch (error) {
      console.log("sagas response in add friend ", error);
    }
  });
}

export function* deletePost() {
  yield takeEvery(DELETE_POST, function* ({ payload }) {
    try {
      const response = yield call(services.deletePost, payload);
      if (response) {
        yield put(deletePostSuccessfully(response));
      } else {
        yield put(deletePostFailed());
      }
    } catch (error) {
      yield put(deletePostFailed());
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
    fork(addFriend),
    fork(deletePost),
  ]);
}
