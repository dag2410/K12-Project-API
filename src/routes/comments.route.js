const express = require("express");
const commentsController = require("../controllers/comments.controller");

const router = express.Router();
// writeDb("comments", [{ id: 1, content: "binh luan bai blog" }]);

//Get ALL
router.get("/", commentsController.index);

//GET /comments/:id
router.get("/:id", commentsController.show);

let uniId = 0;
// POST /comments
router.post("/", commentsController.store);

// PUT/comments
router.put("/:id", commentsController.update);

// PATCH/comments
router.patch("/:id", commentsController.update);

// DELETE /comments

router.delete("/:id", commentsController.destroy);

module.exports = router;
