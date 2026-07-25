const express = require("express");
const router = express.Router();

const {
  createReport,
  getAllReports,
  getSingleReport,
  getMyReports,
  updateReport,
  deleteReport,
  searchReports,
  filterReports,
} = require("../controllers/reportController");

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Public Routes
router.get("/", getAllReports);

router.get("/search", searchReports);

router.get("/status/:status", filterReports);

// Protected Route
router.get("/my/reports", authMiddleware, getMyReports);

// Single Report
router.get("/:id", getSingleReport);

// Create Report
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createReport
);

// Update Report
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  updateReport
);

// Delete Report
router.delete(
  "/:id",
  authMiddleware,
  deleteReport
);

module.exports = router;