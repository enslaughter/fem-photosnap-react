import React from "react";
import "../sass/home.scss";

function Home(){
    return(
        <div>
            <div className="home-card">
                <div className="home-card--info home-card-black">
                    <h2>CREATE AND SHARE YOUR PHOTO STORIES.</h2>
                    <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories, and connect with others.</p>
                    <div className="card-button">
                        <button className="card-button--action">GET AN INVITE</button>
                        <img src={process.env.PUBLIC_URL + "/assets/shared/desktop/arrow.svg"} alt=""></img>
                    </div>
                </div>
               
                <img src={process.env.PUBLIC_URL + "/assets/home/desktop/create-and-share.jpg"} alt=""></img>
            </div>
            <div className="home-card">
            <img src={process.env.PUBLIC_URL + "/assets/home/desktop/beautiful-stories.jpg"} alt=""></img>
                <div className="home-card--info">
                    <h2>BEAUTIFUL STORIES EVERY TIME.</h2>
                    <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                    <div className="card-button">
                        <button className="card-button--action">VIEW THE STORIES</button>
                        <img src={process.env.PUBLIC_URL + "/assets/shared/desktop/arrow.svg"} alt=""></img>
                    </div>
                </div>
               
                
            </div>
            <div className="home-card">
            
                <div className="home-card--info">
                    <h2>DESIGNED FOR EVERYONE.</h2>
                    <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brans, business you name it.</p>
                    <div className="card-button">
                        <button className="card-button--action">VIEW THE STORIES</button>
                        <img src={process.env.PUBLIC_URL + "/assets/shared/desktop/arrow.svg"} alt=""></img>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + "/assets/home/desktop/designed-for-everyone.jpg"} alt=""></img>
                
            </div>

            <div className="story-card-container">
                <div className="story-card">
                    
                </div>
            </div>
        </div>
    );
}

export default Home;