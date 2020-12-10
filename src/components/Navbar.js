import React from "react";
import logo from "../assets/shared/desktop/logo.svg";

function Navbar(){
    return(
        <div className="navbar">
          <div className="nav-logo">
            <img src={logo} alt=""></img>
          </div>
          <nav className="nav-link-container">
                <a className="nav-link" href="#">STORIES</a>
                <a className="nav-link nav-link-middle" href="#">FEATURES</a>
                <a className="nav-link" href="#">PRICING</a>
          </nav>
          <button className="nav-button">GET AN INVITE</button>
        </div>
    );
}

export default Navbar;