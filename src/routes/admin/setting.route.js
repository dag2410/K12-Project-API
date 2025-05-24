const express = require("express");
const settingsController = require("@/controllers/admin/setting.controller");

const router = express.Router();

router.get("/", settingsController.index);

module.exports = router;
