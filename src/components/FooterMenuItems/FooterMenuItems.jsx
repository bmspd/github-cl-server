import React from "react";
import FooterMenuItem from "../FooterMenuItem/FooterMenuItem";
import cl from "./FooterMenuItems.module.css";
const FooterMenuItems = ({ names }) => {
  return (
    <div className={cl.menuItems}>
      {names.map((name) => (
        <FooterMenuItem key={name} name={name} />
      ))}
    </div>
  );
};

export default FooterMenuItems;
