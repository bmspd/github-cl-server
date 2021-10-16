import React, { useContext } from "react";
import SettingsForm from "../../components/SettingsForm/SettingsForm";
import { DataContext } from "../../context";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";
import Title from "../../components/Header/Title";

const Settings = () => {
  const data = useContext(DataContext);
  return data.checkSettings === false || data.changeSettings === true ? (
    <>
      <Header>
        <Title />
      </Header>
      <SettingsForm />
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Settings;
