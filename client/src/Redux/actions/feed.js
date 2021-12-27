import {
  POST_STORY,
  POST_STORY_SUCCESSFULLY,
  POST_STORY_FAILED,
  GET_POSTS,
  GET_POSTS_SUCCESSFULLY,
  GET_POSTS_FAILED,
  POST_REACTION,
  POST_REACTION_SUCCESSFULLY,
  POST_REACTION_FAILED,
  POST_COMMENT,
  POST_COMMENT_SUCCESSFULLY,
  POST_COMMENT_FAILED,
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

export const postReaction = (data) => {
  // console.log("hey in action")
  return {
    type: POST_REACTION,
    payload: data,
  };
};

export const postReactionSuccessfully = (message) => {
  return {
    type: POST_REACTION_SUCCESSFULLY,
    payload: message,
  };
};

export const postReactionFailed = (message) => {
  return {
    type: POST_REACTION_FAILED,
    payload: message,
  };
};

export const postComment = (data) => {
  return {
    type: POST_COMMENT,
    payload: data,
  };
};

export const postCommentSuccessfully = (message) => {
  return {
    type: POST_COMMENT_SUCCESSFULLY,
    payload: message,
  };
};

export const postCommentFailed = (message) => {
  return {
    type: POST_COMMENT_FAILED,
    payload: message,
  };
};
