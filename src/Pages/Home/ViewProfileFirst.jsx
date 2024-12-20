import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ViewProfileFirst () {

   const location = useLocation();
   const fromPage = location.state?.from || "profilecreated"; // Fallback to "profilecreated" if no state

   console.log("Navigated from:", fromPage); // Debugging

   const backLink = fromPage === "managedata" ? "/managedata" : "/profilecreated";

   
   return (
        <div className="editProfileContainer">
            <div className="viewProfileTopContainer">
                <div className="viewProfile">
                    <Link to={backLink} className="myLink">
                        <div className="viewProfileIcon">
                            <i className="fa-solid fa-arrow-left icon"></i>
                        </div>
                    </Link>
                    <div className="viewProfileText">
                        View Profile
                    </div>
                </div>
                <Link
                    to="/editprofile"
                    state={{ from: "profilecreated" }} // Correct way to pass state in React Router v6
                    className="myLink"
>
                    <div className="editProfile">
                        <strong>Edit Profile</strong>
                    </div>
                </Link>
            </div>
            <div className="inputContainer">
                <div className="Inner">
                    <div className="text">
                        Name
                    </div>
                    <div className="input">
                        <div className="inputField">Shehryar Minhas</div>
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Gender
                    </div>
                    <div className="input">
                        <div className="inputField">Male</div>
                        <div className="dropdown">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Date of Birth
                    </div>
                    <div className="input">
                        <div className="inputField">12/12/2000</div>
                        <div className="dropdown">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Nationality
                    </div>
                    <div className="input">
                        <div className="inputField">American</div>
                        <div className="dropdown">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Country of Residence
                    </div>
                    <div className="input">
                        <div className="inputField">American</div>
                        <div className="dropdown">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Address
                    </div>
                    <div className="input">
                        <div className="inputField">House 123 City ABC, USA</div>
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Phone Number
                    </div>
                    <div className="inputNumber">
                        <div className="inputFieldNumber">+92</div>
                        <div className="downArrow">
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="inputField">3104734347</div>
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Document Type
                    </div>
                    <div className="input">
                        <div className="inputField">Smart Contract Code</div>
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Document ID Number
                    </div>
                    <div className="input">
                        <div className="inputField">0X1234.....5678</div>
                    </div>
                </div>
            </div>
            <Link to="/unlockprofile" className="myLinkViewProfile">
                <div className="continueButton">
                    <button className="Button">Continue</button>
                </div>
            </Link>
        </div>
    );
}