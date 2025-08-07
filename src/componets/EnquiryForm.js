import React, { useState } from 'react'
import "./EnquiryForm.scss"

const EnquiryForm = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [fullName, setFullName] = useState("");

  const handleInputChange = (event) => {
    setFullName(event.target.value);
  };

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
        setFormStatus('success');
        event.target.reset();
        setFullName("");
      } else {
        console.error(result);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setFormStatus('error');
    }
  
    // Automatically clear the success/error/loading message after 10 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 10000);
  }

  return (
    <div className="enquiry-form">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-header">
          <h3 className="main-font">Get In Touch</h3>
          <p className="para-font">We would love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="form-fields">
          <div className="form-group">
            <label htmlFor="fullName" className="para-font">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={handleInputChange}
              required
            />
            <input type="hidden" name="from_name" value={fullName}/>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="para-font">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="para-font">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your 10-digit mobile number"
              pattern="[0-9]{10}"
              title="Phone number must be exactly 10 digits"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="para-font">Subject</label>
            <select id="subject" name="subject" className="para-font">
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Trading Services">Trading Services</option>
              <option value="Expert Advisor">Expert Advisor</option>
              <option value="Portfolio Management">Portfolio Management</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message" className="para-font">Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your requirements..."
              rows="5"
              required
            ></textarea>
          </div>

          <div className="form-group full-width">
            <button type="submit" className="submit-btn main-font">
              {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {/* Status Messages */}
          {formStatus === 'loading' && (
            <div className="status-message loading">
              <p className="para-font">Sending your message, please wait...</p>
            </div>
          )}
          
          {formStatus === 'success' && (
            <div className="status-message success">
              <p className="para-font">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          )}
          
          {formStatus === 'error' && (
            <div className="status-message error">
              <p className="para-font">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default EnquiryForm

