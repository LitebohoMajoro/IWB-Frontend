import React from "react";

const sendNotificationEmail = async (userEmail, message) => {
  try {
    const response = await fetch("http://localhost:5000/api/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: userEmail,
        subject: "🎉 Your IWB Purchase & Recommendations",
        text: message,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log("✅ Email sent:", result.message);
    } else {
      console.error("❌ Email failed:", result.message);
    }
  } catch (err) {
    console.error("❌ Network error while sending email:", err);
  }
};
