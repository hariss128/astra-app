export default function CreatingProfile() {
    return (
        <div className="creatingProfileContainer">
            <div className="imageContainer">
                <div className="circleImageMain">
                    <img src="/imgs/createprofileImage.png" alt="Circle" className="circleImage" />
                    <div className="logoImageMain">
                        <img src="/imgs/permissionImage.png" alt="Logo" className="logoImage" />
                    </div>
                </div>
            </div>
            <div className="textContainer">
                <div className="text">
                    Please wait we are creating your profile.
                </div>
            </div>
        </div>
    )
}