const express = require("express");
const postsController = require("@/controllers/posts.controller");

const {
  createPostValidator,
  updatePostValidator,
} = require("@/validators/posts.validator");

const attachResourceLoader = require("../../utils/attachResourceLoader");

const router = express.Router();

// Gắn middleware lấy post theo ID, gán vào req.post
attachResourceLoader(router, ["post"]);

// GET /posts
router.get("/", postsController.getList);

// GET /posts/:post
router.get("/:post", postsController.getOne);

// POST /posts
router.post("/", createPostValidator, postsController.create);

// PUT /posts/:post
router.put("/:post", updatePostValidator, postsController.update);

// PATCH /posts/:post
router.patch("/:post", updatePostValidator, postsController.update);

// DELETE /posts/:post
router.delete("/:post", postsController.remove);

// // GET /posts/:post/comments
// router.get("/:post/comments", postsController.getPostComments);

// // POST /posts/:post/comments
// router.post(
//   "/:post/comments",
//   createCommentPostValidator,
//   postsController.createPostComments
// );

module.exports = router;
