import React, { useState } from 'react';
import './ContactContent.css'; // ← Make sure this CSS file exists

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to submit message.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Error submitting message.');
    }
  };

  return (
    <div className="contact-page">
      <main className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>
            <img src="/icons/email-icon.png" alt="Email" className="icon" />
            Email: <a href="mailto:mpotsemoroa@gmail.com">MpotseMoroa@gmail.com</a>
          </p>
          <p>
            <img src="/icons/whatsapp.jpg" alt="WhatsApp" className="icon" />
            WhatsApp: <a href="https://wa.me/26658303699" target="_blank" rel="noreferrer">Chat with us</a>
          </p>
        </div>

        {submitted ? (
          <p className="thank-you">✅ Thank you for your message! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        )}
      </main>
    </div>
  );
};

export default ContactContent;
