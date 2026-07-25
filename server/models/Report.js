const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    category: {
      type: String,
      enum: [
        "Road Damage",
        "Garbage",
        "Street Light",
        "Drainage",
        "Water Logging",
        "Homeless Person",
        "Mentally Disordered Person",
        "Stray Animal",
        "Fire Hazard",
        "Illegal Construction",
        "Others",
      ],
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    latitude: {
      type: Number,
      default: null,
    },

    longitude: {
      type: Number,
      default: null,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Under Review",
        "In Progress",
        "Resolved",
        "Rejected",
      ],
      default: "Pending",
    },

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);