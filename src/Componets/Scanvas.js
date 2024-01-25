import React, { useRef, useEffect } from "react";

const Sketch = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.height = window.innerHeight * 1.2;
      canvas.width = window.innerWidth;
    };
    setCanvasSize();

    let scrollY = window.scrollY;
    const drawCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0b0c10";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let textY = canvas.height / 5;

      // Calculate scaled font size for "Welcome" text, making it less aggressive
      const primaryFontSize = Math.max(28, Math.min(35, canvas.width / 800 * 40)); // Welcome text min: 24px, max: 30px
      const secondaryFontSize = 12; // Secondary text fixed at 16px

      // Drawing the "Welcome" text
      ctx.fillStyle = "#65e7e0";
      ctx.font = `bold ${primaryFontSize}px Arial`;
      drawTextCentered(ctx, "Welcome", canvas.width / 2, textY);
      textY += primaryFontSize;

      // Drawing the "to My Portfolio" text
      ctx.font = `bold ${secondaryFontSize}px Arial`;
      drawTextCentered(ctx, "to My Portfolio", canvas.width / 2, textY);
      textY += secondaryFontSize * 2;

      // Drawing the "↓ Scroll Down to Discover More ↓" text
      ctx.font = `bold ${secondaryFontSize}px Arial`;
      drawTextCentered(ctx, "↓ Scroll Down to Discover More ↓", canvas.width / 2, textY);
      textY += secondaryFontSize * 2;

      // Drawing line
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, textY);
      ctx.lineTo(canvas.width / 2, textY + scrollY * 0.62); // Scroll effect on line length
      ctx.strokeStyle = "#3f8a89";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const drawTextCentered = (ctx, text, x, y) => {
      const textWidth = ctx.measureText(text).width;
      ctx.fillText(text, x - textWidth / 2, y);
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      drawCanvas();
    };

    // Set up the event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setCanvasSize);

    // Initial draw
    drawCanvas();

    // Clean up the event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return <div style={{ position: "relative", height: "200vh" }}>
    <canvas ref={canvasRef} />
  </div>;
};

export default Sketch;
