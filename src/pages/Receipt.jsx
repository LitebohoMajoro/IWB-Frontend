import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Receipt.css';

export default function Receipt() {
  const [receiptData, setReceiptData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem("recentReceipt");
    if (stored) {
      setReceiptData(JSON.parse(stored));
      sessionStorage.removeItem("recentReceipt");
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!receiptData) return null;

  return (
    <div className="receipt-container">
      <h1>Payment Receipt</h1>

      <div className="receipt-section">
        <h2>Customer Details</h2>
        <p><strong>Name:</strong> {receiptData.name}</p>
        <p><strong>Email:</strong> {receiptData.email}</p>
        <p><strong>Method:</strong> {receiptData.method.toUpperCase()}</p>
      </div>

      <div className="receipt-section">
        <h2>Order Details</h2>
        <ul>
          {receiptData.items.map(item => (
            <li key={item.id}>
              {item.name} × {item.quantity} = M{item.quantity * item.price}
            </li>
          ))}
        </ul>
        <h3>Total Paid: M{receiptData.total}</h3>
      </div>

      <div className="receipt-section center">
        <p>Thank you for shopping with us!</p>
        <button className="home-btn" onClick={() => navigate("/")}>Return to Home</button>
      </div>
    </div>
  );
}
