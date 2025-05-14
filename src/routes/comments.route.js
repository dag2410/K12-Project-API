const express = require("express");
const commentsController = require("@/controllers/comments.controller");
const {
  createCommentValidator,
  updateCommentValidator,
} = require("@/validators/comments.validator");
const attachResourceLoader = require("../../utils/attachResourceLoader");

const router = express.Router();
// writeDb("comments", [{ id: 1, content: "binh luan bai blog" }]);

attachResourceLoader(router, ["comment"]);
//Get ALL
router.get("/", commentsController.getList);

//GET /comments/:id
router.get("/:comment", commentsController.getOne);

// POST /comments
router.post("/", createCommentValidator, commentsController.create);

// PUT/comments
router.put("/:comment", updateCommentValidator, commentsController.update);

// PATCH/comments
router.patch("/:comment", updateCommentValidator, commentsController.update);

// DELETE /comments

router.delete("/:comment", commentsController.remove);

module.exports = router;
