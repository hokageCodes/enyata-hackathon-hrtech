const User = require('../models/user');
const Company = require('../models/company');
const { generateOTP, generateToken, generateRefreshToken, verifyRefreshToken } = require('../utils/jwtUtils');
const { sendVerificationEmail, sendResetPasswordEmail } = require('../utils/email');
const blacklist = require("../utils/blacklist");
require('dotenv').config();

// User login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Convert email to lowercase
        const lowerCaseEmail = email.toLowerCase();

        // Extract domain from email
        const emailDomain = lowerCaseEmail.split('@')[1];

        // Fetch allowed domains from the Company model
        const companies = await Company.find({}, 'domain');
        const allowedDomains = companies.map(company => company.domain);

        // Check if email domain is allowed
        if (!allowedDomains.includes(emailDomain)) {
            return res.status(401).json({ error: 'Unauthorized domain' });
        }

        // Find user by email
        const user = await User.findOne({ email: lowerCaseEmail });

        // Check if user exists and password is correct
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate access token and refresh token
        const payload = {
            userId: user._id,
            name: user.fullname,
            username: user.username,
            email: user.email,
            role: user.role,
            company: user.company
        };
        const token = generateToken(payload);
        const refreshToken = generateRefreshToken(payload);

        res.json({ token, refreshToken, passwordNeedsUpdate: user.passwordNeedsUpdate });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
};

// Request password reset
const requestPasswordReset = async (req, res) => {
    const { email } = req.body;

    try {
        // Convert email to lowercase before checks
        const lowerCaseEmail = email.toLowerCase();

        const user = await User.findOne({ email: lowerCaseEmail });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        // Generate reset OTP
        const resetCode = generateOTP()
        user.resetPasswordOTP = {
            code: resetCode,
            expiresAt: new Date(Date.now() + 15 * 60 * 1000), // OTP expires in 1 hour
        };
        await user.save();

        // Send reset password email
        await sendResetPasswordEmail(email, resetCode);

        res.json({ message: 'Reset password email sent' });
    } catch (error) {
        console.error('Error requesting reset password:', error);
        res.status(500).json({ error: 'Failed to request reset password' });
    }
};

// Reset password
const resetPassword = async (req, res) => {
    const { code, newPassword } = req.body;

    try {
        const user = await User.findOne({ 'resetPasswordOTP.code': code });

        if (!user || user.resetPasswordOTP.expiresAt < Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired reset password code' });
        }

        // Update password
        user.password = newPassword;
        user.resetPasswordOTP = undefined;

        await user.save();

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Failed to reset password' });
    }
};

// Refresh token
const refreshToken = async (req, res) => {
    const { token } = req.body;

    try {
        const decoded = verifyRefreshToken(token);

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const payload = {
            userId: user._id,
            name: user.fullname,
            username: user.username,
            email: user.email,
            role: user.role,
            company: user.company
        };

        const newToken = generateToken(payload);

        res.json({ token: newToken });
    } catch (error) {
        console.error('Error refreshing token:', error);
        res.status(500).json({ error: 'Failed to refresh token', error });
    }
};

module.exports = {
    loginUser,
    requestPasswordReset,
    resetPassword,
    refreshToken,
};
