const user = require("../Services/user");

module.exports.create = async (req, res) => {
  const response = await user.create(req.body);
  res.send(JSON.stringify(response));
};

module.exports.getUserDetails = async (req, res) => {
  const response = await user.getUserDetails(req, res);
  res.send(JSON.stringify(response));
};

module.exports.createPost = async (req, res) => {
  const response = await user.createPost(req);
  res.status(200);
  res.send(JSON.stringify(response));
};

module.exports.getPosts = async (req, res) => {
  const response = await user.getPosts(req);
  res.send(JSON.stringify(response));
};

module.exports.postReaction = async (req, res) => {
  const response = await user.postReaction(req.body);
  res.send(JSON.stringify(response));
};

module.exports.postComment = async (req, res) => {
  const response = await user.postComment(req.body);
  res.send(JSON.stringify(response));
};

module.exports.deleteComment = async (req, res) => {
  const response = await user.deleteComment(req.body);
  res.send(JSON.stringify(response));
};

module.exports.suggestedFriends = async (req, res) => {
  const response = await user.suggestedFriends(req);
  res.send(JSON.stringify(response));
};

module.exports.addFriend = async (req, res) => {
  const response = await user.addFriend(req);
  res.send(JSON.stringify(response));
};

module.exports.updateDetails = async (req, res) => {
  const response = await user.updateDetails(req);
  res.send(JSON.stringify(response));
};

module.exports.reportPost = async (req, res) => {
  const response = await user.reportPost(req);
  res.send(JSON.stringify(response));
};

module.exports.deletePost = async (req, res) => {
  const response = await user.deletePost(req);
  res.send(JSON.stringify(response));
};
