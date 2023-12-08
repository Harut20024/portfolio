import React, { useState, useEffect } from 'react';
import './App.css';
import SCanvas from './Componets/Scanvas';
import Mainer from './Componets/Main/Main';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 1.5) {
        setShowMain(true);
      } else {
        setShowMain(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleOrientationChange = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return (
    isLandscape ? (
      <div className="Canvas">
        <main>
          <SCanvas />
        </main>
        <Mainer isVisible={showMain} />
      </div>
    ) : (
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        margin: 'auto',
        padding: '20px',
        color: "#65e7e0",
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}>
        <i className="fas fa-undo" style={{ marginRight: '10px' }}></i>
        Please rotate your device to landscape mode to use this site.
      </div>
      
      
    )
  );
}

export default App;
