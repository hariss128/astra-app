import React from 'react';

export default function FaceRecognition() {
    return (
        <div
            className="faceRecognitionContainer"
            style={{
                backgroundImage: `url('/imgs/recognitionImage.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100%',
            }}
        >
            <div className="contentContainer">
                <div className="textContainer">
                    <div className="text">
                        Take a photo of yourself to get started.
                        Astra will instantly analyze your image
                        and build your profile.
                    </div>
                </div>
                <div className="arrowContainer">
                    <div className="arrowtop">
                        <img src="/imgs/upleft.png" alt="topleft" className="arrow" />
                        <img src="/imgs/upright.png" alt="topright" className="arrow" />
                    </div>
                    <div className="arrowbottom">
                        <img src="/imgs/downleft.png" alt="bottomleft" className="arrow" />
                        <img src="/imgs/downright.png" alt="bottomright" className="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
}