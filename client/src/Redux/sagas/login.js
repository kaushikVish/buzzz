import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { LOGIN_WITH_GOOGLE } from "../constants/login";
import { loginSuccess, loginFailed } from "../actions/login";
import services from "../services/index";

export function* loginWithGoogle() {
  yield takeEvery(LOGIN_WITH_GOOGLE, function* ({ payload }) {
    try {
      const response = yield call(services.loginWithGoogle, payload);
      if (response.ok) {
        yield put(loginSuccess("login successfull"));
      }else{
        yield put(loginFailed("login falied"))
      }
    } catch (error) {
      console.log("error in sagas", error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(loginWithGoogle)]);
}
