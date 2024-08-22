const User = require('../models/user');
const Company = require('../models/company');

const getUserProfile = async (req, res) => {
    try {
        const userProfile = await User.findById(req.user.userId).select('-password -deleted');

        if (!userProfile) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json({ userProfile });
    } catch (error) {
        console.error(error.response.data);
        res.status(500).json({ msg: "Server Error", error });
    }
};

const updatePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await user.comparePassword(oldPassword);
        if (!isMatch) {
            return res.status(400).json({ error: 'Password is incorrect' });
        }

        user.password = newPassword;
        user.passwordNeedsUpdate = false;
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: 'Failed to update password' });
    }
};

const softDeleteAccount = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        // Soft delete user account
        user.deleted = true;
        await user.save();
        res.json({ msg: "Account deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server Error", error });
    }
};

const logoutUser = async (req, res) => {
    try {
        const token = req.header("Authorization");

        // Check if the token is already blacklisted
        if (blacklist.isTokenBlacklisted(token)) {
            return res.json({ msg: "Already logged out" });
        }

        // Add the token to the blacklist
        blacklist.addToBlacklist(token);

        res.json({ msg: "Logout successful" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server Error", error });
    }
};

module.exports = {
    getUserProfile,
    updatePassword,
    softDeleteAccount,
    logoutUser
};