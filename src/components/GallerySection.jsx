import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

import galleryGift from '../assets/gallery_real_gift.jpg';
import galleryKids from '../assets/gallery_real_kids.jpg';
import galleryCart from '../assets/gallery_real_cart.jpg';
import galleryBadges from '../assets/gallery_real_badges.jpg';
import galleryFood from '../assets/gallery_real_food.jpg';

const galleryImages = [
  {
    src: galleryGift,
    caption: 'Gift Packs for Community Smiles',
    alt: 'Hand holding a gift pack wrapped with a pink ribbon and a note reading "A little treat for the smiles", with rows of packed gift bags lined up behind.'
  },
  {
    src: galleryKids,
    caption: 'Childhood Care & Creativity',
    alt: 'A young girl in a vibrant floral dress sitting on a floor mat and coloring a drawing on a clipboard during a kids activity session.'
  },
  {
    src: galleryCart,
    caption: 'Meal Cargo Ready for Distribution',
    alt: 'A red three-wheel cargo loader packed with cooked lunch boxes and juice cartons, prepared for street food distribution drives.'
  },
  {
    src: galleryBadges,
    caption: 'Dedicated Volunteer Network',
    alt: 'Stacked official volunteer ID badges printed with Zainab Helping Hands titles, social handles, and logos in transparent protective cases.'
  },
  {
    src: galleryFood,
    caption: 'Organized Styrofoam Food Packages',
    alt: 'Neatly organized white styrofoam lunch boxes in bags, prepped and stickered with the organization label for the daily food drive.'
  }
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleNav = (dir) => {
    setActiveIndex(prev => {
      if (prev === null) return null;
      let next = prev + dir;
      if (next < 0) next = galleryImages.length - 1;
      if (next >= galleryImages.length) next = 0;
      return next;
    });
  };

  return (
    <section id="gallery" className="relative bg-[#0A1A0F] py-24 md:py-32 overflow-hidden border-t border-b border-white/5">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C9952A" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <motion.span 
            className="font-body uppercase tracking-[0.25em] text-gold-500 text-xs font-semibold mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ Transparency In Action ✦
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl md:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Impact in Pictures
          </motion.h2>
          <motion.div 
            className="h-[1px] w-[120px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group w-full">
          
          {/* Dark Color Blur/Gradient Overlays at Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-48 bg-gradient-to-r from-[#0A1A0F] via-[#0A1A0F]/70 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-48 bg-gradient-to-l from-[#0A1A0F] via-[#0A1A0F]/70 to-transparent z-20 pointer-events-none" />

          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-gold-500 hover:text-green-950 active:scale-95 border border-white/10 text-white rounded-full p-4 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-md hidden sm:block"
            aria-label="Scroll Left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-gold-500 hover:text-green-950 active:scale-95 border border-white/10 text-white rounded-full p-4 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-md hidden sm:block"
            aria-label="Scroll Right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Horizontal Scroll Box */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-8 sm:px-24 md:px-36"
            style={{ scrollbarWidth: 'none' }}
          >
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-none w-[290px] sm:w-[380px] md:w-[480px] aspect-[4/3] relative rounded-2xl overflow-hidden snap-center group/card cursor-pointer border border-white/10 shadow-2xl hover:border-gold-500/40 hover:shadow-[0_0_40px_rgba(201,149,42,0.15)] transition-all duration-500"
                onClick={() => setActiveIndex(i)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover/card:scale-105"
                  loading="lazy"
                />
                
                {/* Visual card overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0A1A0F] via-[#0A1A0F]/30 to-transparent flex flex-col justify-end p-6 sm:p-8 opacity-90 group-hover/card:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-gold-500 font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-1.5 block">
                    ✦ Live Welfare Drive ✦
                  </span>
                  <h3 className="text-white font-heading text-lg sm:text-xl md:text-2xl mb-2 leading-snug">
                    {img.caption}
                  </h3>
                  <p className="text-white/60 font-body text-xs sm:text-sm leading-relaxed line-clamp-2 transform translate-y-3 group-hover/card:translate-y-0 transition-transform duration-500">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox for large-screen presentation */}
      <Lightbox 
        images={galleryImages.map(g => g.src)} 
        activeIndex={activeIndex} 
        onClose={() => setActiveIndex(null)} 
        onNav={handleNav} 
      />
    </section>
  );
}

