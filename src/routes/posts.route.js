const express = require("express");
const postsController = require("@/controllers/posts.controller");

const {
  createPostValidator,
  updatePostValidator,
  createCommentPostValidator,
} = require("@/validators/posts.validator");

const router = express.Router();

// writeDb("posts", [
//   { id: 1, title: "Tieu de bai blog 1", content: "noi dung 1" },
// ]);

//Get ALL
router.get("/", postsController.getAllPosts);

//GET /posts/:id
router.get("/:id", postsController.getPostById);

// POST /posts
router.post("/", createPostValidator, postsController.createPost);

// PUT/posts
router.put("/:id", updatePostValidator, postsController.updatePost);

// PATCH/posts
router.patch("/:id", updatePostValidator, postsController.updatePost);

// DELETE /posts

router.delete("/:id", postsController.deletePost);

// //Post comments
router.get("/:id/comments", postsController.getPostComments);
router.post(
  "/:id/comments",
  createCommentPostValidator,
  postsController.createPostComments
);

module.exports = router;
