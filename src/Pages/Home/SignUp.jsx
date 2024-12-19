import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const [inputValue, setInputValue] = useState(""); // State to track input value
    const navigate = useNavigate(); // Hook to handle navigation

    // Handle Continue button click
    const handleContinue = () => {
        if (inputValue.trim() !== "") { // Check if input is not empty or only whitespace
            navigate("/verifyemail"); // Navigate to VerifyEmail page
        } else {
            alert("Please enter a valid input."); // Show an alert if input is empty
        }
    };
    
    return (
        <div className="signUpContainer">
            <div className="buttonsContainerMain">
                <div className="buttonsContainer">
                    <Link to="/login">
                        <div className="signInButton">
                            <button className="buttonSignIn">Sign In</button>
                        </div>
                    </Link>
                    <div className="signUpButton">
                        <button className="buttonSignUp">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="headingAndEmailContainer">
                <div className="headingContainerMain">
                    <div className="headingcontainer">
                        <div className="mainHeading">
                            Join Us & Secure Your Digital 
                            Identity
                        </div>
                        <div className="mainSubHeading">
                            Create your account to tokenise your ID
                        </div>
                    </div>
                </div>
                <div className="emailMainContainer">
                    <div className="emailContainer">
                        <div className="email">Email</div>
                        <div className="emailInput">
                            <input type="email" placeholder="Enter your email" className="emailInputField" 
                            value={inputValue} // Bind input value to state
                            onChange={(e) => setInputValue(e.target.value)} // Update state on input change
                            />
                        </div>
                        <div className="emailButton">
                            <button className="emailButton" onClick={handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}