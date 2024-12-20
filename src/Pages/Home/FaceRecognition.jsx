import React, { useEffect, useRef, useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import * as faceapi from 'face-api.js';

export default function FaceRecognition() {
    const { updateUserData, userData } = useContext(UserContext);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [isGoodAngle, setIsGoodAngle] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadModels = async () => {
            try {
                setIsLoading(true);
                // Load models from public folder
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
                    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                ]);
                startVideo();
            } catch (error) {
                console.error('Error loading models:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadModels();

        return () => {
            if (webcamRef.current && webcamRef.current.srcObject) {
                const tracks = webcamRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    const startVideo = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcamRef.current.srcObject = stream;
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    };

    const onPlay = async () => {
        if (webcamRef.current && webcamRef.current.readyState === 4) {
            const detection = await faceapi.detectSingleFace(
                webcamRef.current,
                new faceapi.TinyFaceDetectorOptions()
            );

            if (detection) {
                const dimensions = {
                    width: webcamRef.current.videoWidth,
                    height: webcamRef.current.videoHeight
                };

                // Check if face is centered and at a good size
                const isCentered = detection.box.x > dimensions.width * 0.3 && 
                                 detection.box.x < dimensions.width * 0.7;
                const isGoodSize = detection.box.width > dimensions.width * 0.4;

                if (isCentered && isGoodSize) {
                    setIsGoodAngle(true);
                    captureImage();
                } else {
                    setIsGoodAngle(false);
                }
            }

            requestAnimationFrame(onPlay);
        }
    };

    const captureImage = async () => {
        if (webcamRef.current && isGoodAngle) {
            const canvas = document.createElement('canvas');
            canvas.width = webcamRef.current.videoWidth;
            canvas.height = webcamRef.current.videoHeight;
            canvas.getContext('2d').drawImage(webcamRef.current, 0, 0);
            
            const imageData = canvas.toDataURL('image/jpeg');
            await updateUserData({
                ...userData,
                faceImage: imageData
            });
        }
    };

    return (
        <div className="faceRecognitionContainer">
            <div className="contentContainer">
                <div className="textContainer">
                    <div className="text">
                        {isLoading ? 'Loading face detection...' : 
                         'Position your face in the center of the frame.'}
                    </div>
                </div>
                
                <div className="webcamContainer">
                    <video
                        ref={webcamRef}
                        style={{ width: '100%', maxWidth: '640px' }}
                        autoPlay
                        playsInline
                        onPlay={onPlay}
                    />
                    <canvas 
                        ref={canvasRef} 
                        style={{ display: 'none' }} 
                    />
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