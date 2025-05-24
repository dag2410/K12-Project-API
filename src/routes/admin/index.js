const express = require("express");
const dashboardRouter = require("./dashboard.route");
const postsRouter = require("./posts.route");
const usersRouter = require("./users.route");
const commentsRouter = require("./comments.route");
const settingsRouter = require("./setting.route");
const accountSettingsRouter = require("./accountSettings.route");
const analyticsRouter = require("./analytics.route");
const topicsRouter = require("./topics.route");
const roomsRouter = require("./rooms.route");
const categoriesRouter = require("./categories.route");
const authRouter = require("./auth.route");
const router = express.Router();

router.use("/", dashboardRouter);
router.use("/posts", postsRouter);
router.use("/users", usersRouter);
router.use("/settings", settingsRouter);
router.use("/accountSettings", accountSettingsRouter);
router.use("/analytics", analyticsRouter);
router.use("/topics", topicsRouter);
router.use("/rooms", roomsRouter);
router.use("/categories", categoriesRouter);
router.use("/comments", commentsRouter);
router.use("/auth", authRouter);

module.exports = router;
