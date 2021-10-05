import React from 'react';
import cl from './History.module.css'
import settingsBtn from '../../images/01_enabled.svg'
import settingsIcon from '../../images/settings_big_icon.svg'
import openSettingsBtn from '../../images/openSettingsBtn.svg'
import FooterMenuItems from "../../components/FooterMenuItems/FooterMenuItems";
import FooterMenuItem from "../../components/FooterMenuItem/FooterMenuItem";
import {Link} from "react-router-dom";
const History = () => {
    return (
        <>
        <div className={cl.header_line}>
            <p className={cl.header_text}>School Cl server</p>
            <Link to="/settings">
                <button className={cl.buttonNoStyle}><img src={settingsBtn}/></button>
            </Link>
        </div>
        <div className={cl.centeredBlock}>
            <img src={settingsIcon}/>
            <p className={cl.infoText}>Configure repository connection <br/> and synchronization settings</p>
            <Link to="/settings">
                <button className={cl.buttonNoStyle}><img src={openSettingsBtn}/></button>
            </Link>
        </div>

        </>
    );
};

export default History;