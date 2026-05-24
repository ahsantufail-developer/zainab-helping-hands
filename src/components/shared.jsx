import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TiltCard = ({ children, className = '' }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: x * -14, y: y * 14 });
    setShine({ 
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100 
    });
  };

  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      style={{ transformPerspective: 1200 }}
      className={`relative ${className}`}
    >
      {children}
      {/* Specular gold shine that follows cursor */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${shine.x}% ${shine.y}%,
            rgba(201,149,42,0.18) 0%,
            transparent 65%
          )`,
          transition: 'opacity 0.2s'
        }}
      />
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.15 } }
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 55 },
      visible: { 
        opacity: 1, y: 0,
        transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    }}
  >
    {children}
  </motion.div>
);
