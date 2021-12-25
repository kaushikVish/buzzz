const user = require("../Services/user");

module.exports.create = async (req, res) => {
  const response = await user.create(req.body);
  res.send(JSON.stringify(response));
};

module.exports.createPost = async (req, res) => {
  const response = await user.createPost(req);
  res.status(200);
  res.send(JSON.stringify(response));
};

module.exports.getPosts = async (req, res) => {
  const response = await user.getPosts();
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

module.exports.deleteComment = async (req,res) => {
  const response= await user.deleteComment(req.body);
  res.send(JSON.stringify(response));
}