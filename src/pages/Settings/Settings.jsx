import React from 'react';
import cl from "../History/History.module.css";
import classes from "./Setting.module.css"
import {Link} from "react-router-dom";
import settingsBtn from "../../images/01_enabled.svg";
import SettingsForm from "../../components/SettingsForm/SettingsForm";

const Settings = () => {
    return (
        <>
        <div className={cl.header_line}>
            <p className={cl.header_text}>School Cl server</p>
        </div>
        <SettingsForm />
        </>
    );
};

export default Settings;