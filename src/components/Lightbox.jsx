import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ images, activeIndex, onClose, onNav }) {
  return (
    <AnimatePresence>
      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(10,26,15,0.95)', backdropFilter: 'blur(20px)' }}
          onClick={onClose}
        >
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); onNav(-1); }} 
            className="absolute left-6 text-white opacity-70 hover:opacity-100 text-6xl p-4 transition-opacity focus:outline-none"
          >
            ‹
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onNav(1); }} 
            className="absolute right-6 text-white opacity-70 hover:opacity-100 text-6xl p-4 transition-opacity focus:outline-none"
          >
            ›
          </button>
          
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-white opacity-70 hover:opacity-100 text-3xl p-4 transition-opacity focus:outline-none"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
