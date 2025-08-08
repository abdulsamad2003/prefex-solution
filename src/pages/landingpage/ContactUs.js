import React from 'react'
import "./ContactUs.scss"
import EnquiryForm from '../../componets/EnquiryForm'
import contactUs from "../../assets/prefexLogo.webp"
import { Helmet } from 'react-helmet'
import {  FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <>  
      <Helmet>
        <title>Contact Prefex Solution - Expert Financial Advisors</title>
        <meta name="description" content="Get in touch with Prefex Solution for expert financial advice and trading solutions. Reach us via email, phone, or our online contact form." />
        <meta name="keywords" content="contact Prefex Solution, financial advisors contact, trading solutions contact, Prefex Solution support, financial market experts, customer service, contact financial advisors" />
        <meta name="author" content="Prefex Solution" />
        <meta property="og:title" content="Contact Prefex Solution - Financial Advisors" />
        <meta property="og:description" content="Contact Prefex Solution for reliable financial advisory services and expert trading solutions. We're here to assist you." />
        <meta property="og:image" content={contactUs} />
        <meta property="og:url" content="https://www.prefexsolution.com/contact-us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <main className="contact-us" id="contact-us">
        <div className="contact-bg-pattern"></div>
        
        {/* Animated Background Shapes */}
        <div className="contact-shape-1"></div>
        <div className="contact-shape-2"></div>
        <div className="contact-shape-3"></div>
        <div className="contact-shape-4"></div>
        
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="main-font">Contact Us</h1>
            <p className="para-font">
              Ready to start your financial journey? Get in touch with our expert team today.
            </p>
          </div>

          <div className="contact-content">
          

            {/* Map and Form Section */}
            <div className="map-form-section">
              {/* Map Section */}
              <div className="map-section">
                <div className="section-header">
                  <h2 className="main-font">Visit Our Office</h2>
                  <p className="para-font">Find us at our Bangalore headquarters</p>
                </div>
                
                <div className="map-container">
                  <div className="map-frame">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d77.71234567890123!3d12.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzE1LjYiTiA3N8KwNDInNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                      width="100%" 
                      height="300" 
                      style={{border: 0}} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Prefex Solution Office Location"
                    ></iframe>
                  </div>
                  
                  <div className="address-card">
                    <div className="address-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="address-content">
                      <h3 className="main-font">Office Address</h3>
                      <p className="para-font">
                        2nd floor, Voyager Building,<br />
                        ITPL Main Rd, Pattandur Agrahara,<br />
                        Whitefield, Bengaluru,<br />
                        Karnataka 560066, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="contact-form-section">
                <div className="section-header">
                  <h2 className="main-font">Send Us a Message</h2>
                  <p className="para-font">Tell us about your requirements and we'll get back to you</p>
                </div>
                
                <div className="form-wrapper">
                  <EnquiryForm />
                </div>
              </div>
            </div>

              {/* Contact Information Section */}
              <div className="contact-info-section">
              <div className="section-header">
                <h2 className="main-font">Get In Touch</h2>
                <p className="para-font">We're here to help you achieve your financial goals</p>
              </div>
              
              <div className="contact-methods">
                {/* <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-content">
                    <h3 className="main-font">Mobile</h3>
                    <p className="para-font">+91 98765 43210 <br /> +91 98765 43210</p>
                    
                    <span className="method-note">24/7 Support Available</span><br />
                    <span className="method-note">Mon - Fri, 9:00 AM - 6:00 PM IST</span>
                  </div>
                </div> */}

                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-content">
                    <h3 className="main-font">Email Us</h3>
                    <p className="para-font">support@prefexsolution.com</p>
                    <span className="method-note">mail us for any query</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaClock />
                  </div>
                  <div className="method-content">
                    <h3 className="main-font">Business Hours</h3>
                    <p className="para-font">Monday - Friday</p>
                    <span className="method-note">9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ContactUs
