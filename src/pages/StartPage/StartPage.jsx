import React from "react";
import cl from "./StartPage.module.css";
import settingsBtn from "../../images/01_enabled.svg";
import settingsIcon from "../../images/settings_big_icon.svg";
import smallSettingsIcon from "../../images/settings-button.svg";
import { Link } from "react-router-dom";
import {
  Desktop,
  Mobile,
  Tablet,
} from "../../components/MediaQuery/MediaQuery";
import CustomButton from "../../components/CustomButton/CustomButton";
import btnClasses from "../../styles/buttonStyles.module.css";
import Header from "../../components/Header/Header";
import Title from "../../components/Header/Title";

const StartPage = () => {
  return (
    <>
      <Header>
        <Title />
        <Link to="/settings">
          <CustomButton headerStyle={btnClasses.headerBtn}>
            <Desktop>
              <img src={settingsBtn} alt="" />
            </Desktop>
            <Tablet>
              <img src={smallSettingsIcon} alt="" />
            </Tablet>
            <Mobile>
              <img src={smallSettingsIcon} alt="" />
            </Mobile>
          </CustomButton>
        </Link>
      </Header>
      <div className={cl.centeredBlock}>
        <img src={settingsIcon} alt="" />
        <p className={cl.infoText}>
          Configure repository connection <br /> and synchronization settings
        </p>
        <Link to="/settings">
          <CustomButton colorStyle={btnClasses.yellowBtn}>
            Open settings
          </CustomButton>
        </Link>
      </div>
    </>
  );
};

export default StartPage;
