export default function DeleteAccount() {
    return (
        <div className="deleteAccountContainer">
            <div className="deleteAccountContainerInner">
                <div className="deleteAccountImage">
                    <img src="/imgs/deleteImage.png" alt="Profile Created" className="icon" />
                </div>
                <div className="deleteAccountHeading">
                    Delete My Data
                </div>
                <div className="deleteAccountText">
                    Are you sure that you would like to delete your data. this will permanently delete all the associated data with this profile.
                </div>
            </div>
            <div className="deleteAccountButtonContainer">
                <div className="cancelAccountButton">
                    <button className="cancelButton">No, Cancel</button>
                </div>
                <div className="deleteAccountButton">
                    <button className="deleteButton">Yes, Delete Account</button>
                </div>
            </div>
        </div>
    )
}