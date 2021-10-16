import React from "react";
import cl from "./StartPage.module.css";
import settingsBtn from "../../images/01_enabled.svg";
import settingsIcon from "../../images/settings_big_icon.svg";
import smallSettingsIcon from "../../images/settings-button.svg";
import { Link } from "react-router-dom";
import {Desktop, Mobile, Tablet} from "../../components/MediaQuery/MediaQuery";
import CustomButton from "../../components/CustomButton/CustomButton";
import btnClasses from "../../styles/buttonStyles.module.css"
const StartPage = () => {
  return (
    <>
      <div className={cl.header_line}>
        <p className={cl.header_text}>School Cl server</p>
        <Link to="/settings">
          <CustomButton
              headerStyle={btnClasses.headerBtn}
          >
            <Desktop>
              <img src={settingsBtn} alt=""/>
            </Desktop>
            <Tablet>
              <img src={smallSettingsIcon} alt=""/>
            </Tablet>
            <Mobile>
              <img src={smallSettingsIcon} alt=""/>
            </Mobile>
          </CustomButton>
        </Link>
      </div>
      <div className={cl.centeredBlock}>
        <img src={settingsIcon} alt=""/>
        <p className={cl.infoText}>
          Configure repository connection <br /> and synchronization settings
        </p>
        <Link to="/settings">
          <CustomButton
              colorStyle={btnClasses.yellowBtn}
          >
            Open settings
          </CustomButton>
        </Link>
      </div>
    </>
  );
};

export default StartPage;
