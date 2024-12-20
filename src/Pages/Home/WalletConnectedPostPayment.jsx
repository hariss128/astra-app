import { Link } from "react-router-dom";

export default function WalletConnectedPostPayment() {
    return (
        <div className="walletConnectedPostPaymentContainer">
            <div className="walletConnectedPostPaymentContainerOuter">
                <div className="walletConnectedPostPaymentContainerMain">
                    <div className="walletConnectedPostPaymentImageContainer">
                        <img src="/imgs/walletConnectedImage.png" alt="Wallet Connected Post Payment" className="walletConnectedPostPaymentImage" />
                    </div>
                    <div className="walletConnectedPostPaymentTextContainer">
                        Thank You
                    </div>
                    <div className="walletConnectedPostPaymentHeadingContainer">
                        <div className="walletConnectedPostPaymentHeading">
                            Payment Successful
                        </div>
                        <div className="walletConnectedPostPaymentDescription">
                            Let’s finalize your profile for instant KYC
                        </div>
                    </div>
                </div>
                <Link to="/homeastra" className="myLinkWalletConnectedPostPayment">
                    <div className="walletConnectedPostPaymentButtonContainer">
                        <button className="walletConnectedPostPaymentButton">
                            Complete My Profile
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}