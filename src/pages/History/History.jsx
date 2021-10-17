import React, { useContext, useState } from "react";
import cl from "../StartPage/StartPage.module.css";
import histClasses from "./History.module.css";
import runBuildIcon from "../../images/runBuild.svg";
import settingsIcon from "../../images/settings-button.svg";
import smallRunBuild from "../../images/play_button.svg";
import { DataContext } from "../../context";
import histLogs from "../../config/history.json";
import HistoryLog from "../../components/HistoryLog/HistoryLog";
import { Link } from "react-router-dom";
import BuildModal from "../../components/BuildModal/BuildModal";
import {
  Desktop,
  Mobile,
  Tablet,
} from "../../components/MediaQuery/MediaQuery";
import CustomButton from "../../components/CustomButton/CustomButton";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import btnClasses from "../../styles/buttonStyles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setHistoryLength, toggleBuildModal } from "../../store/store";
const History = () => {
  const dispatch = useDispatch();
  const currentInput = useSelector((state) => state.currentInput);
  const loaderStatus = useSelector((state) => state.loaderStatus);
  const historyLogsLength = useSelector((state) => state.historyLength);
  const modal = useSelector((state) => state.buildModal);
  const buildButtonHandler = () => {
    dispatch(toggleBuildModal("opened"));
  };
  const data = useContext(DataContext);
  const showMoreHandler = () => {
    dispatch(setHistoryLength(histLogs.length));
  };
  const hideHandler = () => {
    dispatch(setHistoryLength(6));
  };
  return loaderStatus === "active" ? (
    <Loading />
  ) : (
    <>
      {modal === "opened" ? <BuildModal /> : null}
      <Header>
        <p className={histClasses.repoNameStyle}>{currentInput.git}</p>
        <div>
          <Desktop>
            <button className={cl.buttonNoStyle}>
              <img onClick={buildButtonHandler} src={runBuildIcon} />
            </button>
          </Desktop>
          <Tablet>
            <button className={cl.buttonNoStyle}>
              <img onClick={buildButtonHandler} src={smallRunBuild} />
            </button>
          </Tablet>
          <Link to="/settings">
            <button className={cl.buttonNoStyle}>
              <img
                onClick={() => data.setChangeSettings(true)}
                src={settingsIcon}
              />
            </button>
          </Link>
        </div>
      </Header>
      <div className={histClasses.mainContentStyle}>
        {histLogs.slice(0, historyLogsLength).map((el, index) => (
          <HistoryLog key={index} info={el} />
        ))}
        <div style={{ width: "auto", marginTop: "10px" }}>
          {historyLogsLength === 6 ? (
            <CustomButton
              colorStyle={btnClasses.grayBtn}
              handler={showMoreHandler}
            >
              Show more
            </CustomButton>
          ) : (
            <CustomButton colorStyle={btnClasses.grayBtn} handler={hideHandler}>
              Hide
            </CustomButton>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
