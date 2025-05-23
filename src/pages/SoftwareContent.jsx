import React from 'react';
import '../index.css'; // Ensure this imports your main CSS from the original site

function Software() {
  return (
    <>
      <h1>Our Software Tools</h1>

      <main className="content">
        <section className="software-dashboard">
          <div className="software-tool">
            <h3>Data Recovery Pro</h3>
            <p>Powerful tool for retrieving lost or deleted files from various storage devices.</p>
            <img src="/img/data-recovery.jpg" alt="Data Recovery Pro" />
          </div>

          <div className="software-tool">
            <h3>SecureWipe</h3>
            <p>Advanced software for secure deletion of sensitive data, compliant with global standards.</p>
            <img src="/img/secure-wipe.jpg" alt="SecureWipe" />
          </div>

          <div className="software-tool">
            <h3>System Optimizer</h3>
            <p>Boost performance and clean up redundant files to keep your systems fast and efficient.</p>
            <img src="/img/system-optimizer.jpg" alt="System Optimizer" />
          </div>

          <div className="software-tool">
            <h3>Drive Cloner</h3>
            <p>Clone your entire hard drive quickly and safely for backups or transfers.</p>
            <img src="/img/macrium software.jpg" alt="Drive Cloner" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Software;
