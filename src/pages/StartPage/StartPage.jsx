import React from "react";
import cl from "./StartPage.module.css";
import settingsBtn from "../../images/01_enabled.svg";
import settingsIcon from "../../images/settings_big_icon.svg";
import smallSettingsIcon from "../../images/settings-button.svg";
import openSettingsBtn from "../../images/openSettingsBtn.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Desktop, Mobile } from "../../components/MediaQuery/MediaQuery";
const StartPage = () => {
  return (
    <>
      <div className={cl.header_line}>
        <p className={cl.header_text}>School Cl server</p>
        <Link to="/settings">
          <button className={cl.buttonNoStyle}>
            <Desktop>
              <img src={settingsBtn} />
            </Desktop>
            <Mobile>
              <img src={smallSettingsIcon} />
            </Mobile>
          </button>
        </Link>
      </div>
      <div className={cl.centeredBlock}>
        <img src={settingsIcon} />
        <p className={cl.infoText}>
          Configure repository connection <br /> and synchronization settings
        </p>
        <Link to="/settings">
          <button className={cl.buttonNoStyle}>
            <img src={openSettingsBtn} />
          </button>
        </Link>
      </div>
    </>
  );
};

export default StartPage;
