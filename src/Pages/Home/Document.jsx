import { Link } from "react-router-dom";

export default function Document() {
    return (
        <div className="documentContainer">
            <div className="mainContainer">
                <div className="topContainer">
                    <div className="headingMain">
                        Capture your ID
                    </div>
                    <div className="descriptionMain">
                        <div className="descriptionText">
                            To complete your profile, you’ll need your official 
                            ID such as passport, national ID or driving licence
                        </div>
                        <div className="descriptionText">
                            Astra will securely extract the details.
                        </div>
                    </div>
                </div>
                <div className="middleContainer">
                    <div className="backgroundImage">
                        <img src="/imgs/captureIdBackground.png" alt="Capture ID Background" className="Background" />
                    </div>
                    <div className="imageContainer">
                        <div className="leftImage">
                            <img src="/imgs/captureIdLeft.png" alt="Capture ID Left" className="Left" />
                        </div>
                        <div className="rightImage">
                            <img src="/imgs/captureIdRight.png" alt="Capture ID Right" className="Right" />
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <Link to="/documentscan" className="myLinkDocument">
                        <div className="buttonTop">
                            <button className="top">
                                Take Picture
                            </button>
                        </div>
                    </Link>
                    <Link to="/documentscan" className="myLinkDocument">
                        <div className="buttonBottom">
                            <button className="bottom">
                                Upload Document
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}