import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Header/Home/Home";
import Lifestyle from "./Components/Header/Lifestyle/Lifestyle";
import About from "./Components/Header/About/About";
import Contacts from "./Components/Header/Contacts/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Family from "./Components/Header/Family/Family";
let App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-content">
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Lifestyle">
                <Lifestyle />
              </Route>
              <Route exact path="/Family">
                <Family />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/Contacts">
                <Contacts />
              </Route>
            </Switch>
          </div>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
};

export default App;
