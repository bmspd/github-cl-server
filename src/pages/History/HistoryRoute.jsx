import React, {useContext} from 'react';
import {DataContext} from "../../context";
import {Redirect, Route} from "react-router-dom";
import History from "./History";
const HistoryRoute = () => {
    const {checkSettings} = useContext(DataContext);
    return (
        checkSettings
            ? <Redirect to={"/settings"}/>
            : <History/>
    );
};

export default HistoryRoute;