import { Link } from "react-router-dom";

export default function HomeAstra() {
    return (
        <div className="homeAstraContainer">
            <div className="homeAstraContainerInner">
                <div className="topContainer">
                    <div className="topImageContainer">
                        <img src="/imgs/homeImage.png" alt="Home Astra" className="topimage" />
                    </div>
                    <div className="name">
                        Alexander Green
                    </div>
                    <div className="container">
                        <div className="date">
                            12/12/1999
                        </div>
                        <div className="passportContainer">
                            <img src="/imgs/homeIcon.png" alt="Passport" className="passportImage" />
                            <div className="passportText">
                                Passport
                            </div>
                        </div>
                    </div>
                    <Link to="/document" className="myLink">
                        <div className="bottomContainer">
                            <div className="text">
                                KYC Status: Complete
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="middleContainer">
                    <div className="buttonContainer">
                        <button className="button" type="submit">Connected Platforms</button>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="buttonContainer">
                        <button className="button" type="submit">View Token Details</button>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="buttonContainer">
                        <button className="button" type="submit">My Documents</button>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <Link to="/managedata" className="myLinkHomeAstra">
                        <div className="buttonContainer">
                            <button className="button" type="submit">Manage My Data</button>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="whiteButtonContainer">
                <div className="whiteButton">
                    <button className="button" type="submit">Connect Astra to Platforms</button>
                </div>
                <div className="blueButton">
                    <button className="button" type="submit">Share My Profile</button>
                </div>
            </div>
        </div>
    )
}