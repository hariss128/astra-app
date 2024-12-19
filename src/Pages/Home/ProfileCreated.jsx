
import React from 'react';
import { Link } from "react-router-dom";

export default function ProfileCreated() {
    return (
        <div className="profileCreatedContainer">
            <div className="profileImage">
                <img src="/imgs/mainImage.png" alt="Profile" className="profileImageIcon" />
            </div>
            <div className="profileCreatedContainerOuter">
                <div className="profileText">
                    <div className="profileTextHeading">
                        Congratulations!<br />We’ve Built Your Profile
                    </div>
                </div>
                <div className="profileCreatedContainerInner">
                    <div className="profileTextContainerfirst">
                        <div className="profileCreatedIcon">
                            <img src="/imgs/profileCreatedIcon.png" alt="Profile Created" className="icon" />    
                        </div>
                        <div className="profileTextDetails">
                            <div className="profileTextDetailsText">
                                Hello my name is Nova, nice to meet you <strong>Alexander!</strong><br /><br />
                                I’ve built a quick profile using the image you’ve just shared. Here’s what I’ve found:
                            </div>
                        </div>
                    </div>
                    <div className="profileTextContainer">
                        <div className="profileTextDetails">
                            <div className="profileTextDetailsText">
                                Your name is <strong>Alexander Green.</strong>
                            </div>
                        </div>
                        <div className="profileTextDetails">
                            <div className="profileTextDetailsText">
                                We identified your gender as <strong>Male.</strong>
                            </div>
                        </div>
                        <div className="profileTextDetails">
                            <div className="profileTextDetailsText">
                                You are approximately 35 years old.
                            </div>
                        </div>
                        <div className="profileTextDetails">
                            <div className="profileTextDetailsText">
                                You are <strong>American by nationality</strong>, living in <strong>America.</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/viewprofile" className="myLink">
                    <div className="profileButton">
                        <button className="profileButtonText">Show My Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}