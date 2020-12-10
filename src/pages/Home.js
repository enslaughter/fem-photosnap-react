import React from "react";
import "../sass/home.scss";

import buttonarrow from "../assets/shared/desktop/arrow.svg";
import beautifulstories from "../assets/home/desktop/beautiful-stories.jpg";
import desginedforeveryone from "../assets/home/desktop/designed-for-everyone.jpg";
import createandshare from "../assets/home/desktop/create-and-share.jpg";

import featureresponsive from "../assets/features/desktop/responsive.svg";
import featurenolimit from "../assets/features/desktop/no-limit.svg";
import featureembed from "../assets/features/desktop/embed.svg";


function Home(){
    return(
        <div>
            <div className="home-card">
                <div className="home-card--info home-card-black">
                    <h2>CREATE AND SHARE YOUR PHOTO STORIES.</h2>
                    <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories, and connect with others.</p>
                    <div className="card-button">
                        <button className="card-button--action">GET AN INVITE</button>
                        <img src={buttonarrow} alt=""></img>
                    </div>
                </div>
               
                <img src={createandshare} alt=""></img>
            </div>
            <div className="home-card">
            <img src={beautifulstories} alt=""></img>
                <div className="home-card--info">
                    <h2>BEAUTIFUL STORIES EVERY TIME.</h2>
                    <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                    <div className="card-button">
                        <button className="card-button--action">VIEW THE STORIES</button>
                        <img src={buttonarrow} alt=""></img>
                    </div>
                </div>
               
                
            </div>
            <div className="home-card">
            
                <div className="home-card--info">
                    <h2>DESIGNED FOR EVERYONE.</h2>
                    <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brans, business you name it.</p>
                    <div className="card-button">
                        <button className="card-button--action">VIEW THE STORIES</button>
                        <img src={buttonarrow} alt=""></img>
                    </div>
                </div>
                <img src={desginedforeveryone} alt=""></img>
                
            </div>

            <div className="story-card-container">
                <div className="story-card s-themountains">
                    <h3>The Mountains</h3>
                    <p>by John Appleseed</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrow} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-cityscapes">
                    <h3>The Mountains</h3>
                    <p>by John Appleseed</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrow} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-18days">
                    <h3>The Mountains</h3>
                    <p>by John Appleseed</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrow} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-architecturals">
                    <h3>The Mountains</h3>
                    <p>by John Appleseed</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrow} alt=""></img>
                    </div>
                </div>
            </div>

            <div className="home-features">
                    <img src={featureresponsive} alt=""></img>
                    <img src={featurenolimit} alt=""></img>
                    <img src={featureembed} alt=""></img>
                
               
                    <div className="home-feature">
                        <h3>100% Responsive</h3>
                        <p>No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.</p>
                    </div>
                    <div className="home-feature">
                        <h3>No Photo Upload Limit</h3>
                        <p>Our tool has no limits on uploads or bandwich. Freely upload in bulk and share all of your stories in one go.</p>
                    </div>
                    <div className="home-feature">
                        <h3>Available to Embed</h3>
                        <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps, and more.</p>
                    </div>
                
            </div>
        </div>
    );
}

export default Home;