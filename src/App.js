import React, { useState, useEffect } from 'react';
import './App.css';
import SCanvas from './Componets/Scanvas';
import Mainer from './Componets/Main/Main';

function App() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 1.5) {
        setShowMain(true);
      } else {
        setShowMain(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Canvas">
      <main>
        <SCanvas />
      </main>
      <Mainer isVisible={showMain} />
    </div>
  );
}

export default App;
