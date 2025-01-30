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

  const [formStatus, setFormStatus] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    // Append access key for Web3Forms
    formData.append("access_key", "c0e6f04e-66e1-4cf1-af36-8bb5211b0a54");
  
    // Convert FormData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    // Set loading state before initiating the request
    setFormStatus('loading');
  
    try {
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const result = await emailResponse.json();
  
      if (emailResponse.ok && result.success) {
        setFormStatus('success'); // Set success status
        event.target.reset(); // Reset the form fields
      } else {
        console.error(result);
        setFormStatus('error'); // Set error status
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setFormStatus('error'); // Handle network or fetch errors
    }
  
    // Automatically clear the success/error/loading message after 10 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 10000);
  }
  
  // this is for changing form web3 form received name in gmail
  const [fullName, setFullName] = useState("");
  const handleInputChange = (event) => {
    setFullName(event.target.value); // Update the fullName state
  };
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
              <Link  to="mailto:support@prefexsolution.com" target="_blank">
                    support@prefexsolution.com
              </Link>
            </span>
          </span>
          <span className="phone-whatsapp">
            <h1 className='main-font'>PHONE/WHATSAPP</h1>
  
            <span className='para-font'>
              <Link to="tel:+91 9167378538">
                +91 9167378538
              </Link>
            </span>
          </span>
        </div>
        <form
          onSubmit={handleSubmit} 
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
            <input type="hidden" name="from_name" value={fullName}/>
            <label htmlFor="First">Name</label>
            <input  type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter a name"
                value={fullName}
                onChange={handleInputChange}
                required/>
          </div>
          <div className="full-input">
            <label htmlFor="email">EMAIL</label>
            <input type="email"
                id="email"
                name="email"
                placeholder="Enter an email"
                required/>
          </div>
          <div className="full-input">
            <label htmlFor="phone number">Phone number</label>
            <input  type="tel"
          id="phone"
          name="phone"
          placeholder="Enter Your 10-digit mobile no."
          pattern="[0-9]{10}"
          title="Phone number must be exactly 10 digits"
          required />
          </div>
          <div className="full-input">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="65" rows="5"></textarea>
          </div>
          <div className="full-input">
          <button className="blue-btn" type="submit">
            Send Message
          </button>
          {formStatus === 'loading' && <p className="loading-message">Form is submitting please wait...!!!</p>}
          {formStatus === 'success' && <p className="success-message">Form submitted successfully!</p>}
          {formStatus === 'error' && <p className="error-message">There was an error submitting the form. Please try again later.</p>}
          </div>
        </form>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8049089651095!2d72.95204507436922!3d19.203721547952142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f5c38d909d%3A0xbd382394b6bff4f7!2sOmega%20Business%20Park!5e0!3m2!1sen!2sin!4v1738236027582!5m2!1sen!2sin"          height="439"
          title='map'
          loading="lazy"
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
             Omega Business Park, MIDC, Ambica Nagar, Wagle Industrial Estate, Thane,
              <br />
             Maharashtra 400604
          </p>
        </div>
      </section>

      <style jsx>{`
        .success-message {
          color: green;
          margin-top: 10px;
        }

        .error-message {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </>
  )
}

export default EnquiryForm

