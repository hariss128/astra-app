import { Link } from "react-router-dom";

export default function DocumentScan() {
    return (
        <div
        className="documentScanContainer"
        style={{
            backgroundImage: "url('/imgs/documentScanImage.png')",
            backgroundSize: '278%',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh',
            padding: '0rem 1rem'
        }}
        >
            <Link to="/documentvalidation" className="myLinkDocumentScan">
                <div className="buttonContainer">
                    <button className="button">Scan Document</button>
                </div>
            </Link>

        </div>
    );
}