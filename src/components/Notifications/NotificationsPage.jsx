import React from "react";

const NotificationsPage = () => {
  const recommendations = JSON.parse(localStorage.getItem("recommendations") || "[]");

  return (
    <div className="notifications-page">
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul>
          {recommendations.map((item, idx) => (
            <li key={idx}>
              ✅ <strong>{item.name}</strong> in {item.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationsPage;
