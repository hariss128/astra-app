export default function ViewDocument() {
    return (
        <div className="viewDocumentContainer">
            <div className="viewProfileTopContainer">
                <div className="viewProfile">
                    <div className="viewProfileIcon">
                        <i className="fa-solid fa-arrow-left icon"></i>
                    </div>
                    <div className="viewProfileText">
                        View Document
                    </div>
                </div>
            </div>
            <div className="containerMain">
                <div className="container">
                    <div className="imageContainer">
                        <img src="/imgs/viewDocumentImage.png" alt="Document" className="documentImage" />
                    </div>
                    <div className="flexContainer">
                        <div className="textContainer">
                            <div className="textContainerTitle">
                                Passport
                            </div>
                            <div className="outerContainer">
                                <div className="uploadedOn">
                                    Uploaded on:
                                </div>
                                <div className="uploadedOnText">
                                    12/12/2024
                                </div>
                            </div>
                        </div>
                        <div className="imageContainer">
                            <img src="/imgs/downloadIcon.png" alt="Download" className="downloadIcon" />
                        </div>
                    </div>
                </div>
                <div className="bottomContainer">
                    <div className="firstContainer">
                            <img src="/imgs/documentImage.png" alt="Proof of Funds" className="Image" />
                            <div className="iconContainer">
                                <div className="imageText">
                                    Submit Proof of Funds for further access
                                </div>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                    </div>
                    <div className="secondContainer">
                        <div className="secondContainerText">
                        Get ready to take the next step! Submit your 
                        Proof of Funds for further
                         access and unlock even more possibilities.
                        </div>
                    </div>
                    <div className="thirdContainer">
                        <button className="thirdContainerButton">
                            Get Access
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}