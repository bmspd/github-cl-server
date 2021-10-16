import React from "react";
import btnClasses from "../../styles/buttonStyles.module.css";
import classnames from "classnames";

const CustomButton = ({
  children,
  colorStyle = null,
  disabled = false,
  headerStyle = null,
  respHelper = null,
  handler,
}) => {
  const classNames = classnames(
    colorStyle,
    btnClasses.customBtn,
    headerStyle,
    respHelper
  );
  return (
    <button disabled={disabled} className={classNames} onClick={handler}>
      {children}
    </button>
  );
};

export default CustomButton;
