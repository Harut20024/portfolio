import React, { useRef, useEffect } from 'react';

const Sketch = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.height = window.innerHeight * 2;
        canvas.width = window.innerWidth;

        let scrollY = 0;
        const baseCanvasWidth = 800; 
        const scaleFactor = canvas.width / baseCanvasWidth;

        const drawCanvas = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
        
            ctx.fillStyle = '#0b0c10';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        
            let textY = canvas.height / 5;
        
            // Drawing the welcome text
            ctx.fillStyle = '#65e7e0';
            ctx.font = `${60 * scaleFactor}px serif`; 
            drawTextCentered(ctx, "Welcome", canvas.width / 2, textY);
            textY += scaleFactor; 
        
            // Drawing the "to My Portfolio" text
            ctx.font = `${22 * scaleFactor}px serif`; 
            drawTextCentered(ctx, "to My Portfolio", canvas.width / 2, textY + 50 * scaleFactor);
            textY += 30 * scaleFactor; 
        
            // Drawing the "↓ Scroll Down to Discover More ↓" text
            ctx.font = `${22 * scaleFactor}px serif`; 
            drawTextCentered(ctx, "↓ Scroll Down to Discover More ↓", canvas.width / 2, textY + 60 * scaleFactor);
            textY += 60 * scaleFactor; // Increment textY
        
            // Drawing line
            const startX = canvas.width / 2;
            ctx.beginPath();
            ctx.moveTo(startX, textY + 20); // Starting position of the line
            ctx.lineTo(startX, textY + 20 + scrollY); 
            ctx.strokeStyle = "#3f8a89";
            ctx.lineWidth = 2;
            ctx.stroke();
        };
        
        const drawTextCentered = (ctx, text, x, y) => {
            let textWidth = ctx.measureText(text).width;
            let textX = x - (textWidth / 2);
            ctx.fillText(text, textX, y);
        };
        const handleScroll = () => {
            scrollY = window.scrollY; 
            drawCanvas(); 
        };

        window.addEventListener('scroll', handleScroll);

        drawCanvas(); 

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, []);

    return (
        <div style={{ position: 'relative', height: '200vh' }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Sketch;
