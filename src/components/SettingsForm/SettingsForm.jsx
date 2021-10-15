import React, {useContext, useState} from "react";
import classes from "./SettingForm.module.css";
import clSFI from "../SettingsFormInput/SettingsFormInput.module.css";

import SettingsFormInput from "../SettingsFormInput/SettingsFormInput";
import { DataContext } from "../../context";
import { Link, Redirect } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
const SettingsForm = () => {
  const data = useContext(DataContext);
  const [redirectToHistory, setRedirectHistory] = useState(false);
  const cancelButtonHandler = () => {
      setRedirectHistory(true);
      console.log(redirectToHistory, 'lol');
  }
  const saveButtonHandler = () => {
    if (
      data.gitHubRepo.length !== 0 &&
      data.buildCommand.length !== 0 &&
      data.mainBranch.length !== 0
    ) {
        data.setCheckSettings(true);
        data.setActiveValues({
            git : data.gitHubRepo,
            build: data.buildCommand,
            branch: data.mainBranch
        })
    }
  };
  if (redirectToHistory === true) {
      return <Redirect to={"/"}/>
  }
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
        type="optional"
      />
      <div>
        <p className={clSFI.inputStyles} style={{ paddingLeft: 0 }}>
          Synchronize every
          <span>
            <SettingsFormInput
              type="numbers"
              value={data.syncTime}
              setStateValue={data.setSyncTime}
            />{" "}
          </span>
          minutes
        </p>
      </div>
      <div className={classes.buttonDiv}>
          <Link to={"/"}>
        <CustomButton
          bgColor="rgb(255,204,0)"
          outlineColor="#B38F00"
          handler={saveButtonHandler}
        >
          Save
        </CustomButton>
          </Link>
        <CustomButton
          bgColor="rgb(230,230,230)"
          outlineColor="rgb(179,179,179)"
          handler={cancelButtonHandler}
        >
            <div
              className={classes.noDecorate}
              style={{ color: "black", textDecoration: "none" }}
            >
              Cancel
            </div>
        </CustomButton>
      </div>
    </div>
  );
};

export default SettingsForm;
