import React, { useState } from "react";
import "../sass/pricing.scss";

import buttonarrowwhite from "../assets/shared/desktop/arrow-white.svg";
import iconcheck from "../assets/pricing/desktop/check.svg";

function Pricing() {
  const [toggle, setToggle] = useState("monthly");

  return (
    <div>
      <div className="feature-card">
        <div className="feature-card--info">
          <h2>PRICING</h2>
          <p>
            Create all your stories, Photosnap is a platform for photographers
            and visual storytellers. It's the simple way to create and share
            your photos.
          </p>
        </div>

        <div className="pricing-card--image"></div>
      </div>
      <div className="pricing-plans">
        <div className="pricing-plans-toggle">
          <p style={toggle === "monthly" ? { color: "black" } : {}}>Monthly</p>
          <button
            onClick={() => {
              toggle === "monthly" ? setToggle("yearly") : setToggle("monthly");
            }}
          >
            <div
              className="pricing-toggle-state"
              style={toggle === "yearly" ? { marginLeft: "auto" } : {}}
            ></div>
          </button>
          <p style={toggle === "yearly" ? { color: "black" } : {}}>Yearly</p>
        </div>
        <div className="pricing-plans-options">
          <div className="pricing-plan-outer">
            <h3>Basic</h3>
            <p className="plan-description">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <p className="plan-price">
              $19{toggle === "monthly" ? "" : "0"}.00
            </p>
            <p className="plan-per">
              per {toggle === "monthly" ? "month" : "year"}
            </p>
            <button>PICK PLAN</button>
          </div>
          <div className="pricing-plan-inner">
            <h3>Pro</h3>
            <p className="plan-description">
              More advanced features available. {"        "}Recommended for
              photograhy veterans and professionals.
            </p>
            <p className="plan-price">
              $39{toggle === "monthly" ? "" : "0"}.00
            </p>
            <p className="plan-per">
              per {toggle === "monthly" ? "month" : "year"}
            </p>
            <button>PICK PLAN</button>
          </div>
          <div className="pricing-plan-outer">
            <h3>Business</h3>
            <p className="plan-description">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <p className="plan-price">
              $99{toggle === "monthly" ? "" : "0"}.00
            </p>
            <p className="plan-per">
              per {toggle === "monthly" ? "month" : "year"}
            </p>
            <button>PICK PLAN</button>
          </div>
        </div>
      </div>

      <div className="pricing-table">
        <h2>COMPARE</h2>
        <table>
          <tr>
            <th style={{ textAlign: "left" }}>THE FEATURES</th>
            <th>BASIC</th>
            <th>PRO</th>
            <th>BUSINESS</th>
          </tr>
          <tr>
            <td>UNLIMITED STORY POSTING</td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>UNLIMITED PHOTO UPLOAD</td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>EMBEDDING CUSTOM CONTENT</td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>CUSTOMIZE METADATA</td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>ADVANCED METRICS</td>
            <td></td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>PHOTO DOWNLOADS</td>
            <td></td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>SEARCH ENGINE INDEXING</td>
            <td></td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>CUSTOM ANALYTICS</td>
            <td></td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
        </table>
      </div>

      <div className="feature-cta">
        <p>WE’RE IN BETA. GET YOUR INVITE TODAY!</p>
        <div className="card-button">
          <button className="card-button--action">GET AN INVITE</button>
          <img src={buttonarrowwhite} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
