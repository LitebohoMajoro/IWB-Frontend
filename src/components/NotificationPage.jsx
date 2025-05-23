import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NotificationPage() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("recommendations");
    if (data) {
      setRecommendations(JSON.parse(data));
    }
  }, []);

  return (
    <div className="notification-page">
      <nav className="top-nav">
        <h2>🔔 Notifications</h2>
        <Link to="/" className="back-link">← Back to Cart</Link>
      </nav>

      <h3>Based on your recent purchases, you may like:</h3>
      <div className="product-grid">
        {recommendations.length === 0 ? (
          <p>No new suggestions at this time.</p>
        ) : (
          recommendations.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>M{item.price}</p>
              <div className="rating">{item.rating}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
