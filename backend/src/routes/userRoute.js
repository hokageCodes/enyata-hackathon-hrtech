const express = require('express');
const router = express.Router();
const { isSuperAdmin, isAdmin, isHR, authMiddleware } = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// Middleware to protect routes requiring authentication
router.use(authMiddleware);

// GET /api/v1/users/profile - View User Profile
router.get('/profile', userController.getUserProfile);

// PUT /api/v1/users/profile - Update Profile
router.put('/profile/password', userController.updatePassword);

// DELETE /api/v1/users/profile - Soft Delete Account
// router.delete('/profile', isHR, userController.softDeleteAccount);

// POST /api/v1/users/logout - Logout
router.post('/logout', userController.logoutUser);

module.exports = router;
