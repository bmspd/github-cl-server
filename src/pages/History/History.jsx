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
const History = () => {
  const [openModal, setOpenModal] = useState(false);
  const buildButtonHandler = () => {
    setOpenModal(true);
  };
  const data = useContext(DataContext);
  const showMoreHandler = () => {
    data.setHistoryLength(histLogs.length);
  };
  const hideHandler = () => {
    data.setHistoryLength(6);
  };
  return data.isLoading ? (
    <Loading />
  ) : (
    <>
      {openModal ? (
        <BuildModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
      <Header>
        <p className={histClasses.repoNameStyle}>{data.activeValues.git}</p>
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
        {histLogs.slice(0, data.historyLength).map((el, index) => (
          <HistoryLog key={index} info={el} />
        ))}
        <div style={{ width: "auto", marginTop: "10px" }}>
          {data.historyLength === 6 ? (
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
