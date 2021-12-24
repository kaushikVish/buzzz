import {
  GET_POSTS,
  POST_STORY,
  POST_STORY_SUCCESSFULLY,
  POST_STORY_FAILED,
  GET_POSTS_SUCCESSFULLY,
  GET_POSTS_FAILED,
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
      // let data = state.posts;
      // data = action.payload.map((item,index) => {
      //   console.log("item ====>",item)
      //   return item;
      // });
      // console.log("action payload success", data);
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

    default:
      return {
        ...state,
      };
  }
};

export default feed;
