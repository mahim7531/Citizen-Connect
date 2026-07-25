const fs = require("fs");
const path = require("path");

/**
 * Delete uploaded image from uploads folder
 * @param {string} fileName
 */
const deleteFile = (fileName) => {
  try {
    // If no filename, return
    if (!fileName) return;

    const filePath = path.join(__dirname, "..", "uploads", fileName);

    // Check file exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`🗑️ File deleted: ${fileName}`);
    } else {
      console.log(`⚠️ File not found: ${fileName}`);
    }
  } catch (error) {
    console.error("❌ Error deleting file:", error.message);
  }
};

module.exports = deleteFile;