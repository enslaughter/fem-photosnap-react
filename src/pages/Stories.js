import React from "react";
import "../sass/stories.scss";
import buttonarrowwhite from "../assets/shared/desktop/arrow-white.svg";

function Stories(){
    return(
        <div>
            <div className="story-featured">
                <div className="story-featured-info-top">
                    <p className="story-featured-preheader">LAST MONTH'S FEATURED STORY</p>
                    <h1 className="story-featured-header">HAZY FULL MOON OF APPALACHIA</h1>
                </div>
                <div className="story-featured-info-bottom">
                    <div className="story-featured-attribution">
                        <p className="story-featured-date">March 2nd 2020</p>
                        <p className="story-featured-author"> by John Appleseed</p>
                    </div>
                    <p className="story-featured-description">
                        The dissected plateau area, while not actually made up of geological
                        mountains, is popularly called "mountains," especially in eastern 
                        Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
                    </p>
                    <div className="story-featured-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
            </div>

            <div className="story-card-container">
                {/* Row 1: */}
                <div className="story-card s-themountains">
                    <h3>The Mountains</h3>
                    <p>by John Appleseed</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-cityscapes">
                    <h3>Sunset Cityscapes</h3>
                    <p>by Benjamin Cruz</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-18days">
                <div className="story-gradient"></div>
                    <h3>18 Days Voyage</h3>
                    <p>by Alexei Borodin</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-architecturals">
                    <h3>Architecturals</h3>
                    <p>by Samantha Brooke</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>

                {/* Row 2: */}
                <div className="story-card s-worldtour">
                    <h3>World Tour 2019</h3>
                    <p>by Timothy Wagner</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-unforeseencorners">
                    <h3>Unforeseen Corners</h3>
                    <p>by William Malcolmz</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-kingonafrica">
                <div className="story-gradient"></div>
                    <h3>King on Africa: Part II</h3>
                    <p>by Tim Hillenburg</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-triptonowhere">
                    <h3>The Trip to Nowhere</h3>
                    <p>by Felicia Rourke</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>

                {/* Row 3: */}
                <div className="story-card s-rageofthesea">
                    <h3>Rage of The Sea</h3>
                    <p>by Mohammed Abdul</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-runningfree">
                    <h3>Running Free</h3>
                    <p>by Michelle</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-behindthewaves">
                <div className="story-gradient"></div>
                    <h3>Behind the Waves</h3>
                    <p>by Lamarr Wilson</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-calmwaters">
                    <h3>Calm Waters</h3>
                    <p>by Samantha Brooke</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>

                {/* Row 4: */}
                <div className="story-card s-themilkyway">
                    <h3>The Milky Way</h3>
                    <p>by Benjamin Cruz</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-nightatthedarkforest">
                    <h3>Night at The Dark Forest</h3>
                    <p>by Mohammed Abdul</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-somwarpetsbeauty">
                <div className="story-gradient"></div>
                    <h3>Somwarpet's Beauty</h3>
                    <p>by Michelle</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
                <div className="story-card s-landofdreams">
                    <h3>Land of Dreams</h3>
                    <p>by William Malcolm</p>
                    <hr className="story-hr" />
                    <div className="story-button">
                        <a href="#">READ STORY</a>
                        <img src={buttonarrowwhite} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories;