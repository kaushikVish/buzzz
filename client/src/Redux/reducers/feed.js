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
  SUGGESTED_FRIENDS,
  SUGGESTED_FRIENDS_SUCCESSFULLY,
  SUGGESTED_FRIENDS_FAILED,
  VIEW_PROFILE,
  ADD_FRIEND,
  ADD_FRIEND_SUCCESSFULLY,
  ADD_FRIEND_FAILED,
  DELETE_POST,
  DELETE_POST_SUCCESSFULLY,
  DELETE_POST_FAILED,
} from "../constants/feed";

const initState = {
  loading: false,
  message: "",
  posts: [],
  suggestedFriends: [],
  viewProfileUser: {},
};

const feed = (state = initState, action) => {
  switch (action.type) {
    case POST_STORY:
      return {
        ...state,
        loading: true,
      };

    case POST_STORY_SUCCESSFULLY:
      console.log("posts action payload ======>", action.payload);
      let newPosts = state.posts;
      newPosts.unshift(action.payload.newPost);
      console.log("new posts ======>", newPosts);
      return {
        ...state,
        loading: false,
        posts: newPosts,
        message: "Post Story Successfully",
      };

    case POST_STORY_FAILED:
      console.log("hey error in deletion");
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
      let newPostLists = state.posts;
      action.payload.forEach((element) => {
        newPostLists.push(element);
      });
      return {
        ...state,
        loading: false,
        posts: newPostLists,
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

    case SUGGESTED_FRIENDS:
      return {
        ...state,
        loading: true,
      };

    case SUGGESTED_FRIENDS_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        suggestedFriends: action.payload,
      };

    case SUGGESTED_FRIENDS_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case VIEW_PROFILE:
      return {
        ...state,
        viewProfileUser: action.payload,
      };

    case ADD_FRIEND:
      return {
        ...state,
        loading: true,
      };

    case ADD_FRIEND_SUCCESSFULLY:
      let newList = state.suggestedFriends.filter(
        (item) => item._id !== action.payload.id
      );
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        suggestedFriends: newList,
      };

    case ADD_FRIEND_FAILED:
      return {
        ...state,
        loading: false,
      };

    case DELETE_POST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_POST_SUCCESSFULLY:
      console.log("action payload id ====>", action.payload.id);
      let deletePosts = state.posts.filter((item) => item._id !== action.payload.id);
      console.log("new posts after deletion===> ", deletePosts);
      return {
        ...state,
        loading: false,
        posts: deletePosts,
        message: "Delete Post Successfully",
      };

    case DELETE_POST_FAILED:
      return {
        ...state,
        loading: false,
        message: "Delete Post Failed",
      };

    default:
      return {
        ...state,
      };
  }
};

export default feed;
