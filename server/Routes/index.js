const user = require("../Controller/user");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

//custom middlewares
const authenticateToken = (req, res, next) => {
  try {
    const token = req.header("authorization").split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ msg: "No authentication token, Access Denied" });
    }

    const verified = jwt.verify(token, `${process.env.JWT_KEY}`);
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied" });

    req.user = verified.id;
    next();
  } catch (err) {
    console.log("Error in authentication token", err);
    res.status(500).json({ error: err.message });
  }
};

router.post("/login", user.create);
router.get("/getUserDetails", authenticateToken, user.getUserDetails);
router.post("/create_post", authenticateToken, user.createPost);
router.get("/getPosts/:id", authenticateToken, user.getPosts);
router.post("/post_reaction", authenticateToken, user.postReaction);
router.post("/post_comment", authenticateToken, user.postComment);
router.delete("/delete_comment", authenticateToken, user.deleteComment);
router.get("/suggestionFriends", authenticateToken, user.suggestedFriends);
router.post("/addFriend", authenticateToken, user.addFriend);
router.post("/updateDetails", authenticateToken, user.updateDetails);
router.patch("/reportPost/:id", authenticateToken, user.reportPost);
router.delete("/deletePost/:id", authenticateToken, user.deletePost);

module.exports = router;
