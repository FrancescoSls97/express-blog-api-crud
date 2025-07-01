const express = require("express");
const router = express.Router;
const posts = require("../data/posts");

router.get("/", function (res, req) {
  res.json(posts);
});

module.exports = routers;
