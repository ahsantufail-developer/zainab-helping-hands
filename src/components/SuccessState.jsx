import React from 'react';
import { motion } from 'framer-motion';

export default function SuccessState({ amount, cause }) {
  const ref = `ZHH-${Math.floor(Math.random() * 900000) + 100000}`;
  const whatsappMsg = encodeURIComponent(`I just donated ₨${amount} to Zainab Helping Hands for ${cause}. Join me in making a difference. zainabhelpinghands.org`);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className="max-w-2xl mx-auto bg-green-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMjBsMjAtMjBMMDAgMjBoNDB2NDBIMDB6IiBmaWxsPSIjQzk5NTJBIiBmaWxsLW9wYWNpdHk9IjAuMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Animated Checkmark SVG */}
        <div className="w-24 h-24 mx-auto mb-8 relative flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.circle
              cx="50" cy="50" r="45"
              fill="none"
              stroke="var(--gold-500)"
              strokeWidth="4"
              initial={{ strokeDasharray: 283, strokeDashoffset: 283 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
            <motion.path
              d="M30 50 L45 65 L70 35"
              fill="none"
              stroke="var(--gold-500)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
            />
          </svg>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl text-gold-500 mb-6">
          JazakAllahu Khayran
        </h2>
        
        <p className="font-body text-white/90 text-lg leading-relaxed max-w-md mx-auto mb-8">
          Your donation has been received. We will send you WhatsApp confirmation within 24 hours with photo proof.
        </p>
        
        <div className="font-mono text-sm text-white/60 mb-10 bg-green-950 inline-block px-4 py-2 rounded-full border border-white/10">
          Ref: {ref}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`https://wa.me/?text=${whatsappMsg}`}
            target="_blank" rel="noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-6 py-3 rounded font-body font-semibold hover:-translate-y-1 transition-transform flex items-center justify-center gap-2"
          >
            Share on WhatsApp
          </a>
          <button 
            onClick={() => navigator.clipboard.writeText(ref)}
            className="w-full sm:w-auto bg-green-800 text-white px-6 py-3 rounded font-body font-semibold hover:bg-green-700 transition-colors flex items-center justify-center border border-white/20"
          >
            Copy Donation ID
          </button>
        </div>
      </div>
    </motion.div>
  );
}
