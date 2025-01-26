import React from 'react'
import "./ContactUs.scss"
import EnquiryForm from '../../componets/EnquiryForm'
import contactUs from "../../assets/prefexLogo.webp"
import { Helmet } from 'react-helmet'
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
     <section className="contact-us">
          <div className="text-box">
            <h1 className="main-font">Contact US</h1>
            <div className="para">
              <p className="para-font">
                  We’re here to help and answer any questions you might have. 
              </p>
              <p className="para-font">
                  Want to get in touch? We'd love to hear from you.
                  Here's how you can reach us...
              </p>
            </div>
          </div>
        </section> 
      <EnquiryForm/>
    </>
  )
}

export default ContactUs
