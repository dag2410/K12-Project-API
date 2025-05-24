const express = require("express");
const authController = require("@/controllers/admin/auth.controller");
const router = express.Router();

router.get("/login", authController.showLoginForm);
router.get("/register", authController.showRegisterForm);
router.get("/forgotPassword", authController.showForgotForm);
router.get("/resetPassword", authController.showResetForm);

module.exports = router;
