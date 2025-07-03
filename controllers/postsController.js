const posts = require("../data/posts");

const index = function (req, res) {
  console.log(req.query);
  let filteredPost = posts;
  if (req.query.title) {
    filteredPost = posts.filter((post) => post.title.includes(req.query.title));
  }
  res.json(filteredPost);
};

const show = function (req, res) {
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
};

const destroy = function (req, res) {
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
};

const store = function (req, res) {
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
};

const update = function (req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "post non trovato",
    });
  }
  post.title = req.body.title;
  (post.content = req.body.content), (post.image = req.body.image);
  post.tags = req.body.tags;

  console.log(posts);

  res.json(post);
};

module.exports = {
  index,
  show,
  destroy,
  store,
  update,
};
