import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from '../../context/UserContext';

export default function SignUp() {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const [serverResponse, setServerResponse] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const userEmail = location.state?.email || "your email";
    const { updateUserData } = useContext(UserContext);

    const handleInputChange = (index, value) => {
        if (value.match(/^[0-9]$/) || value === '') {
            const newCode = [...verificationCode];
            newCode[index] = value;
            setVerificationCode(newCode);
            setError(''); // Clear error when user types

            // Auto-focus next input
            if (value !== '' && index < 5) {
                const nextInput = document.querySelector(`input[name="code-${index + 1}"]`);
                if (nextInput) nextInput.focus();
            }
        }
    };

    const handleVerify = async () => {
        if (verificationCode.some(digit => digit === '')) {
            setError('Please enter the complete verification code');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/users/verify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userEmail,
                    code: verificationCode.join('')
                })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Verification failed');
                setServerResponse(data.message || 'Verification failed');
                return;
            }

            // Store the registration token
            localStorage.setItem('registrationToken', data.registrationToken);
            
            // Update user data with email
            updateUserData({ email: userEmail });
            
            setServerResponse('Email verified successfully!');
            setTimeout(() => {
                navigate('/enterbio');
            }, 1500);

        } catch (err) {
            setError('Failed to verify email. Please try again.');
            setServerResponse('Failed to verify email. Please try again.');
            console.error('Error:', err);
        }
    };

    const handleResendEmail = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/users/request-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail })
            });

            if (!response.ok) {
                throw new Error('Failed to resend verification email');
            }

            setServerResponse('New verification code sent to your email!');
            setVerificationCode(['', '', '', '', '', '']); // Reset verification code input
            setError('');
        } catch (err) {
            setError('Failed to resend verification email. Please try again.');
            console.error('Error:', err);
        }
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
                        {serverResponse && (
                            <div style={{
                                color: serverResponse.includes('success') ? '#00FF00' : '#FFD700',
                                fontSize: '12px',
                                padding: '8px',
                                backgroundColor: serverResponse.includes('success') ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 215, 0, 0.1)',
                                borderRadius: '4px',
                                marginTop: '8px',
                                width: '100%',
                                textAlign: 'center'
                            }}>
                                {serverResponse}
                            </div>
                        )}
                        <div className="verifyButtonContainer">
                            <button className="verifyButton" onClick={handleVerify}>
                                Verify Account
                            </button>
                        </div>
                        <div className="resendButtonContainer">
                            <button className="resendButton" onClick={handleResendEmail}>
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