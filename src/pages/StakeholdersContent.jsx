import React from 'react';
import '../index.css'; // Make sure your styles.css content is merged into this

function Stakeholders() {
  return (
    <>
      <h1>📊 IWB Stakeholders</h1>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Average Response Time</h3>
          <div className="metric">8.14 hrs</div>
          <p>↓ Improved by 3.09 hrs from last month</p>
        </div>

        <div className="card">
          <h3>Customer Satisfaction</h3>
          <div className="metric">83.32%</div>
          <p>↑ Up from 66.66%</p>
        </div>

        <div className="card">
          <h3>Net Promoter Score (NPS)</h3>
          <div className="metric">+40</div>
          <p>69.43% Promoters, 19.43% Detractors</p>
        </div>

        <div className="card">
          <h3>Stakeholders</h3>
          <ul>
            <li>Kenneth – Co-Founder & Strategic Lead</li>
            <li>Shadrack – Partner & Operations Manager</li>
          </ul>
        </div>

        <div className="card">
          <h3>Recent Activities</h3>
          <p>No recent updates. Stakeholders can log in to track product launches, approvals, and strategy meetings.</p>
        </div>

        <div className="card">
          <h3>Customer Effort Score</h3>
          <div className="metric">20%</div>
          <p>Based on recent support tickets.</p>
        </div>
      </div>

      <style jsx="true">{`
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 0 40px 40px;
        }

        .metric {
          font-size: 2rem;
          color: #004e12;
        }
      `}</style>
    </>
  );
}

export default Stakeholders;
