"use client"
import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-bg-pattern"></div>
      
      {/* Animated Background Shapes */}
      <div className="footer-shape-1"></div>
      <div className="footer-shape-2"></div>
      <div className="footer-shape-3"></div>
      <div className="footer-shape-4"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Information */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <h2 className="main-font">Prefex Solution</h2>
              <div className="logo-accent"></div>
            </div>
            <p className="para-font">
              Your trusted partner in professional portfolio management and expert trading solutions. 
              We provide comprehensive financial services with cutting-edge technology and personalized 
              strategies to help you achieve your investment goals.
            </p>
            
            <div className="social-links">
              <h4 className="main-font">Follow Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h3 className="main-font">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="para-font">Home</Link></li>
              <li><Link to="/portfolio-service" className="para-font">Portfolio Management</Link></li>
              <li><Link to="/expert-advisor" className="para-font">Expert Advisor</Link></li>
              <li><Link to="/contact-us" className="para-font">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section contact-info">
            <h3 className="main-font">Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4 className="main-font">Email</h4>
                <a href="mailto:support@prefexsolution.com" className="para-font">support@prefexsolution.com</a>
              </div>
            </div>

            {/* <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h4 className="main-font">Phone</h4>
                <a href="tel:+919876543210" className="para-font">+91 98765 43210</a> <br />
                <a href="tel:+919876543211" className="para-font">+91 98765 43211</a>
              </div>
            </div> */}

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h4 className="main-font">Address</h4>
                <p className="para-font">
                  2nd floor, Voyager Building, ITPL Main Rd,<br />
                  Pattandur Agrahara, Whitefield,<br />
                  Bengaluru, Karnataka 560066, India
                </p>
              </div>
            </div>

            {/* <div className="contact-item">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div className="contact-details">
                <h4 className="main-font">Business Hours</h4>
                <p className="para-font">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p className="para-font">
                © {currentYear} Prefex Solution. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
