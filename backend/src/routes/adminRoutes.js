const express = require('express');
const router = express.Router();
const { registerSuperAdmin, loginSuperAdmin, refreshToken, getUserProfile, createAdmin, createHR, createEmployee, createCompany } = require('../controllers/adminController');
const { isSuperAdmin, isAdmin, isHR, authMiddleware } = require('../middleware/authMiddleware');

// Register SuperAdmin
router.post('/register', registerSuperAdmin);

// Login SuperAdmin
router.post('/login', loginSuperAdmin);

// Refresh Token
router.put("/refresh", refreshToken);

// View User Profile
router.get('/profile', authMiddleware, isSuperAdmin, getUserProfile);

// Create Admin (restricted to SuperAdmin)
router.post('/admin', authMiddleware, isSuperAdmin, createAdmin);

// Create HR (restricted to Admin and SuperAdmin)
router.post('/hr', authMiddleware, isAdmin, createHR);

// Create Employee (restricted to HR, Admin and SuperAdmin)
router.post('/employee', authMiddleware, isHR, createEmployee);

// Create Company (unprotected route)
router.post('/company', createCompany);

module.exports = router;
