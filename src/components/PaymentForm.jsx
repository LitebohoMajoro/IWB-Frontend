import React, { useState } from 'react';
import './PaymentForm.css'; // Make sure the CSS you gave is saved here

const sendEmailNotification = async (email, message) => {
  try {
    const response = await fetch("http://localhost:5000/api/email/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        subject: "Payment Confirmation - IWB Electronics",
        message: message,
      }),
    });

    const data = await response.json();
    console.log("✅ Email sent successfully:", data);
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};


const PaymentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    billingAddress: '',
    paymentMethod: 'credit',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert('Payment submitted successfully!');
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-info">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="payment-section">
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>CVV</label>
            <input
              type="password"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Billing Address</label>
            <input
              type="text"
              name="billingAddress"
              placeholder="123 Main St, City, Country"
              value={formData.billingAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
        </div>

        <button className="confirm-btn" type="submit">
          Confirm Payment
        </button>
        <p className="note">All transactions are secure and encrypted.</p>
      </form>
    </div>
  );
};

export default PaymentForm;
