import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing the NavBar
import NavBar from "./../NavBar/";

// Importing the components (pages) we created so we can link them with routing
import Home from "./../../pages/Home/";
import PersonalNotes from "./../../pages/PersonalNotes";
import SensorMonitor from "./../../pages/SensorMonitor";
import Portfolio from "./../../pages/Portfolio";

import "./style.css";


export default function App() {
    return (
        <Router>
            <div className="grid">
                <NavBar/>
            
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