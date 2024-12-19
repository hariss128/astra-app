import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Permission() {
    const [isChecked, setIsChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleProceedClick = () => {
        if (isChecked) {
            setShowModal(true);
        } else {
            window.alert('Please agree to the terms before proceeding.');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="permissionContainer">
            <div className="mainImage">
                <img src="/imgs/permissionImage.png" alt="mainImage" className="image" />
            </div>
            <div className="permissionContainerOuter">
                <div className="headingContainerMain">
                    <div className="mainHeading">
                        Astra Needs Your Permission to Work Its Magic
                    </div>
                    <div className="subheadingcontainer">
                        <div className="mainSubHeading">
                            To provide you with the best experience, Astra 
                            needs access to your camera and permission to 
                            capture and process your image and document 
                            data. This data will only be used to build your 
                            profile and verify your identity securely.
                        </div>
                    </div>
                </div>
                <div className="checkBoxContainer">
                    <input 
                        type="checkbox" 
                        className="checkBox" 
                        id="permissionCheckbox" 
                        checked={isChecked} 
                        onChange={handleCheckboxChange} 
                    />
                    <div className="checkBoxText">
                        I agree to grant camera access and process 
                        my data as described.
                    </div>
                </div>
                <div className="buttonContainer">
                    <div className="proceedButtonContainer">
                        <button 
                            className="buttonProceed" 
                            id="proceedButton" 
                            style={{ color: isChecked ? '#212529' : '#66737F' }}
                            onClick={handleProceedClick}
                        >
                            Proceed
                        </button>
                    </div>
                    <Link to="/enterbio" className="myLinkPermission">
                        <div className="cancelButtonContainer">
                            <button className="buttonCancel">Cancel</button>
                        </div>
                    </Link>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modalContent">
                        <p>"Astra" would like to access the camera</p>
                        <Link to="/facerecognition" className="myLinkAllow">
                            <button onClick={handleCloseModal}>Allow</button>
                        </Link>
                        <button onClick={handleCloseModal}>Don't Allow</button>
                    </div>
                </div>
            )}
        </div>
    );
}