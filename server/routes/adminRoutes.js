const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  getAllUsers,
  getAllReports,
  updateReportStatus,
  deleteReport,
  deleteUser,
} = require("../controllers/adminController");

// All routes require Admin Login

router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  getAllUsers
);

router.get(
  "/reports",
  authMiddleware,
  adminMiddleware,
  getAllReports
);

router.patch(
  "/reports/:id/status",
  authMiddleware,
  adminMiddleware,
  updateReportStatus
);

router.delete(
  "/reports/:id",
  authMiddleware,
  adminMiddleware,
  deleteReport
);

router.delete(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  deleteUser
);

module.exports = router;