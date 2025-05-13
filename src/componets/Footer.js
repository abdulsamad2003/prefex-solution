"use client"
import React from "react";
import "./Footer.scss";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
        <footer className="footer">
        <main className="footer-content left">
            <div className="main-font content">
            <h1>Prefex Solution</h1>
                <p className="para-font">
                    Everything that will help you grow your business and career. We cover a wide range of tech business topics, including e-commerce, social media, and mobile commerce
                </p>
            </div>
        </main>

        <main className="footer-content middle">
            <div className="main-font content">
            <h1>Links</h1>
            <div className="links">
                <ul className="para-font">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio-service">Portfolio Management Service</Link></li>
                        <li><Link to="/expert-advisor">Expert Advisor</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
        
            </div>
            </div>
        </main>
        <main className="footer-content right">
            <div className="main-font  content">
            <h1>Details</h1>
            <div className="links">
                <ul>
                <li>
                    <span className="main-font">Email</span>
                    <Link className="para-font" to="mailto:support@prefexsolution.com" target="_blank">support@prefexsolution.com</Link>
                    <Link className="para-font" to="mailto:care@prefexsolution.com" target="_blank">care@prefexsolution.com</Link>
                </li>
                <li className="hover">
                    <span className="main-font">Address</span>
                    <Link className="para-font">
                        Omega Business Park, MIDC, 
                        Ambica Nagar, Wagle Industrial Estate,Thane,
                        Maharashtra 400604
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </main>
        </footer>
 
  );
};

export default Footer;
