import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const [inputValue, setInputValue] = useState(""); // State to track input value
    const [error, setError] = useState(""); // State to track validation error
    const navigate = useNavigate(); // Hook to handle navigation

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    // Handle Continue button click
    const handleContinue = async () => {
        if (inputValue.trim() === "") {
            setError("Please enter your email address");
            return;
        }
        
        if (!validateEmail(inputValue)) {
            setError("Please enter a valid email address");
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/users/request-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: inputValue })
            });

            if (!response.ok) {
                throw new Error('Failed to send verification email');
            }

            setError(""); // Clear any errors
            navigate("/verifyemail", { state: { email: inputValue } });
        } catch (err) {
            setError("Failed to send verification email. Please try again.");
            console.error('Error:', err);
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
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className={`emailInputField ${error ? 'error' : ''}`}
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    setError(""); // Clear error when user types
                                }}
                                style={{
                                    border: error ? '1px solid #ff0000' : 'none',
                                    marginBottom: error ? '4px' : '0'
                                }}
                            />
                        </div>
                        {error && (
                            <div style={{
                                color: '#ff0000',
                                fontSize: '12px',
                                padding: '8px',
                                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                borderRadius: '4px',
                                marginBottom: '12px',
                                width: '100%'
                            }}>
                                {error}
                            </div>
                        )}
                        <div className="emailButton">
                            <button className="emailButton" onClick={handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}