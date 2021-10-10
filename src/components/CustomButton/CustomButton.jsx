import React from "react";
const CustomButton = ({ children, bgColor, outlineColor, handler }) => {
  return (
    <button
      style={{
        outlineColor: outlineColor,
        cursor: "pointer",
        height: 36,
        border: "none",
        backgroundColor: bgColor,
        borderRadius: 5,
        padding: "0px 20px",
      }}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default CustomButton;
