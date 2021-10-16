import React from "react";
import cl from "./Header.module.css";

const Header = ({ children }) => {
  return <div className={cl.header_line}>{children}</div>;
};

export default Header;
