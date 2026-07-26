import React from "react";

const Spinner = ({ size = 6 }) => {
  return (
    <div
      className={`border-4 border-blue-600 border-t-transparent rounded-full animate-spin`}
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
      }}
    />
  );
};

export default Spinner;