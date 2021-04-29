import React from "react";
import "../sass/app.scss";
import "../sass/features.scss";

import buttonarrowwhite from "../assets/shared/desktop/arrow-white.svg";
import hero from "../assets/features/desktop/hero.jpg";

import responsive from "../assets/features/desktop/responsive.svg";
import nolimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
import customdomain from "../assets/features/desktop/custom-domain.svg";
import boostexposure from "../assets/features/desktop/boost-exposure.svg";
import dragdrop from "../assets/features/desktop/drag-drop.svg";

function Features(){
    return(
        <div>
            <div className="feature-card">
                <div className="feature-card--info">
                    <h2>FEATURES</h2>
                    <p>We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.</p>
                </div>
               
                <div className="feature-card--image">

                </div>
            </div>
            <div className="features-container">
                <div className="feature-box">
                    <img src={responsive} alt=""></img>
                    <h3>100% Responsive</h3>
                    <p>No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div>
                <div className="feature-box fb-center">
                    <img src={nolimit} alt="" style={{margin: "18px 0px"}}></img>
                    <h3>No Photo Upload Limit</h3>
                    <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                </div>
                <div className="feature-box">
                    <img src={embed} alt=""></img>
                    <h3>Available to Embed</h3>
                    <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.</p>
                </div>
                <div className="feature-box">
                    <img src={customdomain} alt=""></img>
                    <h3>Custom Domain</h3>
                    <p>With Photosnap subscriptions you can host stories on your own domain. You can also remove our branding!</p>
                </div>
                <div className="feature-box fb-center">
                    <img src={boostexposure} alt=""></img>
                    <h3>Boost Your Exposure</h3>
                    <p>Users that viewed your story or gallery can easily get notified of new and featured stories with our built-in mailing list.</p>
                </div>
                <div className="feature-box">
                    <img src={dragdrop} alt=""></img>
                    <h3>Drag & Drop Image</h3>
                    <p>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
                </div>
            </div>

            <div className="feature-cta">
                <p>WE’RE IN BETA. GET YOUR INVITE TODAY!</p>
                <div className="card-button">
                    <button className="card-button--action">GET AN INVITE</button>
                    <img src={buttonarrowwhite} alt=""></img>
                 </div>
            </div>
        </div>
    )
}

export default Features;