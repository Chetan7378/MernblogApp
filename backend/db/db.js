const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb+srv://root:root@cluster0.r5whdug.mongodb.net/blogapp";
// Connect MongoDB at default port 27017.
let mong = mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
