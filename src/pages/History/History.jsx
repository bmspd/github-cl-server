import React, { useContext } from "react";
import cl from "../StartPage/StartPage.module.css";
import histClasses from "./History.module.css";
import runBuildIcon from "../../images/runBuild.svg";
import settingsIcon from "../../images/settings-button.svg";
import { DataContext } from "../../context";
import histLogs from "../../config/history.json";
import HistoryLog from "../../components/HistoryLog/HistoryLog";
const History = () => {
  const data = useContext(DataContext);
  return (
    <>
      <div className={cl.header_line}>
        <p className={histClasses.repoNameStyle}>{data.gitHubRepo}</p>
        <div>
          <button className={cl.buttonNoStyle}>
            <img src={runBuildIcon} />
          </button>
          <button className={cl.buttonNoStyle}>
            <img src={settingsIcon} />
          </button>
        </div>
      </div>
      <div className={histClasses.mainContentStyle}>
        <HistoryLog info={histLogs[0]} />
      </div>
    </>
  );
};

export default History;
