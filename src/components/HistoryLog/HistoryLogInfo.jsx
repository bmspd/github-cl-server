import React from "react";
import cl from "./HistoryLog.module.css";
import userIcon from "../../images/user-icon.svg";
import commitIcon from "../../images/commit-icon.svg";
const HistoryLogInfo = ({ color, info }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={cl.upperSideInfo}>
        <p style={{ color: color, fontSize: "18px" }}>#{info.hash}</p>
        <p style={{ fontSize: "18px" }}>{info.commitComment}</p>
      </div>
      <div
        style={{ fontSize: "13px", marginTop: "10px" }}
        className={cl.downSideInfo}
      >
        <div className={cl.commitInfo}>
          <img width="16" src={commitIcon} style={{ opacity: "0.3" }} />
          <p>{info.branchName}</p>
          <p style={{ opacity: "0.65" }}>{info.branchHash}</p>
        </div>
        <div className={cl.commitInfo}>
          <img width="16" src={userIcon} style={{ opacity: "0.3" }} />
          <p>{info.author}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryLogInfo;
