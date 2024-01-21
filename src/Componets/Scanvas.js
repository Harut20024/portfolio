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

    // Adjust the scale factor to be less aggressive
    const scaleFactor = Math.sqrt(canvas.width / baseCanvasWidth);

     const basePrimaryFontSize = 40; 
    const baseSecondaryFontSize = 16;  

    const drawCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0b0c10";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let textY = canvas.height / 5;

      // Calculate scaled font sizes - increased min and max sizes
      const primaryFontSize = Math.max(26, Math.min(basePrimaryFontSize * scaleFactor, 52)); // Increased Min: 26, Max: 42
      const secondaryFontSize = Math.max(14, Math.min(baseSecondaryFontSize * scaleFactor, 28)); // Increased Min: 14, Max: 28

      // Drawing the welcome text
      ctx.fillStyle = "#65e7e0";
      ctx.font = `${primaryFontSize}px serif`;
      drawTextCentered(ctx, "Welcome", canvas.width / 2, textY);
      textY += primaryFontSize / 1.5 + 10;

      // Drawing the "to My Portfolio" text
      ctx.font = `${secondaryFontSize}px serif`;
      drawTextCentered(ctx, "to My Portfolio", canvas.width / 2, textY);
      textY += secondaryFontSize + 10;

      // Drawing the "↓ Scroll Down to Discover More ↓" text
      ctx.font = `${secondaryFontSize}px serif`;
      drawTextCentered(ctx, "↓ Scroll Down to Discover More ↓", canvas.width / 2, textY);
      textY += secondaryFontSize + 10;

      // Drawing line
      const startX = canvas.width / 2;
      ctx.beginPath();
      ctx.moveTo(startX, textY + 20);
      ctx.lineTo(startX, textY + 20 + scrollY / 1.66);
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
