import React from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { IoIosHome, IoIosBriefcase } from "react-icons/io";
import { GiMovementSensor } from "react-icons/gi"
import "./style.css";


/* Our Navbar will call  , put icons and down to it with the names */

// Insert icons
// export as const since the navbar is static? 
export default function NavBar() {
    return (
        <div className="nav-links">
            <Link to="/">
                <div>
                    <h3>Home <IoIosHome/></h3>
                </div>
            </Link>
            <Link to="/portfolio">
                <div>
                    <h3>Portfolio <IoIosBriefcase/></h3>
                </div>
            </Link>
            <Link to="/sensormonitor">
                <div>
                    <h3>Sensor Monitor <GiMovementSensor/> </h3>
                </div>
            </Link>
            <Link to="/personalnotes">
                <div>
                    <h3>Personal Notes  <FaPencilAlt/></h3>
                </div>
            </Link>
        </div>
    );

}