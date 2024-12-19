import { Link } from "react-router-dom";

export default function TokenReady() {
    return (
        <div className="tokenReadyContainer">
            <div className="containerMain">
                <div className="container">
                    <div className="imageContainer">
                        <img src="/imgs/IdTokenized.gif" alt="Id Tokenized" className="image" />
                    </div>
                    <div className="headingContainer">
                        <div className="heading">
                            Success! Your Token is Ready
                        </div>
                        <div className="subHeading">
                            Congrats! Your digital identity is now tokenized. 
                            You’re now ready for instant login with Astra.
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <div className="top">
                        <button className="button">
                            View Token Details
                        </button>
                    </div>
                    <Link to="/astraguide" className="myLinkTokenReady">
                        <div className="bottom">
                            <button className="button">
                                Go To Profile
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}