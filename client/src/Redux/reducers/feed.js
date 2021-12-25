import {
  GET_POSTS,
  GET_POSTS_SUCCESSFULLY,
  GET_POSTS_FAILED,
  POST_STORY,
  POST_STORY_SUCCESSFULLY,
  POST_STORY_FAILED,
  POST_COMMENT,
  POST_COMMENT_SUCCESSFULLY,
  POST_COMMENT_FAILED,
  POST_REACTION,
  POST_REACTION_SUCCESSFULLY,
  POST_REACTION_FAILED,
} from "../constants/feed";

const initState = {
  loading: false,
  message: "",
  posts: [],
};

const feed = (state = initState, action) => {
  // console.log("hey in feed reducers", action.type);
  switch (action.type) {
    case POST_STORY:
      return {
        ...state,
        loading: true,
      };

    case POST_STORY_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case POST_STORY_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case GET_POSTS:
      return {
        ...state,
        loading: true,
      };

    case GET_POSTS_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        message: "Fetched Data Successfully",
      };

    case GET_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case POST_REACTION:
      return {
        ...state,
        loading: true,
      };

    case POST_REACTION_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case POST_REACTION_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case POST_COMMENT:
      return {
        ...state,
        loading: true,
      };

    case POST_COMMENT_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case POST_COMMENT_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default feed;
