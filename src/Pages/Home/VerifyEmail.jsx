import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);
    const [error, setError] = useState('');
    const location = useLocation();
    const userEmail = location.state?.email || "your email";

    const handleInputChange = (index, value) => {
        if (value.match(/^[0-9]$/) || value === '') {
            const newCode = [...verificationCode];
            newCode[index] = value;
            setVerificationCode(newCode);
            setError(''); // Clear error when user types

            // Auto-focus next input
            if (value !== '' && index < 4) {
                const nextInput = document.querySelector(`input[name="code-${index + 1}"]`);
                if (nextInput) nextInput.focus();
            }
        }
    };

    const handleVerify = () => {
        if (verificationCode.some(digit => digit === '')) {
            setError('Please enter the complete verification code');
            return;
        }
        // If code is complete, proceed with verification
        window.location.href = '/enterbio';
    };

    return (
        <div className="verifyEmailContainer">
            <Link to="/signup" className="myLink">
                <div className="leftArrow">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            </Link>
            <div className="verifyEmailContainerOuter">
                <div className="verifyEmailContainerInner">
                    <div className="headingContainerMain">
                        <div className="headingcontainer">
                            <div className="mainHeading">
                                Verify Your Email to Get 
                                Started
                            </div>
                            <div className="mainSubHeading">
                            Check your inbox for a verification email. We 
                            sent this on <span className="subHeadingEmail"> {userEmail}</span>
                            </div>
                        </div>
                    </div>
                    <div className="verifyEmailBoxesContainer">
                        <div className="verifyBoxes">
                            {verificationCode.map((digit, index) => (
                                <div className="verifyBox" key={index}>
                                    <input
                                        type="text"
                                        maxLength="1"
                                        name={`code-${index}`}
                                        value={digit}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            textAlign: 'center',
                                            border: error ? '1px solid #FFD700' : 'none',
                                            background: 'transparent',
                                            color: 'white',
                                            fontSize: 'inherit'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        {error && (
                            <div style={{
                                color: '#FFD700',
                                fontSize: '12px',
                                padding: '8px',
                                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                                borderRadius: '4px',
                                marginTop: '8px',
                                width: '100%',
                                textAlign: 'center'
                            }}>
                                {error}
                            </div>
                        )}
                        <div className="verifyButtonContainer">
                            <button className="verifyButton" onClick={handleVerify}>
                                Verify Account
                            </button>
                        </div>
                        <div className="resendButtonContainer">
                            <button className="resendButton">
                                Resend Email
                            </button>
                        </div>
                    </div>
                </div>
                <div className="verifyEmailContainerBottom">
                    <Link to="/login" className="myLink">
                        <button className="buttonBack">
                            Back to login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}