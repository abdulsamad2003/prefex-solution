import React, { useEffect, useState } from 'react'
import "./EnquiryForm.scss"
import { Link } from 'react-router-dom';

const EnquiryForm = () => {
  const [isWindowBelow600, setIsWindowBelow600] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsWindowBelow600(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className='enquiry-page'
        style={{
          display: "flex",
          flexDirection: isWindowBelow600 ? "column" : "row",
        }}
      >
        <div className="content">
          <p className='content-small-heading para-font'>
            Interested in Prefex Solution? <br /> We are just a call away! <br />
            Please reach out to us at:
          </p>
          <span className="email">
            <h1 className='main-font'>EMAIL</h1>
            <span className='para-font'>
              <Link  to="mailto:" target="_blank">
                    Support@prefexsolution.com
              </Link>
            </span>
          </span>
          <span className="phone-whatsapp">
            <h1 className='main-font'>PHONE/WHATSAPP</h1>
            <span className='para-font'>
              <Link>
                +91 9673500999
              </Link>
            </span>

            <span className='para-font'>
              <Link to="tel:+91 7836098136">
                +91 9673500999
              </Link>
            </span>
          </span>
        </div>
        <div
          className="input"
          style={{
            width: isWindowBelow600 ? "100%" : "50%",
            padding: isWindowBelow600 ? "5% 0 0 10%" : "0",
          }}
        >
          <div className="input-content">
            <h2 className="main-font"> Get in touch</h2>
            <p className='para-font'>We would love to hear from you.</p>
          </div>
          <div className="full-input">
            <label htmlFor="First">Name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div className="full-input">
            <label htmlFor="email">EMAIL</label>
            <input type="email" placeholder="you@company.com" />
          </div>
          <div className="full-input">
            <label htmlFor="phone number">Phone number</label>
            <input type="tel" placeholder="+91 00000 00000" />
          </div>
          <div className="full-input">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="65" rows="5"></textarea>
          </div>
          <button className="blue-btn" type="button">
            Send Message
          </button>
        </div>
      </section>
      <section
        className="map-area"
        style={{
          display: "flex",
          flexDirection: isWindowBelow600 ? "column" : "row",
        }}
      >
        <iframe
          style={{ width: isWindowBelow600 ? "100%" : "50%", height: isWindowBelow600 ? "50vh" : "60vh" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8350.300020018478!2d74.37275104502272!3d18.82502731270111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc32dc0efa412e9%3A0x17e0b68940e44c24!2sShirur%2C%20Maharashtra%20412210!5e1!3m2!1sen!2sin!4v1699446179747!5m2!1sen!2sin"
          width="580"
          height="439"
          title='map'
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div
          className="address"
          style={{
            width: isWindowBelow600 ? "fit-content" : "50%",
            padding: isWindowBelow600 ? "2vh 0" : "0",
          }}
        >
          <h2 className='main-font'>OUR OFFICE</h2>
          <span>
            <h3 className='main-font'>Address</h3>
          </span>
          <p className='para-font'>
            Bandra Terminal
            <br />
            Dist – Mumbai 412211
            <br />
            Maharashtra - India
          </p>
        </div>
      </section>
    </>
  )
}

export default EnquiryForm
