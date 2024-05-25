import React, { useState } from "react";
import "./style.css";
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
    <div
      id="fleshback"
      style={{ textAlign: "center", marginTop: "10%", marginBottom: "10%" }}
    >
      <div
        onMouseMove={handleMouseMove}
        style={{
          margin: "auto",
          position: "relative",
          overflow: "hidden",
          zIndex: 10,
          color: "white",
          padding: "40px",
          fontSize: "20px",
          backgroundColor: "#110f37",
          marginTop: "20px",
          height: "400px",
          textShadow: "2px 2px 4px #000000",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            paddingLeft: "150px",
            paddingRight: "150px",
          }}
        >
          {" "}
          <h2> Scroll down discover more!!!</h2>
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
