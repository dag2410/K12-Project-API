const express = require("express");
const router = express.Router();

const commentsRouter = require("./comments.route");
const postsRouter = require("./posts.route");
const categoriesRouter = require("./categories.route");
const listingsRouter = require("./listings.route");
const usersRouter = require("./users.route");

router.use("/comments", commentsRouter);
router.use("/posts", postsRouter);
router.use("/categories", categoriesRouter);
router.use("/listings", listingsRouter);
router.use("/users", usersRouter);

module.exports = router;
