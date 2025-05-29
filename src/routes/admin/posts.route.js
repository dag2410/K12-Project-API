const express = require("express");
const postsController = require("@/controllers/admin/posts.controller");
const postsValidator = require("@/validators/admin/posts.validator");
const router = express.Router();

router.get("/", postsController.index);
router.get(
  "/create",
  postsValidator.createPostValidator,
  postsController.create
);
router.get("/:id", postsController.show);
router.post("/", postsController.store);
router.get("/:id/edit", postsController.edit);
router.post("/:id", postsController.update);

module.exports = router;
