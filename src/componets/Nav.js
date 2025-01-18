import React, { useState } from 'react';
import "./Nav.scss";
import { gsap } from 'gsap';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import { CiTextAlignRight } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);

    const mobList = document.querySelector(".mob-list");
    const mobLinks = mobList.querySelectorAll("ul li a");

    if (!isMobileMenuOpen) {
      gsap.to(mobList, {
        right: 0,
        duration: 0.2,
      });
      gsap.from(mobLinks, {
        x: 200,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
      });
    } else {
      gsap.to(mobList, {
        right: "-100%",
        duration: 0.1,
      });
    }
  };

  return (
    <nav className='main-font'>
      <div className="logo">
        <img src={logo} alt="Global edge logo" height={"90vh"} width={"90vw"}
        loading="lazy" />
      </div>
      {/* Desktop Navigation */}
      <ul className='lists main-font'>
        <li><Link to="/contact">Home</Link></li>
        <li><Link to="/contact">Portfolio Management Service</Link></li>
        <li><Link to="/contact">Export Advisor</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Mobile Navigation Toggle */}
      <div className="mob-nav-opener">
        <span onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? (
            <MdOutlineCancel className="closer" />
          ) : (
            <CiTextAlignRight className="opener" />
          )}
        </span>
      </div>

      {/* Mobile Navigation List */}
      <div className="mob-list">
        <ul className='main-font'>
          <li>
            <Link to="/">
              <IoHomeOutline />
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <GiNetworkBars />
              Portfolio Service
            </Link>
          </li>
          <li>
            <Link to="/advisor">
              <GrUserExpert />
              Expert Advisor
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <IoIosContacts />
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
