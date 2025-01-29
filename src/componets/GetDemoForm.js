import React from 'react'

const GetDemoForm = () => {
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
  )
}

export default GetDemoForm
