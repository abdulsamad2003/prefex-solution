"use client"
import React, { useState } from "react";
import "./Footer.scss";
import {Link} from "react-router-dom"
const Footer = () => {



  return (
    <>
       <footer className="footer">
      <main className="footer-content left">
        <div className="logo">
          {/* <Image src="/assests/logo.png" alt="Logo" width={40} height={40} /> */}
        </div>
        <div className="main-font content">
          <h1>GLOBAL Edge</h1>
          <p className="para-font">
                Everything that will help you grow your business and career. We cover a wide range of tech business topics, including e-commerce, social media, and mobile commerce
          </p>
        </div>
      </main>

      <main className="footer-content middle">
        <div className="main-font content">
          <h1>Links</h1>
          <div className="para-font links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#packages">Portfolio Management Service</Link>
              </li>
              <li>
                <Link to="#destinations">Expert Advisor</Link>
              </li>
              <li>
                <Link to="#deals">Contact Us</Link>
              </li>
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
                <span>Email</span>
                <Link to="mailto:sales@himachaltourismguide.in" target="_blank">sales@himachaltourismguide.in</Link>
              </li>
              <li>
                <span>Phone no:</span>
                <Link to="tel:+91 7836098136">+91 7836098136</Link>
              </li>
              <li className="hover">
                <span>Address</span>
                <Link href="tel:+91 7836098136">
                  Near stop n shop, Kelti, Himachal Pradesh Pin-code:171003
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </footer>
    </>
 
  );
};

export default Footer;
