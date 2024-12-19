import { Link } from "react-router-dom";

export default function AstraGuide() {
    return (
        <div className="astraGuideContainer">
            <div className="containerMain">
                <div className="InnerContainer">
                    <div className="profileTextContainerfirst">
                        <div className="profileCreatedIcon">
                            <img src="/imgs/profileCreatedIcon.png" alt="Profile Created" className="icon" />    
                        </div>
                        <div className="profileTextDetails">
                            <div className="profileTextDetailsText">
                            Here’s how Astra works: <br /><br />When you see the Astra button on platforms like Binance, just click it, verify with your face and you’re in.
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="imageContainer">
                            <img src="/imgs/AstraGuide.png" alt="Astra Guide" className="image" />
                        </div>
                    </div>
                </div>
                <Link to="/homeastra" className="myLinkAstraGuide">
                    <div className="buttonContainer">
                        <button className="button">Go To My Profile Now</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}