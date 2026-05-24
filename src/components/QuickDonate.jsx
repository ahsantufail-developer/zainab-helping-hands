import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import qrMeezan from '../assets/qr_real_meezan.jpg';
import qrEasypaisa from '../assets/qr_real_easypaisa.jpg';

const MILESTONES = [
  { amount: 500, icon: '🌾', label: 'Feed a child for a week', hadith: '"The best charity is that given in Ramadan." — Tirmidhi' },
  { amount: 1000, icon: '📦', label: 'Emergency food kit', hadith: '"Charity does not decrease wealth." — Sahih Muslim' },
  { amount: 2500, icon: '💧', label: 'Clean water for a family', hadith: '"The best of charity is giving water to drink." — Ahmad' },
  { amount: 5000, icon: '🏠', label: 'Full Rashan Package', hadith: '"Whoever feeds a fasting person will have a reward like that of the fasting person." — Tirmidhi' },
  { amount: 10000, icon: '🤲', label: 'Widow & orphan monthly care', hadith: '"I and the one who sponsors an orphan will be like these two in Paradise." — Bukhari' },
  { amount: 25000, icon: '🕌', label: 'Sadaqah Jariyah — water well share', hadith: '"When a person dies, his deeds come to an end except for three: Sadaqah Jariyah..." — Muslim' },
  { amount: 50000, icon: '⭐', label: 'Complete water installation', hadith: '"Give charity without delay, for it stands in the way of calamity." — Tirmidhi' },
];

const PAYMENT_METHODS = [
  {
    id: 'meezan',
    name: 'Meezan Bank',
    icon: '🏦',
    color: '#00634B',
    accountTitle: 'Muhammad Abu Bakar Ejaz',
    accountNumber: '12560108600042',
    details: 'Meezan Bank Ltd.'
  },
  {
    id: 'easypaisa',
    name: 'EasyPaisa',
    icon: '📱',
    color: '#3AAA35',
    accountTitle: 'Muhammad Abu Bakkar Ejaz',
    accountNumber: '03106496614',
    details: 'EasyPaisa Wallet'
  }
];

function formatPKR(num) {
  return new Intl.NumberFormat('en-PK').format(num);
}

