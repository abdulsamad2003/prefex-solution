import React from 'react'
import "./ContactUs.scss"
import EnquiryForm from '../../componets/EnquiryForm'
const ContactUs = () => {
  return (
    <>  
     <Helmet>
      <title>ContactUs - Prefex solution</title>
      <meta name="robots" content="index, follow"/>
      <meta name="prefex solution contact_us" content="Prefex_solution contact_us" />
      <meta name="keywords" content="prefex_solution,contact_us, prefix, prefexsolution,trading, financial advisors, international market, Prefex Solution" />
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
