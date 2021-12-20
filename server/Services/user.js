const { userModel } = require("../Models/user");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
const jwt = require("jsonwebtoken");

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
    const token = jwt.sign({ email: email }, "kaushik", {
      expiresIn: "1d",
    });
    return { newUser, token };
    // console.log("Update email");
  } else {
    newUser = await new userModel({
      email,
      userName: name,
      firstName: given_name,
      lastName: family_name,
      picture,
    });

    const valid = await new Promise(async (resolve) => {
      newUser.validate((err) => {
        if (err) {
          console.log("Error: ", err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
      if (valid) {
        await newUser.save();
        console.log("Saved the new User");

        const token = jwt.sign({ email: email }, "kaushik", {
          expiresIn: "1d",
        });
        return { newUser, token };
      } else {
        console.log("User not saved");
        return;
      }
    });
  }
};
