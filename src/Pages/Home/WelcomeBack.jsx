export default function WelcomeBack() {
    return (
        <div className="welcomeBackContainer">
            <div className="profileTextContainerfirst">
                <div className="profileCreatedIcon">
                    <img src="/imgs/profileCreatedIcon.png" alt="Profile Created" className="icon" />    
                </div>
                <div className="profileTextDetails">
                    <div className="profileTextDetailsText">
                        Hi Alexander, your profile is ready for instant
                        KYC anywhere. Connect to more platforms today!
                    </div>
                </div>
            </div>
            <div className="unlockProfileButtonContainerMain">
                <div className="unlockProfileButtonContainer">
                    <button className="unlockProfileButton">
                        Explore Platforms
                    </button>
                </div>
            </div>
        </div>
    )
}