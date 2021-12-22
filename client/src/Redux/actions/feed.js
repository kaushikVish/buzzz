import {POST_STORY} from '../constants/feed';


export const postStory = (data) =>{
    return{
        type:POST_STORY,
        payload:data
    };
}