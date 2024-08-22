const jwtUtils = require("../utils/jwtUtils");
const blacklist = require("../utils/blacklist");
const User = require("../models/user");
const Admin = require("../models/admin");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ msg: "Authorization denied. No token provided." });
  }

  const tokenParts = token.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.status(401).json({ msg: "Unauthorized - Invalid token format" });
  }

  const userToken = tokenParts[1];

  try {
    if (blacklist.isTokenBlacklisted(token)) {
      return res
        .status(401)
        .json({ msg: "Token is blacklisted. Please log in again." });
    }

    const decoded = jwtUtils.verifyToken(userToken);

    // Check if the user's account has been deleted
    const user = await User.findById(decoded.userId) || await Admin.findById(decoded.userId);
    if (user.deleted) {
      return res.status(400).json({ msg: "Your account has been deleted. Please contact support for assistance." });
    }
    req.user = decoded;
    next();
  } catch (error) {
    blacklist.addToBlacklist(token);
    res.status(401).json({ msg: "Token is not valid. Please log in again." });
  }
};

const isAdmin = (req, res, next) => {
  if (!req.user || (req.user.role !== "admin")) {
    return res.status(403).json({ msg: "Forbidden - Admin access required" });
  }
  next();
};

const isHR = (req, res, next) => {
  if (!req.user || (req.user.role !== "manager")) {
    return res.status(403).json({ msg: "Forbidden - HR access required" });
  }
  next();
};

const isSuperAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "superadmin") {
    return res.status(403).json({ msg: "Forbidden - Super Admin access required" });
  }
  next();
};

module.exports = {
  authMiddleware,
  isAdmin,
  isHR,
  isSuperAdmin
};
