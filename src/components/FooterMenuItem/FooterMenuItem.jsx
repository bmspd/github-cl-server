import React from "react";
import cl from "./FooterMenuItem.module.css";
const FooterMenuItem = ({ styles, name }) => {
  return (
    <a className={cl.itemStyle} style={styles}>
      {name}
    </a>
  );
};

export default FooterMenuItem;
