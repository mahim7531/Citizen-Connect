const Report = require("../models/Report");
const deleteFile = require("../utils/deleteFile");

// Create Report
const createReport = async (req, res) => {
  try {
    const report = await Report.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      location: req.body.location,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      image: req.file ? req.file.filename : "",
      reportedBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Report created successfully",
      report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Reports
const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find()
      .populate("reportedBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: reports.length,
      reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Report
const getSingleReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id).populate(
      "reportedBy",
      "name email"
    );

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// My Reports
const getMyReports = async (req, res) => {
  try {
    const reports = await Report.find({
      reportedBy: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: reports.length,
      reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Report
const updateReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    if (report.reportedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (req.file) {
      deleteFile(report.image);
      report.image = req.file.filename;
    }

    report.title = req.body.title || report.title;
    report.description = req.body.description || report.description;
    report.category = req.body.category || report.category;
    report.location = req.body.location || report.location;
    report.latitude = req.body.latitude || report.latitude;
    report.longitude = req.body.longitude || report.longitude;

    await report.save();

    res.status(200).json({
      success: true,
      message: "Report updated successfully",
      report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Report
const deleteReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    if (report.reportedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    deleteFile(report.image);

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

// Search Reports
const searchReports = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const reports = await Report.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
        { location: { $regex: keyword, $options: "i" } },
      ],
    });

    res.status(200).json({
      success: true,
      total: reports.length,
      reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Filter Reports
const filterReports = async (req, res) => {
  try {
    const reports = await Report.find({
      status: req.params.status,
    });

    res.status(200).json({
      success: true,
      total: reports.length,
      reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createReport,
  getAllReports,
  getSingleReport,
  getMyReports,
  updateReport,
  deleteReport,
  searchReports,
  filterReports,
};