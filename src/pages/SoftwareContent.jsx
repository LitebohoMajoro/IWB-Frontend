import React from 'react';
import '../index.css';

import secureWipeImg from '../assets/secure-wipe.webp';
import optimizerImg from '../assets/system-optimizer.webp';
import clonerImg from '../assets/macrium software.webp';

function Software() {
  return (
    <>
      <h1>Our Software Tools</h1>
      <main className="content">
        <section className="software-dashboard">
          <div className="software-tool">
            <h3>SecureWipe</h3>
            <p>Advanced software for secure deletion of sensitive data, compliant with global standards.</p>
            <img src={secureWipeImg} alt="SecureWipe" />
          </div>

          <div className="software-tool">
            <h3>System Optimizer</h3>
            <p>Boost performance and clean up redundant files to keep your systems fast and efficient.</p>
            <img src={optimizerImg} alt="System Optimizer" />
          </div>

          <div className="software-tool">
            <h3>Drive Cloner</h3>
            <p>Clone your entire hard drive quickly and safely for backups or transfers.</p>
            <img src={clonerImg} alt="Drive Cloner" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Software;
