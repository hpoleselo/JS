import React, { Component } from "react";
import "./style.css";
// Adding the routing part to link our late-added components/pages
import {
    Route,
    NavLink,
    Router,
    Switch
  } 
from "react-router-dom";

// Importing the NavBar
import NavBar from "./../NavBar/";

// Importing the components (pages) we created so we can link them with routing
import Home from "./../../pages/Home/";
import PersonalNotes from "./../../pages/PersonalNotes";
import SensorMonitor from "./../../pages/SensorMonitor";
import Portfolio from "./../../pages/Portfolio";

// The static part from our SPA, also called app frame is the HTML element
// which acts as a container for our content

export default function App() {
    return (
      <NavBar/>
    );

}