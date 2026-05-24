import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { generateQRValue } from '../utils/qrGenerator';

export default function QRPayment({ amount, cause, isMonthly, donorDetails, onComplete }) {
  const [activeTab, setActiveTab] = useState('easypaisa');

  const tabs = [
    { id: 'easypaisa', label: 'EasyPaisa' },
    { id: 'bank', label: 'Meezan Bank' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8">
      {/* Left Column: Summary Card */}
      <div>
        <div className="bg-green-900 rounded-lg p-8 border-t-[3px] border-gold-500 shadow-md">
          <h3 className="font-heading text-white text-2xl mb-6">Donation Summary</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="font-body text-[12px] uppercase tracking-widest text-gold-500">Cause</span>
              <span className="font-body text-[16px] text-white font-medium">{cause}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="font-body text-[12px] uppercase tracking-widest text-gold-500">Amount</span>
              <span className="font-body text-[16px] text-white font-medium">₨ {amount}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="font-body text-[12px] uppercase tracking-widest text-gold-500">Type</span>
              <span className="font-body text-[16px] text-white font-medium">{isMonthly ? 'Monthly Sadaqah' : 'One-time Donation'}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="font-body text-[12px] uppercase tracking-widest text-gold-500">Donor</span>
              <span className="font-body text-[16px] text-white font-medium">{donorDetails.name || 'Anonymous'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-[12px] uppercase tracking-widest text-gold-500">WhatsApp</span>
              <span className="font-body text-[16px] text-white font-medium">{donorDetails.phone}</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="font-arabic text-gold-500 text-2xl mb-2">إِنَّ اللَّهَ يَعْلَمُ مَا تُنفِقُونَ</div>
            <div className="font-body text-[13px] italic text-white/50">"Indeed, Allah knows what you spend." (2:270)</div>
          </div>
        </div>
      </div>

      {/* Right Column: QR/Payment Methods */}
      <div>
        <div className="flex space-x-2 border-b border-borderBase mb-8 relative">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-4 font-body text-sm font-medium transition-colors relative ${activeTab === tab.id ? 'text-green-950' : 'text-textMuted hover:text-green-700'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute left-0 right-0 bottom-[-1px] h-[2px] bg-gold-500"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'bank' ? (
                <div className="bg-surface rounded-lg p-6 border border-borderBase">
                  <h4 className="font-heading text-xl text-green-950 mb-4">Direct Bank Transfer</h4>
                  <div className="space-y-3 font-body text-sm text-green-950">
                    <p><span className="text-textMuted inline-block w-24">Bank:</span> <strong>Meezan Bank</strong></p>
                    <p><span className="text-textMuted inline-block w-24">Title:</span> <strong>Muhammad Abubakar Ejaz</strong></p>
                    <p><span className="text-textMuted inline-block w-24">Account:</span> <strong className="text-lg">12560108600042</strong></p>
                    <p><span className="text-textMuted inline-block w-24">IBAN:</span> <strong className="font-mono text-xs">PK42 MEZN 0012 5601 0860 0042</strong></p>
                  </div>
                  <div className="mt-6 p-3 bg-green-100 rounded text-green-800 text-sm flex items-center justify-center text-center">
                    Screenshot this and send to WhatsApp after transfer
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -10, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
                    className="qr-wrapper p-4 bg-white rounded-xl mb-6 shadow-sm border border-gray-100"
                  >
                    <QRCodeSVG 
                      value={generateQRValue(activeTab, amount, cause)}
                      size={200}
                      bgColor="#FFFFFF"
                      fgColor="#1A5C38"
                      level="H"
                      includeMargin={true}
                    />
                  </motion.div>
                  
                  <div className="font-display text-4xl text-gold-500 mb-6 font-bold">
                    ₨ {amount}
                  </div>

                  <div className="w-full bg-surface rounded-lg p-5">
                    <ol className="list-decimal list-inside space-y-2 font-body text-sm text-textMuted">
                      <li>Open <span className="font-semibold text-green-950 capitalize">{activeTab}</span> app</li>
                      <li>Scan this QR code</li>
                      <li>Send ₨ {amount} to complete</li>
                    </ol>
                    <div className="mt-4 pt-4 border-t border-borderBase text-center text-xs text-textMuted">
                      Or call/WhatsApp: <strong className="text-green-950">03106496614</strong>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={onComplete}
          className="w-full mt-8 bg-gold-500 text-green-950 font-body font-semibold h-14 rounded hover:bg-gold-400 hover:-translate-y-[2px] hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          I Have Completed My Donation <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
