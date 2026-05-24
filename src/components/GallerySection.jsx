import React, { useState, useRef } from 'react';
import Lightbox from './Lightbox';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import galleryFood from '../assets/gallery_food.png';
import galleryWater from '../assets/gallery_water.png';
import galleryOrphan from '../assets/gallery_orphan.png';
import galleryDistribution from '../assets/gallery_distribution.png';
import galleryWidow from '../assets/gallery_widow.png';
import galleryMedical from '../assets/gallery_medical.png';

const galleryImages = [
  { src: galleryFood, caption: 'Rashan Package Preparation' },
  { src: galleryWater, caption: 'Clean Water Installation' },
  { src: galleryOrphan, caption: 'Orphan Support Program' },
  { src: galleryDistribution, caption: 'Monthly Distribution Drive' },
  { src: galleryWidow, caption: 'Widow & Family Support' },
  { src: galleryMedical, caption: 'Free Medical Camp' },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

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
    <section id="gallery" ref={sectionRef} className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-up">
          <span className="font-body uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">Our Impact in Pictures</span>
          <h2 className="font-heading text-4xl md:text-5xl text-green-950 mb-6">
            Witness the Difference You Make
          </h2>
          <div className="h-[1px] w-[100px] bg-gold-500 mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <div 
              key={i}
              className="relative overflow-hidden rounded-lg cursor-pointer group break-inside-avoid"
              onClick={() => setActiveIndex(i)}
            >
              <img 
                src={img.src} 
                alt={img.caption}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(10,26,15,0.92) 0%, rgba(10,26,15,0.40) 50%, transparent 100%)' }}
              >
                <span className="font-body text-white text-sm font-medium">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox 
        images={galleryImages.map(g => g.src)} 
        activeIndex={activeIndex} 
        onClose={() => setActiveIndex(null)} 
        onNav={handleNav} 
      />
    </section>
  );
}
