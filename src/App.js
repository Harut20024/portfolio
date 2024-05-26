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

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      {isLoading ? (
        <div
          style={{
            width: "50px",
            margin: "auto",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <ParallaxScroll />
          <Mainer />
        </>
      )}
    </div>
  );
}

export default App;
