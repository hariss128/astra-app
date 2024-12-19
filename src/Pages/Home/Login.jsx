import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    const [inputValue, setInputValue] = useState(""); // State to track input value
    const [passwordInputValue, setpasswordInputValue] = useState(""); // State to track re-enter input value
    const navigate = useNavigate(); // Hook to handle navigation

    // Handle Continue button click
    const handleContinue = () => {
        if (inputValue.trim() && passwordInputValue.trim() !== "") { // Check if input is not empty or only whitespace
            navigate("/homeastra"); // Navigate to VerifyEmail page
        } else {
            alert("Please enter a valid input."); // Show an alert if input is empty
        }
    };

    return (
        <div className="loginContainer">
            <div className="buttonsContainerMain">
                <div className="buttonsContainer">
                    <div className="signInButton">
                        <button className="buttonSignIn">Sign In</button>
                    </div>
                    <Link to="/signup">
                        <div className="signUpButton">
                            <button className="buttonSignUp">Sign Up</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="headingAndEmailContainer">
                <div className="headingContainerMain">
                    <div className="headingcontainer">
                        <div className="mainHeading">
                            Access your secure identity with ease.
                        </div>
                        <div className="mainSubHeading">
                            Enter your credentials to securely access your 
                            account and stay in control of your tokenized data
                        </div>
                    </div>
                </div>
                <div className="emailMainContainer">
                    <div className="emailContainer">
                        <div className="Container">
                            <div className="email">Email</div>
                            <div className="emailInput">
                                <input type="email" placeholder="Enter your email" className="emailInputField" 
                                value={inputValue} // Bind input value to state
                                onChange={(e) => setInputValue(e.target.value)} // Update state on input change
                                />
                            </div>
                        </div>
                        <div className="Container">
                            <div className="password">Password</div>
                            <div className="passwordInput">
                                <input type="password" placeholder="Enter your password" className="passwordInputField" 
                                value={passwordInputValue} // Bind input value to state
                                onChange={(e) => setpasswordInputValue(e.target.value)} // Update state on input change
                                />
                                <i className="fa-solid fa-eye"></i>
                            </div>
                        </div>
                        <div className="emailButton">
                            <button className="emailButton" onClick={handleContinue}>Log In</button>
                        </div>
                        <div className="forgotPassword">
                            <a href="/forgot-password">Forgot Your Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}