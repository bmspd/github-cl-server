import React from "react";
import cl from "./SettingsFormInput.module.css";
import xIcon from "../../images/x-icon.svg";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
const SettingsFormInput = ({
  stateValue = "",
  setStateValue = () => {},
  name = "",
  placeholder = "",
  value = "",
  type = "",
}) => {
  return type === "numbers" ? (
    <input
      className={cl.inputStyles}
      value={value}
      style={{
        width: "40px",
        paddingLeft: "0px",
        textAlign: "center",
        marginLeft: "10px",
        marginRight: "10px",
      }}
      onChange={(e) => setStateValue(e.target.value)}
    />
  ) : (
    <div>
      <p className={cl.inputTitle}>
        {name}
        {type === "optional" ? null : <sup className={cl.redColor}> *</sup>}
      </p>
      <InputWithIcon
        placeholder={placeholder}
        stateValue={stateValue}
        setStateValue={setStateValue}
      />
    </div>
  );
};

export default SettingsFormInput;
