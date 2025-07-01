const express = require("express");
const app = express();
const port = 3000;
const routers = require("./routes/routers");
app.get("/", (req, res) => {
  res.send("Welcome to my blog");
});

app.listen(port, () => {
  console.log("Listening to server");
});
