export default function QrInstruct() {
    return (
        <div className="qrInstructContainer">
            <div className="InnerContainer">
                <div className="topContainer">
                    <img src="/imgs/qrInstructImage.png" alt="Qr Instruct" className="topimage" />
                </div>
                <div className="Container">
                    <div className="bottomContainer">
                        <img src="/imgs/QRImage.png" alt="Qr Instruct" className="bottomimage" />
                    </div>
                    <div className="textContainer">
                        <div className="text">Use Astra on supported platforms by scanning thisQR code or verifying your face</div>
                    </div>
                </div>
            </div>
        </div>
    )
}