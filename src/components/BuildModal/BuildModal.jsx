import React, { useState } from "react";
import cl from "./Build.module.css";
import buttonRun from "../../images/buttonRun.svg";
import buttonWhiteCancel from "../../images/button_white_cancel.svg";
import startPageClasses from "../../pages/StartPage/StartPage.module.css";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
const BuildModal = ({ openModal, setOpenModal }) => {
  const closeModal = () => {
    setOpenModal(false);
  };
  const [commitHashInput, setCommitHashInput] = useState("");
  return (
    <div className={cl.modalOut}>
      <div className={cl.modalInner}>
        <h1 className={cl.modal_h1}>New build</h1>
        <p className={cl.modal_p}>
          Enter the commit hash which you want to build.
        </p>
        <InputWithIcon
          stateValue={commitHashInput}
          setStateValue={setCommitHashInput}
          placeholder="Commit hash"
        />
        <div className={cl.buttonSection}>
          <button
            className={startPageClasses.buttonNoStyle}
            onClick={closeModal}
          >
            <img src={buttonRun} />
          </button>
          <button
            className={startPageClasses.buttonNoStyle}
            onClick={closeModal}
          >
            <img src={buttonWhiteCancel} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuildModal;
