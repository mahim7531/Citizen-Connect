const User = require("../models/User");

// ==============================
// Admin Authorization Middleware
// ==============================
const adminMiddleware = async (req, res, next) => {
  try {
    // authMiddleware আগে run হয়ে req.user সেট করবে
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin only.",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = adminMiddleware;