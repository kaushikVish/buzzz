import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { POST_STORY } from "../constants/feed";
// import { postSuccess, postFailed } from "../actions/login";
import services from "../services/index";

export function* postStory() {
    yield takeEvery(POST_STORY, function* ({payload}){
        try{
            const response = yield call(services.postStory,payload)
            if(response.ok){
                console.log("response ====>",response);
            }
        }catch(error){
            console.log("error response ====>",error);
        }
    })
}

export default function* rootSaga() {
    yield all([fork(postStory)]);
}