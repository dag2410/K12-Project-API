const express = require("express");
const router = express.Router();

const commentsRouter = require("../routes/comments.route");
const postsRouter = require("../routes/posts.route");

router.use("/comments", commentsRouter);
router.use("/posts", postsRouter);

module.exports = router;
