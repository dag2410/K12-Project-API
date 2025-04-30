const express = require("express");
const postsController = require("../controllers/posts.controller");

const {
  createPostValidator,
  updatePostValidator,
} = require("../validators/posts.validator");

const router = express.Router();

// writeDb("posts", [
//   { id: 1, title: "Tieu de bai blog 1", content: "noi dung 1" },
// ]);

//Get ALL
router.get("/", postsController.index);

//GET /posts/:id
router.get("/:id", postsController.show);

// POST /posts
router.post("/", createPostValidator, postsController.store);

// PUT/posts
router.put("/:id", updatePostValidator, postsController.update);

// PATCH/posts
router.patch("/:id", updatePostValidator, postsController.update);

// DELETE /posts

router.delete("/:id", postsController.destroy);

module.exports = router;
