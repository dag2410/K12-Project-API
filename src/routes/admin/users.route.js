const express = require("express");
const usersController = require("@/controllers/admin/users.controller");
const usersValidator = require("@/validators/admin/users.validator");
const router = express.Router();

router.get("/", usersController.index);
router.get("/create", usersController.create);
router.get("/:id", usersController.show);
router.post("/", usersValidator.createUserValidator, usersController.store);
router.get("/:id/edit", usersController.edit);
router.put("/:id", usersValidator.updateUserValidator, usersController.update);
router.delete("/:id", usersController.destroy);

module.exports = router;
