import React, { useState } from "react";
import "./style.css"
const FlashlightEffect = () => {
  const [lightPosition, setLightPosition] = useState({
    x: window.innerWidth / 2.5,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLightPosition({ x, y });
  };


  return (
    <div id="fleshback" style={{  textAlign: "center", marginTop: "20px" }}>
      <div
        onMouseMove={handleMouseMove}
        style={{
          margin: "auto",
          position: "relative",
          overflow: "hidden",
          zIndex: 10,
          color: "black",
          padding: "20px",
          fontSize: "20px",
          backgroundColor: "#F9EEDC",
          marginTop: "20px",
          height: "400px",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <h2> Now Let me show you more about my works</h2>
          <br />
          <h3>So let's start</h3>
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `radial-gradient(circle at ${lightPosition.x}px ${lightPosition.y}px, rgba(255, 255, 255, 0.5) 160px, #0d0c2b 300px)`,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

export default FlashlightEffect;
