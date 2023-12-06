import React, { useState, useEffect } from 'react';
import './ScrollDownArrow.css'; // Ensure this path is correct

const ScrollDownArrow = () => {
  const [arrowLength, setArrowLength] = useState(50); // Initial arrow length

  useEffect(() => {
    const handleScroll = () => {
      // Update arrow length based on scroll position
      setArrowLength(50 + window.scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-down-arrow" style={{ height: `${arrowLength}px` }}>
      ↓
    </div>
  );
};

export default ScrollDownArrow;
