const express = require("express");
var routes = require("./Routes");
const cors = require("cors");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

require("./dbConnection");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser);

app.use(routes);

app.listen(port, (req, res) => {
  console.log("server is listening at port", port);
});

