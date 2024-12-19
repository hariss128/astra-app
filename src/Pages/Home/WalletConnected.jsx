import { Link } from "react-router-dom";

export default function WalletConnected() {
  return (
    <div className="walletConnectedContainer">
      <div className="walletConnectedContainerMain">
        <div className="walletConnectedImageContainer">
            <img src="/imgs/walletConnectedImage.png" alt="Wallet Connected" className="walletConnectedImage" />
        </div>
        <div className="walletConnectedTextContainer">
            <div className="walletConnectedTextHeading">
                Your Phantom Wallet is Connected
            </div>
            <div className="walletConnectedTextDescription">
                You're ready to tokenize your ID!
            </div>
        </div>
        <div className="walletAddressContainer">
            <div className="ContainerMain">
                <div className="Heading">
                    Wallet Address
                </div>
                <div className="subHeading">
                    0x1234...5678
                </div>
            </div>
            <div className="ContainerMain">
                <div className="Heading">
                    Current Balance
                </div>
                <div className="subHeading">
                    3.5 SOL
                </div>
            </div>
        </div>
        <div className="walletConnectedButtonContainer">
            <Link to="/walletconnectedpostpayment" className="myLinkWalletConnected">
                <div className="buttonContainer">
                    <button className="button">
                        Continue
                    </button>
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}