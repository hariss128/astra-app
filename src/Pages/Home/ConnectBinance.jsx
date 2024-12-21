import { Link } from "react-router-dom";

export default function ConnectBinance() {
    return (
        <div className="connectBinanceContainer">
            <div className="connectBinanceInner">
                <div className="pictureContainer">
                    <img src="/imgs/connectWalletBinance.png" alt="Binance" className="binanceImage" />
                </div>
                <div className="textContainer">
                    <div className="text">Connect To Platforms</div>
                    <div className="subtext">Select a platform to connect to</div>
                </div>
            </div>
            <div className="inputContainer">
                <Link to="/partnerconnect" className="myLinkBinance">
                    <div className="input">
                        <div className="binanceContainer">
                            <img src="/imgs/binanceYellow.png" alt="Binance" className="binanceImageFirst" />
                            <div className="inputField">Binance</div>
                        </div>
                        <div className="dropdown">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </Link>
                <div className="input">
                    <div className="binanceContainer">
                        <img src="/imgs/cImage.png" alt="Binance" className="binanceImage" />
                        <div className="inputField">Coinbase</div>
                    </div>
                    <div className="dropdown">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div className="input">
                    <div className="binanceContainer">
                        <img src="/imgs/kImage.png" alt="Binance" className="binanceImage" />
                        <div className="inputField">Kraken</div>
                    </div>
                    <div className="dropdown">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}