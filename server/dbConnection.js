(function () {
  const mongoose = require("mongoose");

  const DB =
    "mongodb+srv://kaushik:ttn@cluster0.lms7n.mongodb.net/buzzz?retryWrites=true&w=majority";

  mongoose
    .connect(DB)
    .then(() => {
      console.log("MongoDB connection successfuly");
    })
    .catch((err) => {
      console.log("MongoDB connection failed");
    });
})();
