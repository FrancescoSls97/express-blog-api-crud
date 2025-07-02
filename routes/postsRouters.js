const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

//index
router.get("/", function (req, res) {
  res.json(posts);
});

//show
router.get("/:id", function (req, res) {
  res.send(posts);
});
module.exports = router;
