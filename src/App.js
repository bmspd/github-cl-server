import { BrowserRouter, Route, Switch } from "react-router-dom";
import Settings from "./pages/Settings/Settings";
import HistoryRoute from "./pages/History/HistoryRoute";
import React, { useState } from "react";
import { DataContext } from "./context";
import "./App.css";
import cl from "./pages/StartPage/StartPage.module.css";
import FooterMenuItems from "./components/FooterMenuItems/FooterMenuItems";
import FooterMenuItem from "./components/FooterMenuItem/FooterMenuItem";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  const [gitHubRepo, setGitHubRepo] = useState("");
  const [buildCommand, setBuildCommand] = useState("");
  const [mainBranch, setMainBranch] = useState("master");
  const [checkSettings, setCheckSettings] = useState(false);
  const [changeSettings, setChangeSettings] = useState(false);
  const [historyLength, setHistoryLength] = useState(6);
  const [syncTime, setSyncTime] = useState("10");
  const [activeValues, setActiveValues] = useState({git: "", build: "", branch: "master"})
  const contextData = {
    activeValues, setActiveValues,
    changeSettings, setChangeSettings,
    checkSettings,
    setCheckSettings,
    gitHubRepo,
    setGitHubRepo,
    buildCommand,
    setBuildCommand,
    mainBranch,
    setMainBranch,
    historyLength,
    setHistoryLength,
    syncTime,
    setSyncTime,
  };
  return (
    <>
      <DataContext.Provider value={contextData}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HistoryRoute />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route exact path="/start">
              <StartPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </DataContext.Provider>
      <div className={cl.footer}>
        <FooterMenuItems names={["Support", "Learning", "Русская версия"]} />
        <FooterMenuItem
          styles={{ marginRight: "6%", marginLeft: "6%" }}
          name="© 2021 Your Name"
        />
      </div>
    </>
  );
}

export default App;
