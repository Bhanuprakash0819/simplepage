import React, { useState, useEffect } from 'react';
import "./Nav.scss";
import { Link } from 'react-router-dom';
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
          <Link to='/dashboard' className='dash'>Dashboard</Link>
          <Link to='/categories' className='dash'>Categories</Link>
          <Link to='/dashboard' className='dash'>Inventory</Link>
          <Link to='/dashboard' className='dash'>Orders</Link>
          <Link to='/dashboard' className='dash'>Payments</Link>
          <Link to='/dashboard' className='dash'>Support</Link>
        </nav>
      </div>
    </div>
  );
};

export default App;
