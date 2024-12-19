import { Link } from "react-router-dom";

export default function GetStarted() {
    return (
        <div className="getStartedContainer">
            <div className="mainImage">
                <img src="/imgs/mainImage.png" alt="mainImage" className="image" />
            </div>
            <div className="headingContainerMain">
                <div className="headingcontainer">
                    <div className="mainHeading">
                        Effortless KYC & Identity
                        Verification with Astra
                    </div>
                    <div className="mainSubHeading">
                        Instantly build your profile and get ready for 
                        seamless access to DeFi and fintech platforms.
                    </div>
                </div>
            </div>
            <div className="buttonContainerMain" style={{ width: '100%' }}>
                <Link to="/signup" className="myLink" style={{ display: 'block', width: '100%' }}>
                    <div className="buttonContainer" style={{ width: '100%' }}>
                        <button className="button">Get Started</button>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </Link>
            </div>
        </div>
    )
}