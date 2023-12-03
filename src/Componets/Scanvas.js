import React, { useRef, useEffect } from 'react';

const Sketch = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.height = window.innerHeight * 2;

        if (ctx) {
            ctx.fillStyle = '#0b0c10';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#65e7e0';

            const welcomeText = "Welcome";
            ctx.font = "90px serif";
            let textWidth = ctx.measureText(welcomeText).width;
            let textX = (canvas.width / 2) - (textWidth / 2);
            let textY = canvas.height / 4;
            ctx.fillText(welcomeText, textX, textY);

            const portfolioText = "to My Portfolio";
            ctx.font = "32px serif"; // Smaller than 'Welcome'
            textWidth = ctx.measureText(portfolioText).width;
            textX = (canvas.width / 2) - (textWidth / 2);
            textY += 50; // Spacing below 'Welcome'
            ctx.fillText(portfolioText, textX, textY);

            const scrollText = "↓ Scroll Down to Discover More ↓";
            ctx.font = "32px serif"; // Same size as 'to My Portfolio'
            textWidth = ctx.measureText(scrollText).width;
            textX = (canvas.width / 2) - (textWidth / 2);
            textY += 60; // Spacing below 'to My Portfolio'
            ctx.fillText(scrollText, textX, textY);

            const startX = canvas.width / 2;
            const startY = textY + 20;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            
            ctx.bezierCurveTo(startX, startY + 100, startX - 50, startY + 150, startX, startY + 300);
            ctx.bezierCurveTo(startX, startY + 450, startX + 50, startY + 300, startX, startY + 300);
            ctx.bezierCurveTo(startX - 50, startY + 300, startX - 50, startY + 210, startX, startY + 600);
            
            ctx.lineTo(startX, canvas.height);
            
            ctx.strokeStyle = "#3f8a89";
            ctx.lineWidth = 2;
            
            ctx.stroke();
        }
    }, []);

    return (
        <div style={{ position: 'relative', height: window.innerHeight * 2 }}>
            <canvas ref={canvasRef} width={window.innerWidth} />
        </div>
    );
};

export default Sketch;
