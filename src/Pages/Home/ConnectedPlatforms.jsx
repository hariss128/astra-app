import { Link } from "react-router-dom";

export default function ConnectedPlatforms() {
    return (
        <div className="connectedPlatformsContainer">
            <div className="viewProfileTopContainer">
                <div className="viewProfile">
                    <Link to="/homeastra" className="myLink">
                        <div className="viewProfileIcon">
                            <i className="fa-solid fa-arrow-left icon"></i>
                        </div>
                    </Link>
                    <div className="viewProfileText">
                        Connected Platforms
                    </div>
                </div>
            </div>
            <div className="inputContainer">
                <div className="input">
                    <div className="binanceContainer">
                        <img src="/imgs/binanceImage.png" alt="Binance" className="binanceImage" />
                        <div className="inputField">Binance</div>
                    </div>
                    <div className="dropdown">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>      
            </div>
        </div>
    )
}