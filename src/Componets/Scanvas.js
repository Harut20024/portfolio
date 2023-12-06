import React, { useRef, useEffect } from 'react';

const Sketch = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.height = window.innerHeight * 2;
        canvas.width = window.innerWidth;

        let scrollY = 0;

        const drawCanvas = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); 

            ctx.fillStyle = '#0b0c10';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Drawing the welcome text
            ctx.fillStyle = '#65e7e0';
            ctx.font = "90px serif";
            const welcomeText = "Welcome";
            let textWidth = ctx.measureText(welcomeText).width;
            let textX = (canvas.width / 2) - (textWidth / 2);
            let textY = canvas.height / 4;
            ctx.fillText(welcomeText, textX, textY);

            const portfolioText = "to My Portfolio";
            ctx.font = "32px serif";
            textWidth = ctx.measureText(portfolioText).width;
            textX = (canvas.width / 2) - (textWidth / 2);
            textY += 50; 
            ctx.fillText(portfolioText, textX, textY);

            const scrollText = "↓ Scroll Down to Discover More ↓";
            ctx.font = "32px serif";
            textWidth = ctx.measureText(scrollText).width;
            textX = (canvas.width / 2) - (textWidth / 2);
            textY += 60; 
            ctx.fillText(scrollText, textX, textY);

            const startX = canvas.width / 2;
            const startY = textY + 20; 

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(startX, startY + scrollY); 
            ctx.strokeStyle = "#3f8a89";
            ctx.lineWidth = 2;
            ctx.stroke();
        };

        const handleScroll = () => {
            scrollY = window.scrollY; 
            drawCanvas(); 
        };

        window.addEventListener('scroll', handleScroll);

        drawCanvas(); // Initial canvas drawing

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup
        };
    }, []);

    return (
        <div style={{ position: 'relative', height: '200vh' }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Sketch;
