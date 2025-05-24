const express = require("express");
const router = express.Router();

const commentsRouter = require("./comments.route");
const postsRouter = require("./posts.route");
const categoriesRouter = require("./categories.route");
const roomsRouter = require("./rooms.route");
const usersRouter = require("./users.route");

router.use("/comments", commentsRouter);
router.use("/posts", postsRouter);
router.use("/categories", categoriesRouter);
router.use("/rooms", roomsRouter);
router.use("/users", usersRouter);

module.exports = router;
