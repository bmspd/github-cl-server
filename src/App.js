import {BrowserRouter, Route, Switch} from "react-router-dom";
import Settings from "./pages/Settings/Settings";
import HistoryRoute from "./pages/History/HistoryRoute";
import React from "react";
import {DataContext} from "./context";
import './App.css'
import cl from "./pages/History/History.module.css";
import FooterMenuItems from "./components/FooterMenuItems/FooterMenuItems";
import FooterMenuItem from "./components/FooterMenuItem/FooterMenuItem";

function App() {
    const contextData = {
        checkSettings : false,
    }
  return (
      <>
    <DataContext.Provider value={contextData}>
        <BrowserRouter>
            <Switch >
              <Route exact path="/">
                <HistoryRoute/>
              </Route>
              <Route exact path="/settings">
                <Settings/>
              </Route>
            </Switch>
        </BrowserRouter>
    </DataContext.Provider>
    <div className={cl.footer}>
        <FooterMenuItems
            names={["Support", "Learning", "Русская версия"]}
        />
        <FooterMenuItem styles={{marginRight: '6%'}} name="© 2020 Your Name"/>
    </div>
      </>
  );
}

export default App;
