import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const transparencyCards = [
  {
    stat: '90%',
    title: 'Direct Aid Delivery',
    description: 'The vast majority of every donation goes directly to buying raw food packs, clean water filtration units, and providing cash support to widows and orphans.',
    icon: (
      <svg className="w-6 h-6 text-gold-500 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    stat: '7%',
    title: 'Operations & Logistics',
    description: 'Covers secure transport, fuel for distribution vans, high-grade packaging materials to preserve food, and on-ground warehouse storage.',
    icon: (
      <svg className="w-6 h-6 text-gold-500 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  },
  {
    stat: '3%',
    title: 'Verification & Media',
    description: 'Funds high-definition cameras for donation transparency, secure volunteer badges, printing logs, and secure cloud storage for donor proofs.',
    icon: (
      <svg className="w-6 h-6 text-gold-500 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    stat: '100%',
    title: 'Shariah Compliance',
    description: 'Zakat, Sadqah, and Fitrana are strictly segregated into distinct bank accounts and disbursed under traditional Islamic rules.',
    icon: (
      <svg className="w-6 h-6 text-gold-500 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    stat: '0%',
    title: 'Overhead Leakage',
    description: 'Administrative salaries, advertising, software subscriptions, and transaction fees are 100% sponsored by our founders and trustees.',
    icon: (
      <svg className="w-6 h-6 text-gold-500 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    stat: 'Live',
    title: 'WhatsApp Proofs',
    description: 'Every donor receives direct WhatsApp video/photo evidence of their exact donation package being handed over to families.',
    icon: (
      <svg className="w-6 h-6 text-gold-500 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  }
];

export default function TransparencySection() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Header stagger animation
    gsap.fromTo(sectionRef.current.querySelectorAll('.reveal-transparency'),
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Staggered slide and fade-in for the cards
    gsap.fromTo(cardsRef.current,
      { opacity: 0, x: 60, scale: 0.96 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  const handleScroll = (e) => {
    const target = e.target;
    const totalScroll = target.scrollWidth - target.clientWidth;
    if (totalScroll <= 0) return;
    const progress = (target.scrollLeft / totalScroll) * 100;
    setScrollProgress(progress);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -380 : 380;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="impact" ref={sectionRef} className="relative bg-[#0A1A0F] py-24 md:py-32 overflow-hidden border-t border-b border-white/5">
      <style>{`
        .grid-bg-overlay {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        .card-grid-bg {
          background-size: 28px 28px;
          background-image: linear-gradient(to right, rgba(201, 149, 42, 0.06) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(201, 149, 42, 0.06) 1px, transparent 1px);
        }
      `}</style>

      {/* Grid Pattern and Faint Radial Glow */}
      <div className="absolute inset-0 grid-bg-overlay opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10 mx-auto px-4 max-w-7xl">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <span className="font-body uppercase tracking-[0.25em] text-gold-500 text-xs font-semibold mb-4 block reveal-transparency">
              ✦ 100% Financial Accountability ✦
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 reveal-transparency leading-tight">
              Every Single Rupee Documented
            </h2>
            <p className="font-body text-white/70 text-base sm:text-lg leading-relaxed reveal-transparency">
              We operate with absolute transparency. You shouldn't have to wonder where your charity goes. Browse the audited allocations and strict guidelines that govern every single donation.
            </p>
          </div>

          {/* Navigation controls */}
          <div className="flex gap-4 reveal-transparency self-start md:self-end">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-gold-500 hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-300 backdrop-blur-md"
              aria-label="Scroll Left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-gold-500 hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-300 backdrop-blur-md"
              aria-label="Scroll Right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Track Wrapper with side fading overlays */}
        <div className="relative w-full">
          <div className="absolute -left-4 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#0A1A0F] to-transparent z-20 pointer-events-none" />
          <div className="absolute -right-4 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#0A1A0F] to-transparent z-20 pointer-events-none" />

          {/* Horizontal Scrolling Row */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 no-scrollbar scroll-smooth snap-x snap-mandatory overflow-y-hidden"
          >
            {transparencyCards.map((card, idx) => (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="transparency-card flex-shrink-0 w-[300px] sm:w-[350px] aspect-square bg-gradient-to-br from-[#0F2D1C]/90 to-[#06150D]/95 border border-white/10 rounded-2xl p-7 sm:p-8 relative overflow-hidden group hover:border-gold-500/50 hover:shadow-[0_0_40px_rgba(201,149,42,0.12)] transition-all duration-500 snap-align-start flex flex-col justify-between"
              >
                {/* Custom Fine Grid Line Overlay on Hover */}
                <div className="absolute inset-0 card-grid-bg opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                
                {/* Glowing Aura in the Corner */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold-500/10 rounded-full blur-xl group-hover:bg-gold-500/20 transition-all duration-500 pointer-events-none" />

                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-gold-500/30 group-hover:bg-gold-500/10 transition-all duration-500">
                    {card.icon}
                  </div>
                  <span className="font-heading font-semibold text-3xl sm:text-4xl text-gold-500 group-hover:text-gold-400 group-hover:scale-105 transition-all duration-300 origin-right">
                    {card.stat}
                  </span>
                </div>

                {/* Middle / Bottom Section */}
                <div className="mt-8 relative z-10">
                  <h3 className="font-heading text-lg sm:text-xl text-white font-semibold mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Border Micro-Animation */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-gradient-to-r from-transparent via-gold-500 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Bar at the bottom */}
        <div className="max-w-xs sm:max-w-md mx-auto mt-8 flex flex-col items-center gap-3">
          <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-gold-500 rounded-full transition-all duration-75 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <span className="font-body text-[10px] text-textMuted uppercase tracking-widest">
            Drag or swipe to view full report
          </span>
        </div>

      </div>
    </section>
  );
}
