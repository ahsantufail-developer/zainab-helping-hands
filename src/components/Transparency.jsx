import React from 'react';
import './Transparency.css';

const Transparency = () => {
  return (
    <section id="transparency" className="transparency-section">
      <div className="container">
        <h2 className="section-title text-center">Open Audited Ledgers</h2>
        <p className="section-subtitle text-center mx-auto">
          Every Rupee tracked, verified, and displayed. Transparency is the foundation of the Amanah.
        </p>
        <div className="ledger-table">
          <div className="ledger-row header">
            <div>Batch ID</div>
            <div>Deployment</div>
            <div>Amount</div>
            <div>Status</div>
          </div>
          <div className="ledger-row">
            <div>BATCH-204A</div>
            <div>120 Food Packs delivered to Sector G-12</div>
            <div>Rs. 240,000</div>
            <div>Verified</div>
          </div>
          <div className="ledger-row">
            <div>BATCH-204B</div>
            <div>Deep-bore Handpump Installation in Sindh</div>
            <div>Rs. 150,000</div>
            <div>Audited</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;