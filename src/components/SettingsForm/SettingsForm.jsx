import React, { useContext, useState } from "react";
import classes from "./SettingForm.module.css";
import clSFI from "../SettingsFormInput/SettingsFormInput.module.css";
import btnClasses from "../../styles/buttonStyles.module.css";
import SettingsFormInput from "../SettingsFormInput/SettingsFormInput";
import { DataContext } from "../../context";
import { Link, Redirect } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import store, { fillCurrentInput, toggleLoader } from "../../store/store";
const SettingsForm = () => {
  const dispatch = useDispatch();
  const loaderStatus = useSelector((state) => state.loaderStatus);
  const data = useContext(DataContext);
  const [redirectToHistory, setRedirectHistory] = useState(false);
  const cancelButtonHandler = () => {
    setRedirectHistory(true);
  };
  const checkInputs = (...inputs) => {
    return inputs.find((el) => el.length === 0) === undefined;
  };
  const saveButtonHandler = () => {
    if (data.gitHubRepo.length !== 0 && data.buildCommand.length !== 0) {
      data.setCheckSettings(true);
      dispatch(
        fillCurrentInput({
          git: data.gitHubRepo,
          build: data.buildCommand,
          branch: data.mainBranch,
        })
      );
      dispatch(toggleLoader("active"));
      setTimeout(() => dispatch(toggleLoader("inactive")), 3000);
    }
  };
  /* Condition if data already inputted, prevent routing to Start page*/
  if (redirectToHistory === true) {
    return <Redirect to={"/"} />;
  }
  const inputData = [
    {
      stateControl: [data.gitHubRepo, data.setGitHubRepo],
      name: "GitHub repository",
      placeholder: "user-name/repo-name",
    },
    {
      stateControl: [data.buildCommand, data.setBuildCommand],
      name: "Build command",
      placeholder: "your-super-build-command",
    },
    {
      stateControl: [data.mainBranch, data.setMainBranch],
      name: "Main branch",
      placeholder: "your-main-branch-name",
      type: "optional",
    },
  ];
  return (
    <div className={classes.formStyles}>
      <div>
        <p className={classes.title}>Settings</p>
        <p className={classes.titleDescription}>
          Configure repository connection and synchronization settings
        </p>
      </div>
      {inputData.map((el, index) => {
        return (
          <SettingsFormInput
            key={index}
            stateControl={el.stateControl}
            name={el.name}
            placeholder={el.placeholder}
            type={el.type}
          />
        );
      })}
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
            colorStyle={btnClasses.yellowBtn}
            respHelper={btnClasses.btnResponsiveHelper}
            handler={saveButtonHandler}
            disabled={
              !checkInputs(data.gitHubRepo, data.buildCommand) || data.isLoading
            }
          >
            Save
          </CustomButton>
        </Link>
        <CustomButton
          colorStyle={btnClasses.grayBtn}
          handler={cancelButtonHandler}
          disabled={data.isLoading}
        >
          Cancel
        </CustomButton>
      </div>
    </div>
  );
};

export default SettingsForm;
