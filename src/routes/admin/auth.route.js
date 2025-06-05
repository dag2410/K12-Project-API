const express = require("express");
const {
  registerValidator,
} = require("@/validators/admin/auth/register.validator");
const { loginValidator } = require("@/validators/admin/auth/login.validator");
const authController = require("@/controllers/admin/auth.controller");
const router = express.Router();

router.get("/register", authController.showRegisterForm);
router.post("/register", registerValidator, authController.register);
router.get("/login", authController.showLoginForm);
router.post("/login", loginValidator, authController.login);
router.delete("/logout", authController.logout);
// router.get("/forgotPassword", authController.showForgotForm);
// router.get("/resetPassword", authController.showResetForm);

module.exports = router;
