import React from "react";
import Loader from "react-loader-spinner";
import classes from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={classes.mainStyle}>
      <Loader
        type="TailSpin"
        color="#FFCC00"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <p className={classes.textStyle}>Loading...</p>
    </div>
  );
};

export default Loading;
