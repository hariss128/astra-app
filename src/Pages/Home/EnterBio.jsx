import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EnterBio() {
    const [inputValue, setInputValue] = useState(""); // State to track input value
    const [reEnterInputValue, setReEnterInputValue] = useState(""); // State to track re-enter input value
    const [showPassword, setShowPassword] = useState(false); // State to track password visibility
    const [error, setError] = useState(""); // State to track password match error
    const navigate = useNavigate(); // Hook to handle navigation

    // Handle Continue button click
    const handleContinue = () => {
        if (inputValue.trim() === "" || reEnterInputValue.trim() === "") {
            setError("Please enter both passwords");
            return;
        }

        if (inputValue !== reEnterInputValue) {
            setError("Passwords do not match");
            return;
        }

        setError(""); // Clear any errors
        navigate("/permission");
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
                                Let's get to know you better!
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
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className="passwordInputField" 
                                    placeholder="Enter your password" 
                                    value={inputValue}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                        setError("");
                                    }}
                                />
                            </div>
                        </div>
                        <div className="reEnterPasswordContainerInner">
                            <div className="password">
                                Re-enter Password
                            </div>
                            <div className="reEnterPasswordInput">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className="reEnterPasswordInputField" 
                                    placeholder="Re-enter your password" 
                                    value={reEnterInputValue}
                                    onChange={(e) => {
                                        setReEnterInputValue(e.target.value);
                                        setError("");
                                    }}
                                />
                            </div>
                        </div>
                        <div className="checkBoxContainer">
                            <input 
                                type="checkbox" 
                                className="checkBox"
                                checked={showPassword}
                                onChange={(e) => setShowPassword(e.target.checked)}
                            />
                            <div className="checkBoxText">
                                Show Password
                            </div>
                        </div>
                        {error && (
                            <div style={{
                                color: '#ff0000',
                                fontSize: '12px',
                                padding: '8px',
                                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                borderRadius: '4px',
                                marginBottom: '12px',
                                width: '100%',
                                textAlign: 'center'
                            }}>
                                {error}
                            </div>
                        )}
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