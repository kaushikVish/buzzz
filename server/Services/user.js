const { userModel, postModel } = require("../Models/user");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
const jwt = require("jsonwebtoken");
const { response } = require("express");

module.exports.create = async ({ tokenId }) => {
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture, family_name, given_name } = ticket.getPayload();

  let user = await userModel.find({ email });
  let newUser;
  if (user.length) {
    let id = user[0].id;
    newUser = await userModel.findById(id);
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      `${process.env.JWT_KEY}`,
      {
        expiresIn: "1d",
      }
    );
    return { newUser, token };
    // console.log("Update email");
  } else {
    console.log("hey in service of createa user");
    newUser = await userModel.create({
      email,
      userName: name,
      firstName: given_name,
      lastName: family_name,
      picture,
    });
    console.log("Saved the new User");
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      `${process.env.JWT_KEY}`,
      {
        expiresIn: "1d",
      }
    );
    return { newUser, token };
  }
};

module.exports.createPost = async (req, res) => {
  console.log("req in services", req.body);
  try {
    let user_response = await userModel.findById(req.user);
    // console.log(user_response.userName, "   ", user_response.picture);

    let newPost = await postModel.create({
      text: req.body.postText,
      imageUrl: req.body.postImage_url,
      user: {
        userId: req.user,
        username: user_response.userName,
        imageUrl: user_response.picture,
      },
    });
    return { newPost };
  } catch (err) {
    console.log("error in posting story services ", err);
    return err;
  }
};

module.exports.getPosts = async (req, res) => {
  try {
    let allposts = await postModel.find().sort({ _id: 1 }).limit(10);
    return allposts;
  } catch (err) {
    console.log("error in getting posts  ", err);
    return err;
  }
};

module.exports.postReaction = async (data) => {
  try {
    const { id, reaction, user } = data;
    const postValid = await postModel.find({ id });
    console.log("post valid in services =====> ", postValid.length);
    if (postValid.length) {
      if (reaction === "like") {
        await postModel.updateOne(
          { id },
          { $pull: { "postReaction.dislike ": user } }
        );

        await postModel.updateOne(
          { id },
          { $addToSet: { "postReaction.like": user } }
        );

        let message = "liked post successfully";
        return message;
      } else if (reaction === "dislike") {
        await postModel.updateOne(
          { id },
          { $pull: { "postReaction.like": user } }
        );

        await postModel.updateOne(
          { id },
          { $addToSet: { "postReaction.dislike": user } }
        );

        let message = "disliked post successfully";
        return message;
      }
    } else {
      let message = "post reaction failed";
      return message;
    }
  } catch (error) {
    console.log("error in services =====> ", error);
    return error;
  }
};

module.exports.postComment = async (data) => {
  try {
    const { id, user } = data;
    const postValid = await postModel.find({ id });
    if (postValid.length) {
      await postModel.updateOne({ id }, { $addToSet: { postComments: user } });

      let message = "posted comment successfully";
      return message;
    } else {
      let message = "posted comment failed";
      return message;
    }
  } catch (error) {
    console.log("error in services =====> ", error);
    return error;
  }
};

module.exports.deleteComment = async (data) => {
  try {
    const { postId, commentId } = data;
    const postValid = await postModel.find({ postId });
    if (postValid.length) {
      await postModel.updateOne(
        { postId },
        { $pull: { postComments: commentId } }
      );
    } else {
      let message = "delete comment failed";
      return message;
    }
  } catch (error) {}
};
