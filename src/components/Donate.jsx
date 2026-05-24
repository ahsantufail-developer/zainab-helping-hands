import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import './Donate.css';

const Donate = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleReveal = () => {
    setShowDetails(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="donate" className="donate-section">
      <div className="container">
        <div className="donate-box">
          <h2 className="section-title text-center">Eid ul Azha Fund</h2>
          <p className="donate-subtitle text-center">
            Target: Rs. 500,000 (5 Lakh) for meat distribution and new clothes.
          </p>
          
          {!showDetails ? (
            <button className="btn btn-primary btn-large reveal-btn" onClick={handleReveal}>
              Reveal Payment Details & QR
            </button>
          ) : (
            <div className="payment-details-container">
              <div className="bank-cards">
                <div className="bank-card">
                  <h4>Meezan Bank</h4>
                  <p>Account Title: Muhammad Abubakar Ejaz</p>
                  <p className="account-number">12560108600042</p>
                </div>
                <div className="bank-card">
                  <h4>EasyPaisa</h4>
                  <p>Account Title: Muhammad Abubakar Ejaz</p>
                  <p className="account-number">03106496614</p>
                </div>
              </div>
              
              <div className="qr-section">
                <p>Scan to Pay via EasyPaisa</p>
                <div className="qr-code-wrapper">
                  <QRCodeSVG value="03106496614" size={150} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Donate;