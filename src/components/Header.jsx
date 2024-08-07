import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className='container'>
        <div className='header-box'>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className={`menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
            <button className="hamburger" onClick={toggleMenu}>
              ☰
            </button>
            <div className="buttons">
              <Link to="/contact">
                <button className="contact">Contact</button>
              </Link>
              <button className="sign-up">Sign Up</button>
              <button className="login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
