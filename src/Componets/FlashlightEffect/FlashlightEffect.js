import React, { useState } from 'react';

const FlashlightEffect = () => {
    const [lightPosition, setLightPosition] = useState({ x: window.innerWidth / 2.5, y: 0 });
    const [userName, setUserName] = useState('');

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setLightPosition({ x, y });
    };

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <input
                type="text"
                placeholder="Please write your name`"
                onChange={handleNameChange}
                style={{ padding: '10px', fontSize: '16px', MozMarginEnd: '20px' }}
            />

            <div
                onMouseMove={handleMouseMove}
                style={{
                    margin: "auto",
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 10,
                    border: '1px solid black',
                    borderRadius: '60px',
                    color: 'black',
                    padding: '20px',
                    fontSize: '20px',
                    backgroundColor: '#F9EEDC',
                    marginTop: '20px',
                    height: '400px'
                }}
            >
                {userName && (
                    <div style={{ marginTop: '20px' }}>
                        <h1>Welcome {userName} to my website!</h1>
                        <br />
                        <h3>Let me show you more about me and my works</h3>
                        <br />
                        <h3>So let's start</h3>
                    </div>
                )}

                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `radial-gradient(circle at ${lightPosition.x}px ${lightPosition.y}px, rgba(255, 255, 255, 0.8) 100px, #161820 200px)`,
                        pointerEvents: 'none',
                    }}
                />
            </div>
        </div>
    );
};

export default FlashlightEffect;
