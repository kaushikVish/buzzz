import {all} from "redux-saga/effects";
import login from './login';
import feed from './feed'

export default function* rootSaga(){
    yield all([login(),feed()]);
}