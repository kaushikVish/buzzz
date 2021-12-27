import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { GET_USER_DETAILS, LOGIN_WITH_GOOGLE } from "../constants/login";
import {
  loginSuccess,
  loginFailed,
  getUserDetailsSuccessfully,
  getUserDetailsFailed,
} from "../actions/login";
import services from "../services/index";

export function* loginWithGoogle() {
  yield takeEvery(LOGIN_WITH_GOOGLE, function* ({ payload }) {
    try {
      const response = yield call(services.loginWithGoogle, payload);

      if (response.ok) {
        console.log("response ============>", response);
        yield put(loginSuccess(response));
        localStorage.setItem("AUTH_TOKEN", response.token);
      } else {
        yield put(loginFailed("login falied"));
      }
    } catch (error) {
      console.log("error in sagas", error);
    }
  });
}

export function* getUserDetails() {
  yield takeEvery(GET_USER_DETAILS, function* () {
    try {
      const response = yield call(services.getUserDetails);
      if (response.status===200) {
        yield put(getUserDetailsSuccessfully(response.result));
      } else {
        yield put(getUserDetailsFailed("Failed in fetching details"));
      }
    } catch (error) {
      console.log("error in sagas in getting user details", error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(loginWithGoogle), fork(getUserDetails)]);
}
