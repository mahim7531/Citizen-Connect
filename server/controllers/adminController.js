const User = require("../models/User");
const Report = require("../models/Report");
const deleteFile = require("../utils/deleteFile");

// =========================================
// Get All Users
// GET /api/admin/users
// =========================================
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      totalUsers: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Get All Reports
// GET /api/admin/reports
// =========================================
const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find()
      .populate("reportedBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      totalReports: reports.length,
      reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Update Report Status
// PATCH /api/admin/reports/:id/status
// =========================================
const updateReportStatus = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    report.status = req.body.status || report.status;

    await report.save();

    res.status(200).json({
      success: true,
      message: "Report status updated successfully",
      report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Delete Report
// DELETE /api/admin/reports/:id
// =========================================
const deleteReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    if (report.image) {
      deleteFile(report.image);
    }

    await report.deleteOne();

    res.status(200).json({
      success: true,
      message: "Report deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Delete User
// DELETE /api/admin/users/:id
// =========================================
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Delete all reports of this user
    const reports = await Report.find({
      reportedBy: user._id,
    });

    for (const report of reports) {
      if (report.image) {
        deleteFile(report.image);
      }

      await report.deleteOne();
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getAllReports,
  updateReportStatus,
  deleteReport,
  deleteUser,
};