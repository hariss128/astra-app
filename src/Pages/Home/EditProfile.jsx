import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


export default function EditProfile() {
   const location = useLocation();
   const fromPage = location.state?.from || "profilecreated"; // Fallback to "profilecreated" if no state

   console.log("Navigated from:", fromPage); // Debugging

   const backLink = fromPage === "managedata" ? "/managedata" : "/profilecreated";
    return (
        <div className="viewProfileContainer">
            <div className="viewProfileTopContainer">
                <div className="viewProfile">
                    <Link to={backLink} className="myLink">
                        <div className="viewProfileIcon">
                            <i className="fa-solid fa-arrow-left icon"></i>
                        </div>
                    </Link>
                    <div className="viewProfileText">
                        Edit Profile
                    </div>
                </div>
                <Link to="/viewprofile" className="myLink">
                    <div className="editProfile">
                        <strong>View Profile</strong>
                    </div>
                </Link>
            </div>
            <div className="inputContainer">
                <div className="Inner">
                    <div className="text">
                        Name
                    </div>
                    <div className="input">
                        <input type="text" className="inputField" placeholder="Shehryar Minhas" />
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Gender
                    </div>
                    <div className="input">
                        <input type="text" className="inputField" placeholder="Male" />
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
                        <input type="text" className="inputField" placeholder="12/12/2000" />
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
                        <input type="text" className="inputField" placeholder="American" />
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
                        <input type="text" className="inputField" placeholder="American" />
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
                        <input type="text" className="inputField" placeholder="House 123 City ABC, USA" />
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Phone Number
                    </div>
                    <div className="inputNumber">
                        <input type="text" className="inputFieldNumber" placeholder="+92" />
                        <div className="downArrow">
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <input type="text" className="inputField" placeholder="3104734347" />
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Document Type
                    </div>
                    <div className="input">
                        <input type="text" className="inputField" placeholder="Smart Contract Code" />
                    </div>
                </div>
                <div className="Inner">
                    <div className="text">
                        Document ID Number
                    </div>
                    <div className="input">
                        <input type="text" className="inputField" placeholder="0X1234.....5678" />
                    </div>
                </div>
            </div>
            <Link to="/unlockprofile" className="myLinkEditProfile">
                <div className="continueButton">
                    <button className="Button">Continue</button>
                </div>
            </Link>
        </div>
    )
}
