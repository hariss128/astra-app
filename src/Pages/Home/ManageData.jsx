export default function ManageData() {
    return (
        <div className="manageDataContainer">
            <div className="viewProfileTopContainer">
                <div className="viewProfile">
                    <div className="viewProfileIcon">
                        <i className="fa-solid fa-arrow-left icon"></i>
                    </div>
                    <div className="viewProfileText">
                        Manage My Data
                    </div>
                </div>
            </div>
            <div className="middleContainer">
                <div className="buttonContainer">
                    <button className="button" type="submit">View My Profile Details</button>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="buttonContainer">
                    <button className="button" type="submit">Data Permission</button>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="buttonContainer">
                    <button className="button" type="submit">Delete My Data</button>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}