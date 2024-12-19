import { Link } from "react-router-dom";

export default function UnlockProfile() {
    return (
        <div className="unlockProfileContainer">
            <div className="profileTextContainerfirst">
                <div className="profileCreatedIcon">
                    <img src="/imgs/profileCreatedIcon.png" alt="Profile Created" className="icon" />    
                </div>
                <div className="profileTextDetails">
                    <div className="profileTextDetailsText">
                        Would you like to see your full profile and unlock 
                        seamless KYC for platforms like Binance, Kraken, and 
                        more?
                    </div>
                </div>
            </div>
            <div className="unlockProfileButtonContainerMain">
                <Link to="/connectwallet" className="myLinkUnlockProfile">
                <div className="unlockProfileButtonContainer">
                    <button className="unlockProfileButton">
                        Unlock Full Profile
                    </button>
                </div>
                </Link>
                <div className="learnMoreButtonContainer">
                    <button className="learnMoreButton">
                        Learn More About Astra
                    </button>
                </div>
            </div>
        </div>
    )
}