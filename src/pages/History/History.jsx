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
const History = () => {
  const [openModal, setOpenModal] = useState(false);
  const buildButtonHandler = () => {
    setOpenModal(true);
  };
  const data = useContext(DataContext);
  return (
    <>
      {openModal ? (
        <BuildModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
      <div className={cl.header_line}>
        <p className={histClasses.repoNameStyle}>{data.gitHubRepo}</p>
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
                onClick={() => data.setCheckSettings(false)}
                src={settingsIcon}
              />
            </button>
          </Link>
        </div>
      </div>
      <div className={histClasses.mainContentStyle}>
        {histLogs.slice(0, data.historyLength).map((el, index) => (
          <HistoryLog key={index} info={el} />
        ))}
      </div>
    </>
  );
};

export default History;
