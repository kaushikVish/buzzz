import {
  POST_STORY,
  GET_POSTS,
  POST_STORY_SUCCESSFULLY,
  POST_STORY_FAILED,
} from "../constants/feed";

export const postStory = (data) => {
  return {
    type: POST_STORY,
    payload: data,
  };
};

export const postStorySuccessfully = () => {
  return {
    type: POST_STORY_SUCCESSFULLY,
  };
};

export const postStoryFailed = () => {
  return {
    type: POST_STORY_FAILED,
  };
};

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getPostSuccessfully = (data) => {
  return {
    type: GET_POSTS,
    payload: data,
  };
};

export const getPostFailed = (message) => {
  return {
    type: GET_POSTS,
    payload: message,
  };
};
