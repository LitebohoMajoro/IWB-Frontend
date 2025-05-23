// src/pages/Notifications.jsx
import React, { useEffect, useState } from "react";

export default function Notifications() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("recommendations");
    if (data) {
      setRecommendations(JSON.parse(data));
    }
  }, []);

  return (
    <div className="notifications-dashboard">
      <h2>🔔 Recommendations for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Make a purchase to receive suggestions!</p>
      ) : (
        <div className="product-grid">
          {recommendations.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>M{item.price}</p>
              <div className="rating">{item.rating}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
