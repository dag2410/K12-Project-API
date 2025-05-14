const express = require("express");

const router = express.Router();

const usersController = require("@/controllers/users.controller");

const attachResourceLoader = require("../../utils/attachResourceLoader");

attachResourceLoader(router, ["user"]);

router.get("/", usersController.getList);
router.get("/:user", usersController.getOne);
router.post("/", usersController.create);
router.put("/:user", usersController.update);
router.patch("/:user", usersController.update);
router.delete("/:user", usersController.remove);

module.exports = router;
