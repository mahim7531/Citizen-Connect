// Global Error Handler
const errorMiddleware = (err, req, res, next) => {
  console.error("Error:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Mongoose Invalid ObjectId
  if (err.name === "CastError") {
    statusCode = 404;
    message = `Resource not found with id: ${err.value}`;
  }

  // Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value entered";
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
  }

  // JWT Invalid
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid Token";
  }

  // JWT Expired
  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token Expired";
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorMiddleware;