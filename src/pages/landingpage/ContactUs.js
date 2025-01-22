import React from 'react'
import "./ContactUs.scss"
import EnquiryForm from '../../componets/EnquiryForm'
const ContactUs = () => {
  return (
    <>  
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
