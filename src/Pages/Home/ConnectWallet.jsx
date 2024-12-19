import { Link } from "react-router-dom";

export default function ConnectWallet() {
    return (
        <div className="connectWalletContainer">
            <div className="connectWalletContainerMain">
                <div className="connectWalletImageContainer">
                    <img src="/imgs/connectWalletImage.png" alt="Connect Wallet" className="connectWalletImage" />
                </div>
                <div className="connectWalletTextContainer">
                    <div className="connectWalletTextHeading">
                        Choose Payment Method
                    </div>
                    <div className="connectWalletTextDescription">
                        Select your payment method
                    </div>
                </div>
                <div className="connectWalletButtonContainer">
                    <Link to="/walletconnected" className="myLinkConnectWallet">
                        <div className="buttonContainer">
                            <button className="button">Connect Crypto Wallet</button>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </Link>
                    <div className="buttonContainer">
                        <button className="button">Pay By Card</button>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}