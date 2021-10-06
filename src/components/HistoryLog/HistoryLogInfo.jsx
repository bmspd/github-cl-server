import React from "react";
import cl from "./HistoryLog.module.css";
const HistoryLogInfo = ({ color, info }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={cl.upperSideInfo}>
        <p style={{ color: color }}>#{info.hash}</p>
        <p>{info.commitComment}</p>
      </div>
      <div className={cl.downSideInfo}>
        <p>{info.branchName}</p>
        <p>{info.branchHash}</p>
        <p>{info.author}</p>
      </div>
    </div>
  );
};

export default HistoryLogInfo;
