const user = require("../Controller/user");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

//custom middlewares
const authenticateToken = (req, res, next) => {
  console.log("requested body",req.body)
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
router.post("/create_post", authenticateToken, user.createPost);
router.get('/getPosts',authenticateToken,user.getPosts)

module.exports = router;
