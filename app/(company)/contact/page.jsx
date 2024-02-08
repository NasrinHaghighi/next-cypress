'use client'
import React ,{useState}from 'react'

function ContactPage() {
    const [errors, setErrors] = useState({});
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const message=e.target.message.value
        const newMessage={name, email, message}
       // Validation
    const newErrors = {};

    if (name.length < 6) {
      newErrors.name = 'Name must be at least 6 characters long.';
    }

    if (!email.includes('.com')) {
      newErrors.email = 'please enter a valid email';
    }else{
        newErrors.email = 'correct email';
    }

    if (message.length < 200 || message.length > 250) {
      newErrors.message = 'Message must be between 200 and 250 characters long.';
    }

    setErrors(newErrors);

    // If there are no errors, proceed with submitting the form
    if (Object.keys(newErrors).length === 0) {
      // Submit form logic here
      console.log('Form submitted successfully:', newMessage);
    }
    }
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Name</label>
        <input
        data-test='name-input'
          type="text"
          id="name"
          name="name"
          style={{ marginBottom: '1rem', padding: '0.5rem' }}
        />
  {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <label htmlFor="email">Email</label>
        <input
        data-test='email-input'
          type="email"
          id="email"
          name="email"
          style={{ marginBottom: '1rem', padding: '0.5rem' }}
        />
  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <label htmlFor="message">Message</label>
        <textarea
        data-test='message-input'
          id="message"
          name="message"
          rows="4"
          style={{ marginBottom: '1rem', padding: '0.5rem' }}
        ></textarea>
 {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        <button
         data-test='submit-btn'
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactPage