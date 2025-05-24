const express = require("express");
const commentsController = require("@/controllers/admin/comments.controller");

const router = express.Router();

router.get("/", commentsController.index);
router.get("/:id", commentsController.show);
router.get("/:id/edit", commentsController.edit);
router.post("/:id", commentsController.update);

module.exports = router;
