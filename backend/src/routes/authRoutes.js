const express = require("express");
const router = express.Router();
const { loginUser, requestPasswordReset, resetPassword, refreshToken } = require("../controllers/authController");

// Request a password reset and send a reset email
// router.post("/reset-password", requestPasswordReset);

// Reset user's password
// router.post("/reset-password/verify", resetPassword);

// Login
router.post("/login", loginUser);

// Refresh Token
router.put("/refresh", refreshToken);

module.exports = router;