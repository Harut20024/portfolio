import React, { useState, useEffect } from "react";
import "./App.css";
import Mainer from "./Componets/Main/Main";
import ParallaxScroll from "./Componets/ParallaxScroll/ParallaxScroll";
import Loader from "./loader";
import EmailForm from "./Componets/EmailForm/EmailForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

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

  if (!isAuthenticated) {
    return <EmailForm onAuthentication={handleAuthentication} />;
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
