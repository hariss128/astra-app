import { Link } from "react-router-dom";

export default function IdTokenized() {
    return (
        <div className="idTokenizedContainer">
            <div className="containerMain">
                <div className="container">
                    <div className="imageContainer">
                        <img src="/imgs/IdTokenized.png" alt="Id Tokenized" className="image" />
                    </div>
                    <div className="headingContainer">
                        Let’s secure your profile for 
                        instant verification across 
                        our partner platforms
                    </div>
                </div>
                <Link to="/tokenizing" className="myLinkIdTokenized">
                    <div className="buttonContainer">
                        <button className="button">Tokenize My Profile</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}