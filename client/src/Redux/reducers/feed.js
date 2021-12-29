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
} from "../constants/feed";

const initState = {
  loading: false,
  message: "",
  // posts: [
  //   {
  //     postReaction: {
  //       like: [
  //         {
  //           userId: "61c460a57ed067b94b5a3816",
  //           username: "Vishal Kaushik",
  //           imageUrl:
  //             "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         },
  //       ],
  //       dislike: [],
  //     },
  //     _id: "61c5e2136206873204c22a41",
  //     text: "vibhu kaushik ",
  //     imageUrl:
  //       "https://res.cloudinary.com/dggjn2kcy/image/upload/v1640358418/buzzz/twut9ol93bnjco6lxyr1.jpg",
  //     user: {
  //       userId: "61c460a57ed067b94b5a3816",
  //       username: "Vishal Kaushik",
  //       imageUrl:
  //         "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //     },
  //     postComments: [
  //       {
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         comment: "happy",
  //       },
  //       {
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         comment: "sad",
  //       },
  //       {
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         comment: "angry",
  //       },
  //       {
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         comment: "great",
  //       },
  //       {
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         comment: "hey",
  //       },
  //       {
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         comment: "good",
  //       },
  //       {
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         comment: "end",
  //       },
  //       {
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         comment: "mindblowing",
  //       },
  //     ],
  //   },
  //   {
  //     postReaction: {
  //       like: [
  //         {
  //           userId: "61c460a57ed067b94b5a3816",
  //           username: "Vishal Kaushik",
  //           imageUrl:
  //             "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         },
  //       ],
  //       dislike: [],
  //     },
  //     _id: "61c8c393d278dbeddf9ca9f5",
  //     text: "Powerfull people makes places powerfull",
  //     imageUrl:
  //       "https://res.cloudinary.com/dggjn2kcy/image/upload/v1640547218/buzzz/qroofyiiwxc7hrbzzhdo.jpg",
  //     user: {
  //       userId: "61c460a57ed067b94b5a3816",
  //       username: "Vishal Kaushik",
  //       imageUrl:
  //         "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //     },
  //     postComments: [
  //       {
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         comment: "klklkl",
  //       },
  //       {
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         comment: "happy",
  //       },
  //       {
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         comment: "great",
  //       },
  //       {
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         comment: "wow",
  //       },
  //       {
  //         userId: "61c460a57ed067b94b5a3816",
  //         username: "Vishal Kaushik",
  //         imageUrl:
  //           "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //         comment: "amazing",
  //       },
  //     ],
  //   },
  //   {
  //     postReaction: {
  //       like: [],
  //       dislike: [],
  //     },
  //     _id: "61c979e897c17f1adedd14d6",
  //     text: "hy",
  //     imageUrl:
  //       "https://res.cloudinary.com/dggjn2kcy/image/upload/v1640593895/buzzz/zrxzralzs0h30hqe2esv.png",
  //     user: {
  //       userId: "61c460a57ed067b94b5a3816",
  //       username: "Vishal Kaushik",
  //       imageUrl:
  //         "https://lh3.googleusercontent.com/a/AATXAJxIv1PQx5WrunfjUCVgnqReaDDJZAbqEWw1JMrs=s96-c",
  //     },
  //     postComments: [],
  //   },
  // ],
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
      console.log("id ", action.payload.id);
      let newList = state.suggestedFriends.filter(
        (item) => item.id !== action.payload.id
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

    default:
      return {
        ...state,
      };
  }
};

export default feed;
