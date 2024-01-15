import React, { useRef, useEffect } from "react";

const Sketch = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight * 1.2;
    canvas.width = window.innerWidth;

    let scrollY = 0;
    const baseCanvasWidth = 800;
    const scaleFactor = Math.min(canvas.width / baseCanvasWidth, 1);

    const drawCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0b0c10";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let textY = canvas.height / 5;

      // Text sizes with a maximum limit
      const primaryFontSize = Math.min(Math.max(40, 80 * scaleFactor), 85); 
      const secondaryFontSize = Math.min(Math.max(12, 32 * scaleFactor), 24); 

      // Drawing the welcome text
      ctx.fillStyle = "#65e7e0";
      ctx.font = `${primaryFontSize}px serif`;
      drawTextCentered(ctx, "Welcome", canvas.width / 2, textY);
      textY += primaryFontSize/1.5 + scaleFactor;

      // Drawing the "to My Portfolio" text
      ctx.font = `${secondaryFontSize}px serif`;
      drawTextCentered(ctx, "to My Portfolio", canvas.width / 2, textY);
      textY += secondaryFontSize + 15 * scaleFactor;

      // Drawing the "↓ Scroll Down to Discover More ↓" text
      ctx.font = `${secondaryFontSize}px serif`;
      drawTextCentered(ctx, "↓ Scroll Down to Discover More ↓", canvas.width / 2, textY);
      textY += secondaryFontSize + 15 * scaleFactor;

      // Drawing line
      const startX = canvas.width / 2;
      ctx.beginPath();
      ctx.moveTo(startX, textY + 20);
      ctx.lineTo(startX, textY + 20 + scrollY/1.66);
      ctx.strokeStyle = "#3f8a89";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const drawTextCentered = (ctx, text, x, y) => {
      const textWidth = ctx.measureText(text).width;
      const textX = x - textWidth / 2;
      ctx.fillText(text, textX, y);
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      drawCanvas();
    };

    window.addEventListener("scroll", handleScroll);
    drawCanvas();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "200vh" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Sketch;
