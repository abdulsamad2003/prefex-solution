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
   <>
   <section className="get-demo">
      <main className="get-demo-content">
          <h1 className='main-font'>Fill The Form For Get Demo</h1>
          <p className="para-font">
            NOTE: Our Research alerts will be Provided only after successful acceptance 
          of User Consent.
          </p>
      </main>
      <form className='form-container' onSubmit={handleSubmit}>
          <h2>Get Demo Now</h2>
          <p>We would love to hear from you.</p>
          
          <label htmlFor="fullName">Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter a name" value={fullName} onChange={handleInputChange} required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter an email" required />
          
          <label htmlFor="phone">Phone number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter Your 10-digit mobile no." pattern="[0-9]{10}" title="Phone number must be exactly 10 digits" required />
          
          <label htmlFor="state">State</label>
          <select id="state" name="state" value={state} onChange={handleStateChange} required>
            <option value="">Select your state</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5"></textarea>
          
          <button type="submit">Send Message</button>
          {formStatus === 'loading' && <p style={{color: 'blue'}}>Form is submitting, please wait...</p>}
          {formStatus === 'success' && <p style={{color: "green"}}>Form submitted successfully!</p>}
          {formStatus === 'error' && <p style={{color: "red"}}>There was an error submitting the form. Please try again later.</p>}
        </form>

   </section>
   </> 
  );
};

export default GetDemoForm;
