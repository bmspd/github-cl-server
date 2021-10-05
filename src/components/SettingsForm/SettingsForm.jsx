import React from 'react';
import classes from "./SettingForm.module.css"
import cl from "../../pages/History/History.module.css"
import saveBtn from "../../images/formSaveBtn.svg"
import cancelBtn from "../../images/formCancelBtn.svg"

import SettingsFormInput from "../SettingsFormInput/SettingsFormInput";

const SettingsForm = () => {
    return (
        <div className={classes.formStyles}>
            <p className={classes.title}>
                Settings
            </p>
            <p className={classes.titleDescription}>
                Configure repository connection and synchronization settings
            </p>
            <SettingsFormInput
                name="GitHub repository"
                placeholder="user-name/repo-name"
            />
            <SettingsFormInput
                name="Build command"
                placeholder="your-super-build-command"
            />
            <SettingsFormInput
                name="Main branch"
                placeholder="your-main-branch-name"
            />
        <div className={classes.formButtons}>
            <button className={cl.buttonNoStyle}><img src={saveBtn}/></button>
            <button className={cl.buttonNoStyle}><img src={cancelBtn}/></button>
        </div>
        </div>
    );
};

export default SettingsForm;