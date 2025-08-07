import React, { useState, useEffect } from 'react';
import "./Nav.scss";
import { Link, useLocation } from 'react-router-dom';
import { CiTextAlignRight } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className={`main-font ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-square"></div>
          </div>
          <span className="logo-text">Prefex<span className="logo-dot">.</span></span>
        </div>
        
        {/* Desktop Navigation */}
        <ul className='lists main-font' role="menubar">
          <li role="none">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} role="menuitem" aria-current={location.pathname === '/' ? 'page' : undefined}>
              Home
            </Link>
          </li>
          <li role="none">
            <Link to="/portfolio-service" className={location.pathname === '/portfolio-service' ? 'active' : ''} role="menuitem" aria-current={location.pathname === '/portfolio-service' ? 'page' : undefined}>
              Portfolio Management Service
            </Link>
          </li>
          <li role="none">
            <Link to="/expert-advisor" className={location.pathname === '/expert-advisor' ? 'active' : ''} role="menuitem" aria-current={location.pathname === '/expert-advisor' ? 'page' : undefined}>
              Expert Advisor
            </Link>
          </li>
          <li role="none">
            <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''} role="menuitem" aria-current={location.pathname === '/contact-us' ? 'page' : undefined}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="mob-nav-opener">
          <button 
            onClick={handleMobileMenuToggle}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <CiTextAlignRight className="opener" />
          </button>
        </div>

        {/* Mobile Navigation List */}
        <div className={`mob-list ${isMobileMenuOpen ? 'active' : ''}`} id="mobile-menu" role="navigation" aria-label="Mobile navigation">
          <button 
            className="mobile-close-btn"
            onClick={handleMobileMenuToggle}
            aria-label="Close navigation menu"
          >
            <MdOutlineCancel />
          </button>
          <ul className='main-font' role="menubar">
            <li role="none">
              <Link onClick={handleMobileMenuToggle} to="/" role="menuitem" className={location.pathname === '/' ? 'active' : ''}>
                <IoHomeOutline aria-hidden="true" />
                <span>Home</span>
              </Link>
            </li>
            <li role="none">
              <Link onClick={handleMobileMenuToggle} to="/portfolio-service" role="menuitem" className={location.pathname === '/portfolio-service' ? 'active' : ''}>
                <GiNetworkBars aria-hidden="true" />
                <span>Portfolio Service</span>
              </Link>
            </li>
            <li role="none">
              <Link onClick={handleMobileMenuToggle} to="/expert-advisor" role="menuitem" className={location.pathname === '/expert-advisor' ? 'active' : ''}>
                <GrUserExpert aria-hidden="true" />
                <span>Expert Advisor</span>
              </Link>
            </li>
            <li role="none">
              <Link onClick={handleMobileMenuToggle} to="/contact-us" role="menuitem" className={location.pathname === '/contact-us' ? 'active' : ''}>
                <IoIosContacts aria-hidden="true" />
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
