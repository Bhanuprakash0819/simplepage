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

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

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
          <Link to='/dashboard' className='dash' onClick={closeMenu}>Dashboard</Link>
          <Link to='/categories' className='dash' onClick={closeMenu}>Categories</Link>
          <Link to='/inventory' className='dash' onClick={closeMenu}>Inventory</Link>
          <Link to='/orders' className='dash' onClick={closeMenu}>Orders</Link>
          <Link to='/payments' className='dash' onClick={closeMenu}>Payments</Link>
          <Link to='/support' className='dash' onClick={closeMenu}>Support</Link>
        </nav>
      </div>
    </div>
  );
};

export default App;
