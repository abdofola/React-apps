import React, { Component } from "react";
import TopBar from "./components/header/TopBar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./components/pages/home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./app.css";
import Users from "./components/pages/UsersList/Users";
import { rows } from "./Shared/dummyData";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="" element={<Home />} />
          {/** exact is to make sure that this is the home page, the router when
           * look for other paths like /users will say that the / means root and will think it's
           * home page while it's not, Because we want the root for home page only
           */}
          <Route path="/users" element={<Users dataRow={rows} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
