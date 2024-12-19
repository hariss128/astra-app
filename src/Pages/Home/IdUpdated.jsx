import { Link } from "react-router-dom";

export default function IdUpdated() {
    return (
        <div className="idUpdatedContainer">
            <div className="profileCreatedContainerInner">
                <div className="profileTextContainerfirst">
                    <div className="profileCreatedIcon">
                        <img src="/imgs/profileCreatedIcon.png" alt="Profile Created" className="icon" />    
                    </div>
                    <div className="profileTextDetails">
                        <div className="profileTextDetailsText">
                            Thanks Alexander! <br /><br />I’ve securely added your details from the document to your profile.
                        </div>
                    </div>
                </div>
                <div className="profileTextContainer">
                    <div className="profileTextDetails">
                        <div className="profileTextDetailsText">
                        Next, we need to verify your address. 
                        Please provide a recent document that 
                        confirms your residential address, such 
                        as a utility bill, bank statement, rental 
                        agreement or an official government 
                        document. Ensure the document is dated 
                        within the last three months.
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/idtokenized" className="myLink">
                <div className="buttonContainer">
                    <button className="button">Continue</button>
                </div>
            </Link>
        </div>
    )
}