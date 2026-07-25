const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CitizenConnect API Running Successfully"
  });
});

module.exports = app;