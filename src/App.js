import './App.css';
import React from 'react';
import Home from './Pages/Home/Homescreen';
import SignUp from './Pages/Home/SignUp';
import VerifyEmail from './Pages/Home/VerifyEmail';
import EnterBio from './Pages/Home/EnterBio';
import Permission from './Pages/Home/Permission';
import FaceRecognition from './Pages/Home/FaceRecognition.jsx';
import CreatingProfile from './Pages/Home/CreatingProfile.jsx';
import ProfileCreated from './Pages/Home/ProfileCreated.jsx';
import EditProfile from './Pages/Home/EditProfile.jsx';
import UnlockProfile from './Pages/Home/UnlockProfile.jsx';
import ConnectWallet from './Pages/Home/ConnectWallet.jsx';
import WalletConnected from './Pages/Home/WalletConnected.jsx';
import Login from './Pages/Home/Login.jsx';
import WalletConnectedPostPayment from './Pages/Home/WalletConnectedPostPayment.jsx';
import Document from './Pages/Home/Document.jsx';
import DocumentScan from './Pages/Home/DocumentScan.jsx';
import DocumentValidation from './Pages/Home/DocumentValidation.jsx';
import IdUpdated from './Pages/Home/IdUpdated.jsx';
import IdTokenized from './Pages/Home/IdTokenized.jsx';
import Tokenizing from './Pages/Home/Tokenizing.jsx';
import TokenReady from './Pages/Home/TokenReady.jsx';
import AstraGuide from './Pages/Home/AstraGuide.jsx';
import QrInstruct from './Pages/Home/QrInstruct.jsx';
import HomeAstra from './Pages/Home/HomeAstra.jsx';
import ManageData from './Pages/Home/ManageData.jsx';
import DeleteAccount from './Pages/Home/DeleteAccount.jsx';
import ViewProfile from './Pages/Home/ViewProfile.jsx';
import ConnectedPlatforms from './Pages/Home/ConnectedPlatforms.jsx';
import ConnectBinance from './Pages/Home/ConnectBinance.jsx';
import PartnerConnect from './Pages/Home/PartnerConnect.jsx';
import LoggedIn from './Pages/Home/LoggedIn.jsx';
import WelcomeBack from './Pages/Home/WelcomeBack.jsx';
import ReferralOne from './Pages/Home/ReferralOne.jsx';
import ReferralTwo from './Pages/Home/ReferralTwo.jsx';
import ReferralThree from './Pages/Home/ReferralThree.jsx';
import Carid from './Pages/Home/Carid.jsx';
import ViewDocument from './Pages/Home/ViewDocument.jsx';
import DocumentAuthenticity from './Pages/Home/DocumentAuthenticity.jsx';
import UpdatingProfile from './Pages/Home/UpdatingProfile.jsx';
import CreatingToken from './Pages/Home/CreatingToken.jsx';
import SecuringToken from './Pages/Home/SecuringToken.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  React.useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/enterbio" element={<EnterBio />} />
          <Route path="/permission" element={<Permission />} />
          <Route path="/facerecognition" element={<FaceRecognition />} />
          <Route path="/creatingprofile" element={<CreatingProfile />} />
          <Route path="/profilecreated" element={<ProfileCreated />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/unlockprofile" element={<UnlockProfile />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />
          <Route path="/walletconnected" element={<WalletConnected />} />
          <Route path="/walletconnectedpostpayment" element={<WalletConnectedPostPayment />} />
          <Route path="/document" element={<Document />} />
          <Route path="/documentscan" element={<DocumentScan />} />
          <Route path="/documentvalidation" element={<DocumentValidation />} />
          <Route path="/documentauthenticity" element={<DocumentAuthenticity />} />
          <Route path="/updatingprofile" element={<UpdatingProfile />} />
          <Route path="/idupdated" element={<IdUpdated />} />
          <Route path="/idtokenized" element={<IdTokenized />} />
          <Route path="/tokenizing" element={<Tokenizing />} />
          <Route path="/creatingtoken" element={<CreatingToken />} />
          <Route path="/securingtoken" element={<SecuringToken />} />
          <Route path="/tokenready" element={<TokenReady />} />
          <Route path="/astraguide" element={<AstraGuide />} />
          <Route path="/homeastra" element={<HomeAstra />} />
          <Route path="/qrinstruct" element={<QrInstruct />} />
          <Route path="/managedata" element={<ManageData />} />
          <Route path="/deleteaccount" element={<DeleteAccount />} />
          <Route path="/viewdocument" element={<ViewDocument />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/connectedplatforms" element={<ConnectedPlatforms />} />
          <Route path="/connectbinance" element={<ConnectBinance />} />
          <Route path="/partnerconnect" element={<PartnerConnect />} />
          <Route path="/loggedin" element={<LoggedIn />} />
          <Route path="/welcomeback" element={<WelcomeBack />} />
          <Route path="/referralone" element={<ReferralOne />} />
          <Route path="/referraltwo" element={<ReferralTwo />} />
          <Route path="/referralthree" element={<ReferralThree />} />
          <Route path="/carid" element={<Carid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;