import React, { useState } from "react";
import { useWindowSize } from "./components/Functionality";
import Home from "./pages/Home.js";
import Stories from "./pages/Stories.js";
import Features from "./pages/Features.js";
import Pricing from "./pages/Pricing.js";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import "./sass/app.scss";

import logo from "./assets/shared/desktop/logo.svg";
import logowhite from "./assets/shared/desktop/logo-white.svg";

import facebook from "./assets/shared/desktop/facebook.svg";
import youtube from "./assets/shared/desktop/youtube.svg";
import twitter from "./assets/shared/desktop/twitter.svg";
import pinterest from "./assets/shared/desktop/pinterest.svg";
import instagram from "./assets/shared/desktop/instagram.svg";

import buttonarrowwhite from "./assets/shared/desktop/arrow-white.svg";

import menuopen from "./assets/shared/mobile/menu.svg";
import menuclosed from "./assets/shared/mobile/close.svg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  let windowSize = useWindowSize();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true);
  }

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <div className="nav-logo">
            <a href="/">
              <img src={logo} alt=""></img>
            </a>
          </div>
          {windowSize.width > 1000 && (
            <nav className="nav-link-container">
              <Link to="/stories" className="nav-link">
                STORIES
              </Link>
              <Link to="/features" className="nav-link nav-link-middle">
                FEATURES
              </Link>
              <Link to="/pricing" className="nav-link">
                PRICING
              </Link>
            </nav>
          )}
          {windowSize.width > 1000 && (
            <button className="nav-button">GET AN INVITE</button>
          )}
          {windowSize.width <= 1000 && (
            <button className="nav-mobile-toggle" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <img src={menuclosed} alt="Toggle Mobile Menu"></img>
              ) : (
                <img src={menuopen} alt="Toggle Mobile Menu"></img>
              )}
            </button>
          )}
        </div>
        {mobileMenuOpen && (
          <div className="mobile-nav-menu">
            <nav className="mobile-nav-container">
              <a className="mobile-nav-link" href="/stories">
                STORIES
              </a>
              <a className="mobile-nav-link" href="/features">
                FEATURES
              </a>
              <a className="mobile-nav-link" href="/pricing">
                PRICING
              </a>
            </nav>
            <button className="mobile-nav-button">GET AN INVITE</button>
          </div>
        )}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>

        <div className="photosnap-footer">
          <div className="footer-left">
            <div className="footer-logos">
              <img src={logowhite} alt=""></img>
              <div className="footer-logos-socials">
                <img src={facebook} alt=""></img>
                <img src={youtube} alt=""></img>
                <img src={twitter} alt=""></img>
                <img src={pinterest} alt=""></img>
                <img src={instagram} alt=""></img>
              </div>
            </div>
            <nav className="footer-nav">
              <a className="footer-link" href="/">
                HOME
              </a>
              <a className="footer-link" href="/stories">
                STORIES
              </a>
              <a className="footer-link" href="/features">
                FEATURES
              </a>
              <a className="footer-link" href="/pricing">
                PRICING
              </a>
            </nav>
          </div>

          <div className="footer-right">
            <div className="card-button">
              <button
                className="card-button--action"
                title="Dead link for display purposes only"
              >
                GET AN INVITE
              </button>
              <img src={buttonarrowwhite} alt=""></img>
            </div>
            <p className="copyright">Copyright 2019. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
