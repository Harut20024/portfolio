import React, { useState, useEffect } from "react";
import "./App.css";
import Mainer from "./Componets/Main/Main";
import ParallaxScroll from "./Componets/ParallaxScroll/ParallaxScroll";
import Loader from "./loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);



  if (isLoading) {
    return (
      <div
        style={{
          width: "50px",
          margin: "auto",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      <ParallaxScroll />
      <Mainer />
    </div>
  );
}

export default App;
