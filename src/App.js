import React, { useState } from "react";
import "./App.css";
import Mainer from "./Componets/Main/Main";
import ParallaxScroll from "./Componets/ParallaxScroll/ParallaxScroll";
import Loader from "./loader";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 0);

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
