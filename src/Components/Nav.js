import React, { useState, useEffect } from 'react';
import "./Nav.scss";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='app-container'>
      <div className='nav'>
        <h1 className='logo'>Getto</h1>
        {isMobile && (
          <button className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        )}
        <nav className={`nav-links ${isMobile && !isOpen ? 'hidden' : ''}`}>
          <a href='/dashboard' className='dash'>Dashboard</a>
          <a href='/categories' className='dash'>Categories</a>
          <a href='#inventory' className='dash'>Inventory</a>
          <a href='#orders' className='dash'>Orders</a>
          <a href='#payments' className='dash'>Payments</a>
          <a href='#helpline' className='dash'>Helpline</a>
        </nav>
      </div>
    </div>
  );
};

export default App;
