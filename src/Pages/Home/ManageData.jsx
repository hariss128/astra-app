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
                <div className="buttonContainer">
                    <button className="button" type="submit">Manage My Data</button>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}