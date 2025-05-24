const express = require("express");
const accountSettingsController = require("@/controllers/admin/accountSetting.controller");

const router = express.Router();

router.get("/", accountSettingsController.index);

module.exports = router;
