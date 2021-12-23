import {
  GET_POSTS,
  POST_STORY,
  POST_STORY_SUCCESSFULLY,
} from "../constants/feed";

const initState = {
  loading: false,
  message: "",
  posts: [],
};

const feed = (state = initState, action) => {
  console.log("hey in feed reducers", action.type);
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
      };

    case GET_POSTS:
      return {
        ...state,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default feed;
