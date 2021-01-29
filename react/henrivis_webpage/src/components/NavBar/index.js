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
        <div className="navBar">
            <div className="nav-links">
                <Link className="text-link" to="/">
                    <div>
                        <h3><IoIosHome/> Home</h3>
                    </div>
                </Link>
                <Link className="text-link" to="/portfolio">
                    <div>
                        <h3><IoIosBriefcase/> Portfolio</h3>
                    </div>
                </Link>
                <Link className="text-link" to="/sensormonitor">
                    <div>
                        <h3><GiMovementSensor/> Sensor Monitor</h3>
                    </div>
                </Link>
                <Link className="text-link" to="/personalnotes">
                    <div>
                        <h3><FaPencilAlt/> Personal Notes</h3>
                    </div>
                </Link>
            </div>
        </div>
    );

}