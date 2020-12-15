import React from "react";
import logo from "../assets/shared/desktop/logo-white.svg";

import facebook from "../assets/shared/desktop/facebook.svg";
import youtube from "../assets/shared/desktop/youtube.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import pinterest from "../assets/shared/desktop/pinterest.svg";
import instagram from "../assets/shared/desktop/instagram.svg";

import buttonarrowwhite from "../assets/shared/desktop/arrow-white.svg";

function Footer(){
    return(
        <div className="photosnap-footer">
            <div className="footer-left">
                <div className="footer-logos">
                    <img src={logo} alt=""></img>
                    <div className="footer-logos-socials">
                        <img src={facebook} alt=""></img>
                        <img src={youtube} alt=""></img>
                        <img src={twitter} alt=""></img>
                        <img src={pinterest} alt=""></img>
                        <img src={instagram} alt=""></img>
                    </div>
                </div>
                <nav className="footer-nav">
                    <a className="footer-link" href="#">HOME</a>
                    <a className="footer-link" href="#">STORIES</a>
                    <a className="footer-link" href="#">FEATURES</a>
                    <a className="footer-link" href="#">PRICING</a>
                </nav>
            </div>

            <div className="footer-right">
                <div className="card-button">
                    <button className="card-button--action">GET AN INVITE</button>
                    <img src={buttonarrowwhite} alt=""></img>
                 </div>
                 <p className="copyright">Copyright 2019. All Rights Reserved</p>
            </div>
        
            
        </div>
    );
}

export default Footer;