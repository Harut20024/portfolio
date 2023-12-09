import React, { useState, useEffect } from 'react';

const SmileyFace = () => {
    const [eyePosition, setEyePosition] = useState({ leftEye: { x: 0, y: 0 }, rightEye: { x: 0, y: 0 } });
    const [isHappy, setIsHappy] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const face = document.getElementById('face');
            const faceRect = face.getBoundingClientRect();
            const faceCenterX = faceRect.left + faceRect.width / 2;
            const faceCenterY = faceRect.top + faceRect.height / 2;
            const eyeDistance = 15;

            const angle = Math.atan2(e.clientY - faceCenterY, e.clientX - faceCenterX);

            setEyePosition({
                leftEye: {
                    x: Math.cos(angle) * eyeDistance,
                    y: Math.sin(angle) * eyeDistance
                },
                rightEye: {
                    x: Math.cos(angle) * eyeDistance,
                    y: Math.sin(angle) * eyeDistance
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleMouseEnter = () => setIsHappy(true);
    const handleMouseLeave = () => setIsHappy(false);

    const cheekStyle = (side) => ({
        position: 'absolute',
        bottom: '40px',
        [side]: '10px',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: isHappy ? 'rgba(255, 0, 0, 0.7)' : 'transparent',
        transition: 'all 0.3s ease'
    });

    const mouthStyle = {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px', // Increased width for a wider smile
        height: '30px', // Increased height for a more curved smile
        backgroundColor: 'transparent',
        borderBottom: isHappy ? '4px solid black' : 'none', // Made the line thicker
        borderRadius: isHappy ? '30px' : '0', // Increased curvature when happy
        transition: 'all 0.3s ease'
    };

    return (
        <div style={{ height: '200px', width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
                id="face"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative', fontSize: '40px', width: '150px', height: '150px', lineHeight: '150px', textAlign: 'center', borderRadius: '50%', backgroundColor: 'yellow', transition: 'all 0.3s ease' }}
            >
                <div style={{
                    position: 'absolute',
                    left: '40px',
                    top: '55px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'black',
                    transform: `translate(${eyePosition.leftEye.x}px, ${eyePosition.leftEye.y}px)`
                }}></div>
                <div style={{
                    position: 'absolute',
                    right: '40px',
                    top: '55px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'black',
                    transform: `translate(${eyePosition.rightEye.x}px, ${eyePosition.rightEye.y}px)`
                }}></div>
                <div style={mouthStyle}></div>
                <div style={cheekStyle('left')}></div>
                <div style={cheekStyle('right')}></div>
            </div>
        </div>
    );
};

export default SmileyFace;
