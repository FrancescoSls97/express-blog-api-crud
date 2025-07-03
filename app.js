const express = require("express");
const app = express();
const port = 3000;
const postsRouters = require("./routes/postsRouters");
const errorsHandler = require("./middlewares/errorsHandler");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to my blog");
});
app.use("/api/posts", postsRouters);
app.listen(port, () => {
  console.log("Listening to server");
});

app.use(errorsHandler);
