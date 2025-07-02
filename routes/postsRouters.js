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

//destroy
router.delete("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "post non trovato",
    });
  }
  posts.splice(posts.indexOf(post), 1);
  console.log(posts);

  res.sendStatus(204);
});

//store
router.post("/", function (req, res) {
  const newId = posts[posts.length - 1].id + 1;
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };
  posts.push(newPost);
  console.log(posts);
  res.status(201);
  res.json(newPost);
});
module.exports = router;
