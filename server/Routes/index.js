const user = require("../Controller/user");
const router = require("express").Router();

// const firstMiddleware = (req, res, next) => {
//   console.log("hey middileware", req.body);
//   next();
// };

router.post("/login", user.create);

module.exports = router;
