import React from 'react';
import xIcon from "../../images/x-icon.svg";
import cl from '../SettingsFormInput/SettingsFormInput.module.css'
const InputWithIcon = ({setStateValue, stateValue, placeholder}) => {
    return (
        <div style={{display:"inline-block",position: "relative"}}>
            <input
                className={cl.inputStyles}
                placeholder={placeholder}
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
            />
            {stateValue.length !== 0
                ? <img
                    style={{position: "absolute", top: "8px", right: "8px", cursor:'pointer'}}
                    width="25px"
                    src={xIcon}
                    onClick={() => setStateValue("")}
                />
                : null
            }
        </div>
    );
};

export default InputWithIcon;