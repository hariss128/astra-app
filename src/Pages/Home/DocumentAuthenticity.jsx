export default function DocumentAuthenticity() {
    return (
        <div className="authenticityContainer">
            <div className="imageContainer">
                <div className="circleImageMain">
                    <img src="/imgs/createprofileImage.png" alt="Circle" className="circleImage" />
                    <div className="logoImageMain">
                        <img src="/imgs/permissionImageWhite.png" alt="Logo" className="logoImage" />
                    </div>
                </div>
            </div>
            <div className="textContainer">
                <div className="text">
                    Verifying document authenticity...
                </div>
            </div>
        </div>
    )
}