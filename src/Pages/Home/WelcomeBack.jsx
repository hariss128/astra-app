import { Link } from "react-router-dom";

export default function WelcomeBack() {
    return (
        <div className="welcomeBackContainer">
            <div className="profileTextContainerfirst">
                <div className="profileCreatedIcon">
                    <img src="/imgs/profileCreatedGif.gif" alt="Profile Created" className="icon" />    
                </div>
                <div className="profileTextDetails">
                    <div className="profileTextDetailsText">
                        Hi Alexander, your profile is ready for instant
                        KYC anywhere. Connect to more platforms today!
                    </div>
                </div>
            </div>
            <div className="unlockProfileButtonContainerMain">
                <Link to="/referralone" className="myLinkWelcomeBack">
                    <div className="unlockProfileButtonContainer">
                        <button className="unlockProfileButton">
                            Explore Platforms
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}