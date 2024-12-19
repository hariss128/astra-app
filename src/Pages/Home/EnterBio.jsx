import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EnterBio() {
    const [inputValue, setInputValue] = useState(""); // State to track input value
    const [reEnterInputValue, setReEnterInputValue] = useState(""); // State to track re-enter input value
    const navigate = useNavigate(); // Hook to handle navigation

    // Handle Continue button click
    const handleContinue = () => {
        if (inputValue.trim() && reEnterInputValue.trim() !== "") { // Check if input is not empty or only whitespace
            navigate("/permission"); // Navigate to VerifyEmail page
        } else {
            alert("Please enter a valid input."); // Show an alert if input is empty
        }
    };

    return (
        <div className="enterBioContainer">
            <Link to="/verifyemail" className="myLink">
                <div className="leftArrow">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            </Link>
            <div className="enterBioContainerOuter">
                <div className="enterBioContainerInner">
                    <div className="headingContainerMain">
                        <div className="headingcontainer">
                            <div className="mainHeading">
                                Let’s get to know you better!
                            </div>
                            <div className="mainSubHeading">
                                Set a password to your secure profile.
                            </div>
                        </div>
                    </div>
                    <div className="passwordContainer">
                        <div className="passwordContainerInner">
                            <div className="password">
                                Password
                            </div>
                            <div className="passwordInput">
                                <input type="text" className="passwordInputField" placeholder="Enter your password" 
                                value={inputValue} // Bind input value to state
                                onChange={(e) => setInputValue(e.target.value)} // Update state on input change
                                />
                            </div>
                        </div>
                        <div className="reEnterPasswordContainerInner">
                            <div className="password">
                                Re-enter Password
                            </div>
                            <div className="reEnterPasswordInput">
                                <input type="text" className="reEnterPasswordInputField" placeholder="Re-enter your password" 
                                value={reEnterInputValue} // Bind input value to state
                                onChange={(e) => setReEnterInputValue(e.target.value)} // Update state on input change
                                />
                            </div>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" className="checkBox" />
                            <div className="checkBoxText">
                                Show Password
                            </div>
                        </div>
                        <div className="createAccountButtonContainer">
                            <button className="createAccountButton" onClick={handleContinue}>Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/login" className="myLink">
                <div className="enterBioContainerBottom">
                    <button className="buttonBack">
                        Back to login
                    </button>
                </div>
            </Link>
        </div>
    )
}