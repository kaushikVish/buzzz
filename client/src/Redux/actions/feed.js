import {
  POST_STORY,
  GET_POSTS,
  POST_STORY_SUCCESSFULLY,
  POST_STORY_FAILED,
  GET_POSTS_SUCCESSFULLY,
  GET_POSTS_FAILED,
} from "../constants/feed";

export const postStory = (data) => {
  return {
    type: POST_STORY,
    payload: data,
  };
};

export const postStorySuccessfully = (message) => {
  return {
    type: POST_STORY_SUCCESSFULLY,
    payload: message,
  };
};

export const postStoryFailed = (message) => {
  return {
    type: POST_STORY_FAILED,
    payload: message,
  };
};

export const getPosts = () => {
  // console.log("get post in action")
  return {
    type: GET_POSTS,
  };
};

export const getPostSuccessfully = (data) => {
  return {
    type: GET_POSTS_SUCCESSFULLY,
    payload: data,
  };
};

export const getPostFailed = (message) => {
  return {
    type: GET_POSTS_FAILED,
    payload: message,
  };
};
