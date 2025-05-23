import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Payment.css';

export default function Payment() {
  const [paymentData, setPaymentData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Bank Card");
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem("pendingPayment");
    if (stored) {
      setPaymentData(JSON.parse(stored));
    } else {
      alert("No payment session found.");
      navigate("/cart");
    }
  }, [navigate]);

const handleConfirm = async () => {
  if (paymentMethod === "Bank Card" && (!cardNumber || !pin)) {
    alert("Please complete all card fields.");
    return;
  }

  if ((paymentMethod === "mpesa" || paymentMethod === "ecocash") && (!mobileNumber || !pin)) {
    alert("Please complete all mobile payment fields.");
    return;
  }

  const paymentDetails = {
    name: paymentData.name,
    email: paymentData.email,
    items: paymentData.items,
    total: paymentData.total,
    paymentMethod,
    cardNumber: paymentMethod === "Bank Card" ? cardNumber : null,
    mobileNumber: paymentMethod !== "Bank Card" ? mobileNumber : null,
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch("http://localhost:5000/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentDetails),
    });

    if (response.ok) {
      sessionStorage.removeItem("pendingPayment");
      navigate("/Receipt");
    } else {
      alert("Failed to process payment. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while processing the payment.");
  }
};

  if (!paymentData) return null;

  return (
    <div className="payment-container">
      <h1>Secure Payment</h1>

      <div className="user-info">
        <p><strong>Name:</strong> {paymentData.name}</p>
        <p><strong>Email:</strong> {paymentData.email}</p>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {paymentData.items.map((item) => (
            <li key={item.id}>
              {item.name} × {item.quantity} = M{item.price * item.quantity}
            </li>
          ))}
        </ul>
        <h3>Total: M{paymentData.total}</h3>
      </div>

      <div className="payment-section">
        <h2>Select Payment Method</h2>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="Bank Card">Bank Card</option>
          <option value="mpesa">Mpesa</option>
          <option value="ecocash">EcoCash</option>
        </select>

        <div className="payment-methods">
          {paymentMethod === "Bank Card" && (
            <div className="method-slide active">
              <input
                type="text"
                placeholder="Account Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <input
                type="password"
                placeholder="PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
          )}

          {(paymentMethod === "mpesa" || paymentMethod === "ecocash") && (
            <div className="method-slide active">
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <input
                type="password"
                placeholder="Mobile Payment PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <p className="note">You'll receive a prompt on your phone to complete the transaction.</p>
            </div>
          )}
        </div>

        <button className="confirm-btn" onClick={handleConfirm}>Confirm Payment</button>
      </div>
    </div>
  );
}
