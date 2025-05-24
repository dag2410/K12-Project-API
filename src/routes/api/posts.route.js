const express = require("express");
const postsController = require("@/controllers/api/posts.controller");
const {
  createPostValidator,
  updatePostValidator,
  createCommentPostValidator,
} = require("@/validators/posts.validator");
const attachResourceLoader = require("../../../utils/attachResourceLoader");

const router = express.Router();
attachResourceLoader(router, ["post"]);

router.get("/", postsController.getList);

router.get("/:post", postsController.getOne);

router.post("/", createPostValidator, postsController.create);

router.put("/:post", updatePostValidator, postsController.update);

router.patch("/:post", updatePostValidator, postsController.update);

router.delete("/:post", postsController.remove);

router.get("/:post/comments", postsController.getComments);

// POST /posts/:post/comments
router.post(
  "/:post/comments",
  createCommentPostValidator,
  postsController.createPostComment
);

module.exports = router;
