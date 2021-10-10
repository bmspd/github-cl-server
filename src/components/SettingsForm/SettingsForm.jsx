import React, { useContext } from "react";
import classes from "./SettingForm.module.css";
import cl from "../../pages/StartPage/StartPage.module.css";
import clSFI from "../SettingsFormInput/SettingsFormInput.module.css";
import saveBtn from "../../images/formSaveBtn.svg";
import cancelBtn from "../../images/formCancelBtn.svg";

import SettingsFormInput from "../SettingsFormInput/SettingsFormInput";
import { DataContext } from "../../context";
import { Link, Redirect } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

const SettingsForm = () => {
  const data = useContext(DataContext);
  const saveButtonHandler = () => {
    if (
      data.gitHubRepo.length !== 0 &&
      data.buildCommand.length !== 0 &&
      data.mainBranch.length !== 0
    ) {
      data.setCheckSettings(true);
      console.log(data.setCheckSettings);
    }
  };
  const cancelButtonHandler = () => {
    //data.setCheckSettings(true);
    console.log(data.checkSettings);
  };
  return (
    <div className={classes.formStyles}>
      <div>
        <p className={classes.title}>Settings</p>
        <p className={classes.titleDescription}>
          Configure repository connection and synchronization settings
        </p>
      </div>
      <SettingsFormInput
        stateValue={data.gitHubRepo}
        setStateValue={data.setGitHubRepo}
        name="GitHub repository"
        placeholder="user-name/repo-name"
      />
      <SettingsFormInput
        stateValue={data.buildCommand}
        setStateValue={data.setBuildCommand}
        name="Build command"
        placeholder="your-super-build-command"
      />
      <SettingsFormInput
        stateValue={data.mainBranch}
        setStateValue={data.setMainBranch}
        name="Main branch"
        placeholder="your-main-branch-name"
      />
      <div>
        <p className={clSFI.inputStyles} style={{ paddingLeft: 0 }}>
          Synchronize every
          <span>
            <SettingsFormInput value={10} />{" "}
          </span>
          minutes
        </p>
      </div>
      <div className={classes.buttonDiv}>
        <CustomButton
          bgColor="rgb(255,204,0)"
          outlineColor="#B38F00"
          handler={saveButtonHandler}
        >
          Save
        </CustomButton>

        <CustomButton
          bgColor="rgb(230,230,230)"
          outlineColor="rgb(179,179,179)"
          handler={cancelButtonHandler}
        >
          <Link to="/start">
            <div
              className={classes.noDecorate}
              style={{ color: "black", textDecoration: "none" }}
            >
              Cancel
            </div>
          </Link>
        </CustomButton>
      </div>
    </div>
  );
};

export default SettingsForm;
