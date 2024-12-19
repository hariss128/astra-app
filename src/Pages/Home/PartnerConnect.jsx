export default function PartnerConnect() {
    return (
        <div className="partnerConnectContainer">
            <div className="Main">
                <div className="Inner">
                    <img src="/imgs/partnerConnect.png" alt="Passport" className="partnerImage" />
                </div>
                <div className="innerShadow">
                    <img src="/imgs/partnerShadow.png" alt="Passport" className="partnerShadow" />
                    <img src="/imgs/partnerShadow.png" alt="Passport" className="partnerShadow" />
                </div>
            </div>
            <div className="partnerTextContainer">
                <div className="partnerText">
                    <div className="partnerTextTitle">
                        Use Astra to verify your identity instantly
                    </div>
                </div>
                <div className="buttonContainer">
                    <button className="partnerButton">
                        Login with Astra
                    </button>
                </div>
            </div>
        </div>
    )
}