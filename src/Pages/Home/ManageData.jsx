import { Link } from "react-router-dom";

export default function ManageData() {
    return (
        <div className="manageDataContainer">
            <div className="viewProfileTopContainer">
                <div className="viewProfile">
                    <Link to="/homeastra" className="myLink">
                        <div className="viewProfileIcon">
                            <i className="fa-solid fa-arrow-left icon"></i>
                        </div>
                    </Link>
                    <div className="viewProfileText">
                        Manage My Data
                    </div>
                </div>
            </div>
            <div className="middleContainer">
                <Link
                    to="/viewprofile"
                    state={{ from: "managedata" }} // Correct way to pass state in React Router v6
                    className="myLinkManageData"
>
                    <div className="buttonContainer">
                        <button className="button" type="submit">View My Profile Details</button>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </Link>
                <div className="buttonContainer">
                    <button className="button" type="submit">Data Permission</button>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                <Link to="/deleteaccount" className="myLinkManageData">
                    <div className="buttonContainer">
                        <button className="button" type="submit">Delete My Data</button>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </Link>
            </div>
        </div>
    )
}