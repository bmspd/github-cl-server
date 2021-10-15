import React, { useContext } from "react";
import { DataContext } from "../../context";
import { Redirect, Route } from "react-router-dom";
import History from "./History";
const HistoryRoute = () => {
  const  data  = useContext(DataContext);
  return data.checkSettings ? <History /> : <Redirect to={"/start"} />;
};

export default HistoryRoute;
