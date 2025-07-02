const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

//index
router.get("/", function (req, res) {
  res.json(posts);
});

//show
router.get("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "post non trovato",
    });
  }
  res.json(post);
});
module.exports = router;
