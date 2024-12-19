import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="verifyEmailContainer">
            <Link to="/signup" className="myLink">
                <div className="leftArrow">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            </Link>
            <div className="verifyEmailContainerOuter">
                <div className="verifyEmailContainerInner">
                    <div className="headingContainerMain">
                        <div className="headingcontainer">
                            <div className="mainHeading">
                                Verify Your Email to Get 
                                Started
                            </div>
                            <div className="mainSubHeading">
                            Check your inbox for a verification email. We 
                            sent this on <span className="subHeadingEmail"> shahrayarminhas@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="verifyEmailBoxesContainer">
                        <div className="verifyBoxes">
                            <div className="verifyBox">
                                2
                            </div>
                            <div className="verifyBox"> 
                                2
                            </div>
                            <div className="verifyBox">
                                2
                            </div>
                            <div className="verifyBox">
                                2
                            </div>
                            <div className="verifyBox">
                                2
                            </div>
                        </div>
                        <Link to="/enterbio" className="myLink">
                            <div className="verifyButtonContainer">
                                <button className="verifyButton">
                                    Verify Account
                                </button>
                            </div>
                        </Link>
                        <div className="resendButtonContainer">
                            <button className="resendButton">
                                Resend Email
                            </button>
                        </div>
                    </div>
                </div>
                <div className="verifyEmailContainerBottom">
                    <Link to="/login" className="myLink">
                        <button className="buttonBack">
                            Back to login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}