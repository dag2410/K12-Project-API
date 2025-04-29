const express = require("express");
const router = express.Router();

const commentsRouter = require("./comments.route");
const postsRouter = require("./posts.route");

router.use("/comments", commentsRouter);
router.use("/posts", postsRouter);

module.exports = router;