export default function QuickDonate() {
  const [amount, setAmount] = useState(5000);
  const [selectedMethod, setSelectedMethod] = useState('meezan');
  const [qrGenerated, setQrGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const sliderRef = useRef(null);

  const currentMilestone = useMemo(() => {
    let m = MILESTONES[0];
    for (const ms of MILESTONES) {
      if (amount >= ms.amount) m = ms;
    }
    return m;
  }, [amount]);

  const nextMilestone = useMemo(() => {
    return MILESTONES.find(ms => ms.amount > amount) || MILESTONES[MILESTONES.length - 1];
  }, [amount]);

  const progressToNext = useMemo(() => {
    if (amount >= nextMilestone.amount) return 100;
    const prev = MILESTONES[MILESTONES.indexOf(nextMilestone) - 1]?.amount || 0;
    return ((amount - prev) / (nextMilestone.amount - prev)) * 100;
  }, [amount, nextMilestone]);

  const method = PAYMENT_METHODS.find(m => m.id === selectedMethod);

  const qrValue = useMemo(() => {
    const ref = `ZHH-${Date.now().toString().slice(-6)}`;
    if (selectedMethod === 'meezan') {
      return `bank://meezan?account=12560108600042&title=Muhammad+Abubakar+Ejaz&amount=${amount}&ref=${ref}`;
    }
    return `easypaisa://pay?account=03106496614&title=Muhammad+Abubakar+Ejaz&amount=${amount}&ref=${ref}`;
  }, [amount, selectedMethod]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerate = () => {
    setQrGenerated(true);
  };

  // Slider percentage for styling
  const sliderPercent = ((Math.log(amount) - Math.log(100)) / (Math.log(100000) - Math.log(100))) * 100;

  return (
    <section id="quick-donate" className="relative overflow-hidden bg-[#0A1A0F]">
      {/* Islamic geometric pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9952A' stroke-width='0.5'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z'/%3E%3Cpath d='M40 10L70 40L40 70L10 40Z'/%3E%3Cpath d='M40 20L60 40L40 60L20 40Z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10 py-20 md:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block font-body uppercase tracking-[0.3em] text-gold-500 text-xs font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            ✦ Quick Donate ✦
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            Choose Your Impact Level
          </motion.h2>
          <motion.p 
            className="font-body text-white/60 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Slide to set your donation. Every Rupee is an amanah — and every amanah earns its reward.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Amount Display */}
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          >
            <div className="inline-block bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl px-10 py-8">
              <div className="font-body text-white/50 text-sm uppercase tracking-widest mb-2">Your Donation</div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-body text-gold-500 text-2xl">₨</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={amount}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="font-heading text-6xl md:text-7xl text-white tabular-nums"
                  >
                    {formatPKR(amount)}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Current Impact */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMilestone.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-3 bg-green-900/50 border border-green-700/30 rounded-full px-6 py-3">
                <span className="text-2xl">{currentMilestone.icon}</span>
                <span className="font-body text-green-300 font-medium">{currentMilestone.label}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider */}
          <div className="relative mb-6 px-2">
            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ 
                  width: `${sliderPercent}%`,
                  background: 'linear-gradient(90deg, #16A34A, #C9952A)'
                }}
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
            <input
              ref={sliderRef}
              type="range"
              min={Math.log(100)}
              max={Math.log(100000)}
              step={0.01}
              value={Math.log(amount)}
              onChange={(e) => {
                const raw = Math.exp(parseFloat(e.target.value));
                // Snap to nice round numbers
                let snapped;
                if (raw < 500) snapped = Math.round(raw / 50) * 50;
                else if (raw < 5000) snapped = Math.round(raw / 100) * 100;
                else if (raw < 20000) snapped = Math.round(raw / 500) * 500;
                else snapped = Math.round(raw / 1000) * 1000;
                setAmount(Math.max(100, Math.min(100000, snapped)));
                setQrGenerated(false);
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              style={{ margin: 0 }}
            />
            {/* Milestone markers */}
            <div className="absolute top-0 left-0 right-0 h-3 pointer-events-none">
              {MILESTONES.map(ms => {
                const pos = ((Math.log(ms.amount) - Math.log(100)) / (Math.log(100000) - Math.log(100))) * 100;
                return (
                  <div 
                    key={ms.amount}
                    className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300
                      ${amount >= ms.amount ? 'bg-gold-500 scale-125' : 'bg-white/30'}`}
                    style={{ left: `${pos}%`, transform: `translateX(-50%) translateY(-50%)` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Next milestone progress */}
          {amount < MILESTONES[MILESTONES.length - 1].amount && (
            <div className="text-center mb-12">
              <div className="font-body text-white/40 text-sm">
                <span className="text-gold-500">₨{formatPKR(nextMilestone.amount - amount)}</span> more to unlock: <span className="text-white/70">{nextMilestone.icon} {nextMilestone.label}</span>
              </div>
            </div>
          )}

          {/* Hadith */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMilestone.hadith}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center mb-14"
            >
              <blockquote className="font-heading text-xl md:text-2xl text-white/50 italic max-w-2xl mx-auto leading-relaxed">
                {currentMilestone.hadith}
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Payment Method Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            {PAYMENT_METHODS.map(pm => (
              <button
                key={pm.id}
                onClick={() => { setSelectedMethod(pm.id); setQrGenerated(false); }}
                className={`relative px-6 py-3 rounded-xl font-body font-medium text-sm transition-all duration-300 flex items-center gap-2
                  ${selectedMethod === pm.id 
                    ? 'bg-white/10 text-white border border-gold-500/50 shadow-[0_0_20px_rgba(201,149,42,0.15)]' 
                    : 'bg-white/[0.03] text-white/50 border border-white/10 hover:bg-white/[0.06] hover:text-white/70'}`}
              >
                <span className="text-lg">{pm.icon}</span>
                {pm.name}
                {selectedMethod === pm.id && (
                  <motion.div layoutId="activePayTab" className="absolute inset-0 border-2 border-gold-500 rounded-xl pointer-events-none" />
                )}
              </button>
            ))}
          </div>

          {/* Generate Button / QR Display */}
          <AnimatePresence mode="wait">
            {!qrGenerated ? (
              <motion.div 
                key="generate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center"
              >
                <motion.button
                  onClick={handleGenerate}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-[#E8B84A] text-green-950 px-12 py-5 rounded-xl font-body font-bold text-lg tracking-wide shadow-[0_8px_32px_rgba(201,149,42,0.35)] hover:shadow-[0_12px_40px_rgba(201,149,42,0.5)] transition-shadow overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  <span className="relative flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                    </svg>
                    Generate QR Code — ₨{formatPKR(amount)}
                  </span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div 
                key="qr-result"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="max-w-lg mx-auto"
              >
                <div className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                  {/* Decorative corner patterns */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500/30 rounded-tl-2xl"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold-500/30 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold-500/30 rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500/30 rounded-br-2xl"></div>

                  <div className="text-center mb-6">
                    <div className="font-body text-sm text-gray-500 uppercase tracking-widest mb-1">Scan to Pay via</div>
                    <div className="font-heading text-2xl text-green-950 flex items-center justify-center gap-2">
                      <span>{method.icon}</span> {method.name}
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                      className="p-4 bg-white border-2 border-gray-100 rounded-xl shadow-inner flex justify-center items-center"
                    >
                      <img 
                        src={selectedMethod === 'meezan' ? qrMeezan : qrEasypaisa}
                        alt={`${method.name} Payment QR Code`}
                        className="w-[200px] h-[200px] object-contain rounded-lg"
                      />
                    </motion.div>
                  </div>

                  {/* Amount */}
                  <div className="text-center mb-6">
                    <div className="font-heading text-3xl text-green-950">
                      ₨ {formatPKR(amount)}
                    </div>
                    <div className="font-body text-sm text-gray-500 mt-1">{currentMilestone.icon} {currentMilestone.label}</div>
                  </div>

                  {/* Account Details */}
                  <div className="bg-gray-50 rounded-xl p-4 space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-body text-xs text-gray-500 uppercase tracking-wider">Account Title</span>
                      <span className="font-body text-sm text-green-950 font-semibold">{method.accountTitle}</span>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-xs text-gray-500 uppercase tracking-wider">
                        {selectedMethod === 'meezan' ? 'Account No.' : 'Mobile No.'}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-green-950 font-semibold tracking-wider">{method.accountNumber}</span>
                        <button 
                          onClick={() => handleCopy(method.accountNumber)}
                          className="text-gold-500 hover:text-gold-400 transition-colors p-1"
                          title="Copy"
                        >
                          {copied ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-xs text-gray-500 uppercase tracking-wider">Bank</span>
                      <span className="font-body text-sm text-green-950">{method.details}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setQrGenerated(false)}
                      className="flex-1 py-3 rounded-lg font-body text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      ← Change Amount
                    </button>
                    <a 
                      href={`https://wa.me/9203106496614?text=${encodeURIComponent(`Assalamu Alaikum, I have donated PKR ${formatPKR(amount)} via ${method.name}. Please confirm receipt. JazakAllah Khair.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 rounded-lg font-body text-sm font-medium text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors text-center"
                    >
                      Confirm via WhatsApp
                    </a>
                  </div>
                </div>

                {/* Trust badge */}
                <div className="text-center mt-6">
                  <div className="inline-flex items-center gap-2 text-white/40 font-body text-xs">
                    <span>🔒</span> Your donation is an amanah. Photo proof within 24 hours.
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
