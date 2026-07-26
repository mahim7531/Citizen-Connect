import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  onClick,
  className = "",
}) => {
  const baseStyle =
    "rounded-lg font-semibold transition-all duration-300 flex items-center justify-center";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "bg-green-600 text-white hover:bg-green-700",

    danger:
      "bg-red-600 text-white hover:bg-red-700",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",

    gray:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-2",

    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
      className={`${baseStyle}
      ${variants[variant]}
      ${sizes[size]}
      ${loading ? "opacity-60 cursor-not-allowed" : ""}
      ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;