import React from "react";
import { useWindowSize } from "../components/Functionality.js";
import "../sass/home.scss";

import buttonarrow from "../assets/shared/desktop/arrow.svg";
import buttonarrowwhite from "../assets/shared/desktop/arrow-white.svg";

import beautifulstories from "../assets/home/desktop/beautiful-stories.jpg";
import desginedforeveryone from "../assets/home/desktop/designed-for-everyone.jpg";
import createandshare from "../assets/home/desktop/create-and-share.jpg";

import beautifulstoresmobile from "../assets/home/mobile/beautiful-stories.jpg";
import desginedforeveryonemobile from "../assets/home/mobile/designed-for-everyone.jpg";
import createandsharemobile from "../assets/home/mobile/create-and-share.jpg";

import featureresponsive from "../assets/features/desktop/responsive.svg";
import featurenolimit from "../assets/features/desktop/no-limit.svg";
import featureembed from "../assets/features/desktop/embed.svg";

function Home() {
  let windowSize = useWindowSize();

  return (
    <div>
      <div className="home-card">
        <div className="home-card--info home-card-black">
          <h2>CREATE AND SHARE YOUR PHOTO STORIES.</h2>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories, and connect with
            others.
          </p>
          <div className="card-button">
            <button className="card-button--action">GET AN INVITE</button>
            <img src={buttonarrowwhite} alt=""></img>
          </div>
        </div>
        {windowSize > 1000 ? (
          <img src={createandshare} alt=""></img>
        ) : (
          <img src={createandsharemobile} alt=""></img>
        )}
      </div>
      <div className="home-card home-card--center">
        <img src={beautifulstories} alt=""></img>
        <div className="home-card--info">
          <h2>BEAUTIFUL STORIES EVERY TIME.</h2>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className="card-button">
            <button className="card-button--action">VIEW THE STORIES</button>
            <img src={buttonarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="home-card">
        <div className="home-card--info">
          <h2>DESIGNED FOR EVERYONE.</h2>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brans, business you name it.
          </p>
          <div className="card-button">
            <button className="card-button--action">VIEW THE STORIES</button>
            <img src={buttonarrow} alt=""></img>
          </div>
        </div>
        <img src={desginedforeveryone} alt=""></img>
      </div>

      <div className="home-story-card-container">
        <div className="home-story-card s-themountains">
          <h3>The Mountains</h3>
          <p>by John Appleseed</p>
          <hr className="story-hr" />
          <div className="story-button">
            <a href="#">READ STORY</a>
            <img src={buttonarrowwhite} alt=""></img>
          </div>
        </div>
        <div className="home-story-card s-cityscapes">
          <h3>Sunset Cityscapes</h3>
          <p>by Benjamin Cruz</p>
          <hr className="story-hr" />
          <div className="story-button">
            <a href="#">READ STORY</a>
            <img src={buttonarrowwhite} alt=""></img>
          </div>
        </div>
        <div className="home-story-card s-18days">
          <div className="story-gradient"></div>
          <h3>18 Days Voyage</h3>
          <p>by Alexei Borodin</p>
          <hr className="story-hr" />
          <div className="story-button">
            <a href="#">READ STORY</a>
            <img src={buttonarrowwhite} alt=""></img>
          </div>
        </div>
        <div className="home-story-card s-architecturals">
          <h3>Architecturals</h3>
          <p>by Samantha Brooke</p>
          <hr className="story-hr" />
          <div className="story-button">
            <a href="#">READ STORY</a>
            <img src={buttonarrowwhite} alt=""></img>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div className="feature-box">
          <img src={featureresponsive} alt=""></img>
          <h3>100% Responsive</h3>
          <p>
            No matter which device you're on, our site is fully responsive and
            stories look beautiful on any screen.
          </p>
        </div>
        <div className="feature-box fb-center">
          <img src={featurenolimit} alt="" style={{ margin: "18px 0px" }}></img>
          <h3>No Photo Upload Limit</h3>
          <p>
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className="feature-box">
          <img src={featureembed} alt=""></img>
          <h3>Available to Embed</h3>
          <p>
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
