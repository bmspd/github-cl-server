import React from "react";
import { format } from "date-fns";
import calendarIcon from "../../images/calendar_icon.svg";
import clockIcon from "../../images/clock-icon.svg";
import { ru } from "date-fns/esm/locale";
import cl from "./HistoryLog.module.css";
import { Mobile, Tablet } from "../MediaQuery/MediaQuery";
const HistoryLogTime = ({ date, clockwatch }) => {
  const fDateUp = format(new Date(date), "d LLL kk':'mm", { locale: ru });
  const fDateDown = format(new Date(date), "h 'ч '", { locale: ru });
  return (
    <>
      <Tablet>
        <hr style={{ width: "100%" }} />
      </Tablet>
      <div className={cl.timeStyle}>
        <div style={{ display: "flex", gap: "5px" }}>
          <img src={calendarIcon} style={{ opacity: "0.3" }} />
          <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.45)" }}>
            {fDateUp}
          </p>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <img src={clockIcon} style={{ opacity: "0.3" }} />
          <p
            style={{
              marginLeft: "2px",
              fontSize: "13px",
              color: "rgba(0,0,0,0.45)",
            }}
          >
            {clockwatch}
          </p>
        </div>
      </div>
    </>
  );
};

export default HistoryLogTime;
