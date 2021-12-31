const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    picture: {
      type: String,
      required: true,
    },
    friends: {
      type: Array,
      default: [],
    },
    designation: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      default: "",
    },
    address: {
      city: {
        type: String,
        default: "",
      },
      state: {
        type: String,
        default: "",
      },
      pincode: {
        type: Number,
        default: null,
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    postReaction: {
      like: {
        type: Array,
        default: [],
      },
      dislike: {
        type: Array,
        default: [],
      },
    },
    postComments: {
      type: Array,
      default: [],
    },
    isReported: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    _id: true,
  }
);

const userModel = mongoose.model("user", userSchema);
const postModel = mongoose.model("post", postSchema);

module.exports = {
  userModel,
  postModel,
};
