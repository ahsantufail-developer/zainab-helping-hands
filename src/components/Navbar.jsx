import React, { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo_figures.png';

gsap.registerPlugin(ScrollTrigger);

const navLinks = ['Mission', 'Programs', 'Process', 'Impact', 'Gallery', 'Team'];

export default function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 'top -60',
      onEnter: () => gsap.to(navRef.current, {
        backgroundColor: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 2px 32px rgba(0,0,0,0.08)',
        duration: 0.4,
        ease: 'power2.out'
      }),
      onLeaveBack: () => gsap.to(navRef.current, {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
        boxShadow: 'none',
        duration: 0.3
      })
    });
  }, { scope: navRef });

  return (
    <>
      <nav ref={navRef} className="navbar fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
        <div className="container-custom h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 text-green-950">
            <img src={logoImg} alt="Zainab Helping Hands Logo" className="w-10 h-10 object-contain" />
            <span className="font-heading text-xl tracking-wide">Zainab Helping Hands</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="font-body text-[13px] uppercase tracking-widest text-green-950 hover:text-gold-500 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Donate CTA */}
          <div className="hidden md:block">
            <button 
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold-500 text-green-950 px-6 py-2.5 rounded font-body font-medium text-sm tracking-wide hover:bg-gold-400 hover:-translate-y-0.5 transition-all shadow-md"
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-green-950 p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-green-950 flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-heading text-3xl text-white hover:text-gold-500 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 bg-gold-500 text-green-950 px-8 py-3 rounded-md font-body font-medium text-lg tracking-wide hover:bg-gold-400"
              >
                Donate Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}