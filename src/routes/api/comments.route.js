const express = require("express");
const commentsController = require("@/controllers/api/comments.controller");
const {
  createCommentValidator,
  updateCommentValidator,
} = require("@/validators/api/comments.validator");
const attachResourceLoader = require("../../utils/attachResourceLoader");

const router = express.Router();
attachResourceLoader(router, ["comment"]);

router.get("/", commentsController.getList);
router.get("/:comment", commentsController.getOne);
router.post("/", createCommentValidator, commentsController.create);
router.put("/:comment", updateCommentValidator, commentsController.update);
router.patch("/:comment", updateCommentValidator, commentsController.update);
router.delete("/:comment", commentsController.remove);

module.exports = router;
