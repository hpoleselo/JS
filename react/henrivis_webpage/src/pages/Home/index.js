import React from "react";
import * as IoIcons from "react-icons/io"; 
import { FaTelegram } from "react-icons/fa"

export default function Home() {
    return (
      <div classname="home">
        <h2>My space on the web.</h2>
        <p>Surfing, nature, video editing, programming and robotics.</p>
        <div className="icons">
            <a href="https://github.com/hpoleselo/">
                <IoIcons.IoLogoGithub/>
            </a>
            <a href=" www.linkedin.com/in/hpoleselo">
                <IoIcons.IoLogoLinkedin/>
            </a>
            <a href="https://www.youtube.com/c/HenriqueP/">
                <IoIcons.IoLogoYoutube/>
            </a>
            <a href="https://vimeo.com/hpoleselo">
                <IoIcons.IoLogoVimeo/>
            </a>
            <a href="https://t.me/henrivis">
                <FaTelegram/>
            </a>
        </div>
      </div>
    )
  
}