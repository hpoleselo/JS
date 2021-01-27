import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import "./style.css";


/* Our Navbar will call  , put icons and down to it with the names */

// Insert icons
// export as const since the navbar is static? 
export default function NavBar() {
    return (
        <div>
            <div>
                <h2>Home</h2>
            </div>
            <div>
                <h2>Portfolio</h2>
            </div>
            <div>
                <h2>Sensor Monitor</h2>
            </div>
            <div>
                <h2>Personal Notes</h2>
            </div>
        </div>
    );

}