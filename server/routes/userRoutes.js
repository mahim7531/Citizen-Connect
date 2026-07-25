const express = require("express");
const router = express.Router();

const {
  getProfile,
  updateProfile,
  changePassword,
  getMyReports,
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.get("/profile", authMiddleware, getProfile);

router.put(
  "/profile",
  authMiddleware,
  upload.single("profileImage"),
  updateProfile
);

router.put(
  "/change-password",
  authMiddleware,
  changePassword
);

router.get(
  "/my-reports",
  authMiddleware,
  getMyReports
);

module.exports = router;