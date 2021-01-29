import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing the NavBar
import NavBar from "./../NavBar/";

// Importing the components (pages) we created so we can link them with routing
import Home from "./../../pages/Home/";
import PersonalNotes from "./../../pages/PersonalNotes";
import SensorMonitor from "./../../pages/SensorMonitor";
import Portfolio from "./../../pages/Portfolio";

import "./style.css";

// The static part from our SPA, also called app frame is the HTML element
// which acts as a container for our content

export default function App() {
    return (
        <Router>
            <div className="grid">
                <div className="navBar">
                 <NavBar/>
                </div>
            
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        {/* We say the path that it goes when we click and which component is going to render out. */}
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/sensormonitor" component={SensorMonitor}/>
                        <Route path="/personalnotes" component={PersonalNotes}/>
                    </Switch>

                </div>
            </div>

        </Router>
    );

}