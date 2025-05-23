import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const location = useLocation();
const { user, recommendedItems } = location.state;


const PaymentSuccess = ({ user, recommendedItems }) => {
  useEffect(() => {
    sendEmailNotification();
  }, []);

  const sendEmailNotification = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/email/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
          recommendations: recommendedItems,
        }),
      });

      const data = await response.json();
      if (data.success) {
        console.log("✅ Email sent successfully!");
      } else {
        console.error("❌ Email failed:", data.error);
      }
    } catch (error) {
      console.error("❌ Network error:", error);
    }
  };

  return (
    <div className="thank-you-message">
      <h2>Thank you for your payment!</h2>
      <p>We’ve sent a product recommendation email to <strong>{user.email}</strong>.</p>
    </div>
  );
};

export default PaymentSuccess;
