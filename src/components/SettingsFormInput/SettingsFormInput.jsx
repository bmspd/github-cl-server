import React from 'react';
import cl from './SettingsFormInput.module.css'
const SettingsFormInput = ({name, placeholder}) => {
    return (
        <div>
            <p className={cl.inputTitle}>
                {name}<sup className={cl.redColor}> *</sup></p>
            <input className={cl.inputStyles} placeholder={placeholder}/>
        </div>
    );
};

export default SettingsFormInput;