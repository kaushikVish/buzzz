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
  SUGGESTED_FRIENDS,
  SUGGESTED_FRIENDS_SUCCESSFULLY,
  SUGGESTED_FRIENDS_FAILED,
  VIEW_PROFILE,
  ADD_FRIEND,
  ADD_FRIEND_SUCCESSFULLY,
  ADD_FRIEND_FAILED,
  UPDATE_DETAILS,
  DELETE_POST,
  DELETE_POST_SUCCESSFULLY,
  DELETE_POST_FAILED,
} from "../constants/feed";

export const postStory = (data) => {
  return {
    type: POST_STORY,
    payload: data,
  };
};

export const postStorySuccessfully = (data) => {
  return {
    type: POST_STORY_SUCCESSFULLY,
    payload: data,
  };
};

export const postStoryFailed = (message) => {
  return {
    type: POST_STORY_FAILED,
    payload: message,
  };
};

export const getPosts = (data) => {
  return {
    type: GET_POSTS,
    payload: data,
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

export const getSuggestedFriends = () => {
  return {
    type: SUGGESTED_FRIENDS,
  };
};

export const getSuggestedFriendsSuccessfully = (data) => {
  return {
    type: SUGGESTED_FRIENDS_SUCCESSFULLY,
    payload: data,
  };
};

export const getSuggestedFriendsFailed = (message) => {
  return {
    type: SUGGESTED_FRIENDS_FAILED,
    payload: message,
  };
};

export const viewProfile = (user) => {
  return {
    type: VIEW_PROFILE,
    payload: user,
  };
};

export const addFriend = (user) => {
  return {
    type: ADD_FRIEND,
    payload: user,
  };
};

export const addFriendSuccessfully = (data) => {
  return {
    type: ADD_FRIEND_SUCCESSFULLY,
    payload: data,
  };
};

export const addFriendFailed = (message) => {
  return {
    type: ADD_FRIEND_FAILED,
    payload: message,
  };
};

export const deletePost = (id) => {
  console.log("delete post action ===>", id);
  return {
    type: DELETE_POST,
    payload: id,
  };
};

export const deletePostSuccessfully = (id) => {
  return {
    type: DELETE_POST_SUCCESSFULLY,
    payload: id,
  };
};

export const deletePostFailed = () => {
  return {
    type: DELETE_POST_FAILED,
  };
};
