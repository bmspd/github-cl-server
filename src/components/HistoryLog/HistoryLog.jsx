import React from "react";
import cl from "./HistoryLog.module.css";
import successIcon from "../../images/success.svg";
import pendingIcon from "../../images/pending.svg";
import failureIcon from "../../images/failure.svg";
import HistoryLogInfo from "./HistoryLogInfo";
import HistoryLogTime from "./HistoryLogTime";
import CustomButton from "../CustomButton/CustomButton";
const mapping = {
  failure: {
    icon: failureIcon,
    color: "#FF3333",
  },
  pending: {
    icon: pendingIcon,
    color: "#FF9A00",
  },
  success: {
    icon: successIcon,
    color: "#00B341",
  },
};
const HistoryLog = ({ info }) => {
  const icon = mapping[info.status].icon;
  const color = mapping[info.status].color;

  return (
    <div className={cl.mainStyle}>
      <img className={cl.statusIconStyle} src={icon} />
      <div className={cl.innerContent}>
        <HistoryLogInfo color={color} info={info} />
        <HistoryLogTime date={info.date} clockwatch={info.clockwatch} />
      </div>
    </div>
  );
};

export default HistoryLog;
