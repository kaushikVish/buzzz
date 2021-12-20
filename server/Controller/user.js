const user = require("../Services/user");

module.exports.create = async (req, res) => {
  const response = await user.create(req.body);
  res.send(JSON.stringify(response));
};
