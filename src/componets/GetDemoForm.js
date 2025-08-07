import React, { useState } from 'react';
import './GetDemoForm.scss';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const GetDemoForm = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [fullName, setFullName] = useState("");
  const [state, setState] = useState("");

  const handleInputChange = (event) => {
    setFullName(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "c0e6f04e-66e1-4cf1-af36-8bb5211b0a54");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
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
        setState("");
      } else {
        console.error(result);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setFormStatus('error');
    }

    setTimeout(() => {
      setFormStatus(null);
    }, 10000);
  }

  return (
    <section className="get-demo" id="get-demo">
      <div className="bg-shape-1"></div>
      <div className="bg-shape-2"></div>
      <div className="bg-shape-3"></div>
      <div className="bg-shape-4"></div>
      <div className="bg-shape-5"></div>
      <div className="bg-shape-6"></div>
      
      <div className="get-demo-container">
        <div className="get-demo-header">
          <h2 className="main-font">Request Your Free Demo</h2>
          <p className="para-font">
            Experience the power of professional portfolio management. Get your personalized demo and discover how our expert solutions can transform your investment strategy.
          </p>
          <div className="demo-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Free Consultation</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Personalized Strategy</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Expert Guidance</span>
            </div>
          </div>
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
          <h3 className="main-font">Get Started Today</h3>
          <p className="para-font">Fill out the form below and our team will contact you within 24 hours.</p>
          
          <div className="form-group">
            <label htmlFor="fullName" className="main-font">Full Name *</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              placeholder="Enter your full name" 
              value={fullName} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="main-font">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email address" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone" className="main-font">Phone Number *</label>
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
            <label htmlFor="state" className="main-font">State *</label>
            <select 
              id="state" 
              name="state" 
              value={state} 
              onChange={handleStateChange} 
              required
            >
              <option value="">Select your state</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="main-font">Investment Goals</label>
            <textarea 
              name="message" 
              id="message" 
              rows="4"
              placeholder="Tell us about your investment goals and what you're looking to achieve..."
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn main-font">
            {formStatus === 'loading' ? 'Sending Request...' : 'Request Free Demo'}
          </button>
          
          {formStatus === 'loading' && (
            <p className="status-message loading">Processing your request, please wait...</p>
          )}
          {formStatus === 'success' && (
            <p className="status-message success">Thank you! We'll contact you within 24 hours.</p>
          )}
          {formStatus === 'error' && (
            <p className="status-message error">Something went wrong. Please try again or contact us directly.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default GetDemoForm;
