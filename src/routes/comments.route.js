const express = require("express");
const commentsController = require("../controllers/comments.controller");
const {
  createCommentValidator,
  updateCommentValidator,
} = require("../validators/comments.validator");

const router = express.Router();
// writeDb("comments", [{ id: 1, content: "binh luan bai blog" }]);

//Get ALL
router.get("/", commentsController.getAllComments);

//GET /comments/:id
router.get("/:id", commentsController.getCommentById);

// POST /comments
router.post("/", createCommentValidator, commentsController.createComment);

// PUT/comments
router.put("/:id", updateCommentValidator, commentsController.updateComment);

// PATCH/comments
router.patch("/:id", updateCommentValidator, commentsController.updateComment);

// DELETE /comments

router.delete("/:id", commentsController.deleteComment);

module.exports = router;
