import React from "react";
import { Link } from "react-router-dom";

const NotificationBell = () => {
  const recommendations = JSON.parse(localStorage.getItem("recommendations") || "[]");

  return (
    <Link to="/notifications" className="bell-icon" title="Notifications">
      🔔
      {recommendations.length > 0 && <span className="notif-count">{recommendations.length}</span>}
    </Link>
  );
};

export default NotificationBell;
