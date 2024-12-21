import { Link } from "react-router-dom"

export default function LoggedIn() {
    return (
        <div className="loggedInContainer">
            <div className="loggedInMainContainer">
                <div className="loggedInImage">
                    <img src="/imgs/loggedInImage.png" alt="Logged In" className="image" />
                    <div className="loggedInIcon">
                        <img src="/imgs/loggedInTick.png" alt="Logged In" className="tick" />
                    </div>
                </div>
                <div className="loggedInText">
                    <div className="loggedInHeading">
                        Verification Successful
                    </div>
                    <div className="loggedInSubHeading">
                        You’re now logged in Alexander
                    </div>
                </div>
            </div>
            <Link to="/welcomeback" className="myLinkLoggedIn">
                <div className="buttonContainer">
                    <button className="loggedInButton">
                        Continue
                    </button>
                </div>
            </Link>
        </div>
    )
}