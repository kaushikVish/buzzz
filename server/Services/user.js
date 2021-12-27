var mongoose = require("mongoose");
const { userModel, postModel } = require("../Models/user");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
const jwt = require("jsonwebtoken");
var _id = mongoose.Types.ObjectId();

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

//used in creating dummy users

// module.exports.create = async ({
//   email,
//   userName,
//   firstName,
//   lastName,
//   picture,
// }) => {
//   let newUser=await userModel.create({
//     email,
//     userName,
//     firstName,
//     lastName,
//     picture,
//   });
//   return {newUser,message:"New User Created"}
// };

module.exports.getUserDetails = async (req, res) => {
  try {
    console.log("req user =======>", req.user);
    let userDetails = await userModel.findById(req.user);

    return userDetails;
  } catch (error) {
    console.log("whats happening ", error);
    return error;
  }
};

module.exports.suggestedFriends = async (req) => {
  try {
    let all_users = await userModel.find();
    console.log("req users ====>", req.user);
    let user = await userModel.findById(req.user);
    // if(!user.friends.length){
    //   return all_users;
    // }
    let newData = [...all_users, ...user.friends];
    const filteredData = newData.reduce((a, e) => {
      a[e.id] = ++a[e.id] || 0;
      return a;
    }, {});
    let result = newData.filter((e) => filteredData[e.id]);
    console.log("filtered data ======> ", result);
    return result;
  } catch (error) {
    console.log("errror ======>", error);
    return error;
  }
};

module.exports.addFriend = async (req) => {
  try {
    return {};
  } catch (error) {
    return error;
  }
};

module.exports.createPost = async (req, res) => {
  // console.log("req of create post in services", req.body);
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
    const postValid = await postModel.findById(id);
    console.log("post valid in services =====> ", data);
    if (postValid !== undefined) {
      if (reaction === "like") {
        await postModel.findByIdAndUpdate(id, {
          $pull: { "postReaction.dislike": user },
        });

        await postModel.findByIdAndUpdate(id, {
          $addToSet: { "postReaction.like": user },
        });

        let message = "liked post successfully";
        return message;
      } else if (reaction === "dislike") {
        await postModel.findByIdAndUpdate(id, {
          $pull: { "postReaction.like": user },
        });

        await postModel.findByIdAndUpdate(id, {
          $addToSet: { "postReaction.dislike": user },
        });

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
    const postValid = await postModel.findById(id);
    console.log("find ==>", postValid);
    if (postValid) {
      await postModel.findByIdAndUpdate(id, {
        $addToSet: { postComments: user },
      });

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
    const { postId, user } = data;
    const postValid = await postModel.findById(postId);
    if (postValid) {
      let response = await postModel.findByIdAndUpdate(postId, {
        $pull: { postComments: { user } },
      });
      let message = "delete comment success";
      return { response, message };
    } else {
      let message = "delete comment failed";
      return message;
    }
  } catch (error) {}
};
