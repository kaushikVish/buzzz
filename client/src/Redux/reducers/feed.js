import { POST_STORY } from "../constants/feed";

const initState = {
  loading: false,
  message: "",
};

const feed = (state = initState, action) => {
  console.log("hey in feed reducers",action.type);
  switch (action.type) {
    case POST_STORY:
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
