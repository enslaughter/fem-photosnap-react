import React from "react";
import "../sass/features.scss";

import buttonarrowwhite from "../assets/shared/desktop/arrow-white.svg";
import hero from "../assets/features/desktop/hero.jpg";

function Features(){
    return(
        <div>
            <div className="feature-card">
                <div className="feature-card--info">
                    <h2>FEATURES</h2>
                    <p>We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.</p>
                </div>
               
                <img src={hero} alt=""></img>
            </div>
        </div>
    )
}

export default Features;