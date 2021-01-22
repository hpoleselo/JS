import React, { Component } from "react";

// Adding the routing part to link our late-added components/pages
import {
    Route,
    NavLink,
    HashRouter
  } 
from "react-router-dom";

// Importing the components (pages) we created so we can link them with routing
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

// The static part from our SPA, also called app frame is the HTML element
// which acts as a container for our content

// NOTE: a component can take inputs, called in React as props (properties)
class Main extends Component {
  render() {
    return (
        // HashRouter provides the foundation for the nav and browser history handling for the routing
        <HashRouter>
            {/* Main component returns an HTML */}
            <div>
            <h1>Simple SPA</h1>
            <ul className="header">
                {/* Instead of using "a" elements for our list, we replace them with NavLink so we can "enable" them for such thing */}
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                {/* Now we do the routing from our NavLink properly to our components */}
                {/* The path prop from Route determines when the route is going to be active, when the route is active the component specified by the component prop gets rendered */}
                {/* In this case: Clicking on Stuff link will trigger /stuff, which is set by the NavLink comp. to prop, whose path is also /stuff, which will route to the Stuff component that will be rendered.  */}
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;