const express = require("express");
const { readDb, writeDb } = require("../utils/file");
const router = express.Router();

const RESOURCE = "posts";

const posts = [];

writeDb("posts", [
  { id: 1, title: "Tieu de bai blog 1", content: "noi dung 1" },
]);

//Get ALL
router.get("/", async (req, res) => {
  const posts = await readDb(RESOURCE);
  res.json({
    status: "success",
    data: posts,
  });
});

//GET /posts/:id
router.get("/:id", async (req, res) => {
  const posts = await readDb(RESOURCE);
  const post = posts.find((item) => item.id === +req.params.id);

  if (!post) {
    res.json({
      status: "error",
      message: "Resource not found",
    });

    return;
  }
  res.json({
    status: "success",
    data: post,
  });
});

// POST /posts
router.post("/", async (req, res) => {
  const posts = await readDb(RESOURCE);
  const newPost = {
    id: (posts[posts.length - 1].id ?? 0) + 1,
    content: req.body.content,
    title: req.body.title,
  };

  posts.push(newPost);
  await writeDb(RESOURCE, posts);

  res.json({
    status: "success",
    data: newPost,
  });
});

// PUT/posts
router.put("/:id", async (req, res) => {
  const posts = await readDb(RESOURCE);
  const post = posts.find((post) => post.id === +req.params.id);

  if (!post) {
    res.json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }
  console.log(post);
  post.title = req.body.title;
  post.content = req.body.content;

  await writeDb(RESOURCE, posts);

  res.json({
    status: "success",
    data: post,
  });
});

// DELETE /posts

router.delete("/:id", async (req, res) => {
  const posts = await readDb(RESOURCE);
  const index = posts.findIndex((post) => post.id === +req.params.id);

  if (index === -1) {
    res.json({
      status: "error",
      message: "Resource not found",
    });

    return;
  }
  posts.splice(index, 1);
  await writeDb(RESOURCE, posts);

  res.status(204).send();
});

module.exports = router;
