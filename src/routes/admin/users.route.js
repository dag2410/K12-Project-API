const express = require("express");
const usersController = require("@/controllers/admin/users.controller");

const router = express.Router();

router.get("/", usersController.index);
router.get("/create", usersController.create);
router.get("/:id", usersController.show);
router.post("/", usersController.store);
router.get("/:id/edit", usersController.edit);
router.post("/:id", usersController.update);

module.exports = router;
