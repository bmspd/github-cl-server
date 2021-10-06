import React, { useContext } from "react";
import cl from "../StartPage/StartPage.module.css";
import SettingsForm from "../../components/SettingsForm/SettingsForm";
import { DataContext } from "../../context";
import { Redirect } from "react-router-dom";

const Settings = () => {
  const data = useContext(DataContext);
  return data.checkSettings === false ? (
    <>
      <div className={cl.header_line}>
        <p className={cl.header_text}>School Cl server</p>
      </div>
      <SettingsForm />
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Settings;
