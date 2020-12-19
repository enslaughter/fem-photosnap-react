import React from "react";
import "../sass/pricing.scss";

import buttonarrowwhite from "../assets/shared/desktop/arrow-white.svg";
import hero from "../assets/pricing/desktop/hero.jpg";

function Pricing(){
    return(
        <div>
            <div className="pricing-card">
                <div className="pricing-card--info">
                    <h2>PRICING</h2>
                    <p>
                    Create all your stories, Photosnap is a platform for photographers and visual storytellers.
                    It's the simple way to create and share your photos. 
                    </p>
                </div>
               
                <img src={hero} alt=""></img>
            </div>
        </div>
    )
}

export default Pricing;