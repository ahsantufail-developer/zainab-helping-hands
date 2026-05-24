import React, { useState } from 'react';
import Lightbox from './Lightbox';

const galleryImages = [
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&auto=format&fit=crop&q=80',
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <section id="gallery" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-up">
          <span className="font-body uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">Our Impact in Pictures</span>
          <h2 className="font-heading text-4xl text-green-950 mb-6">
            Witness the Difference You Make
          </h2>
          <div className="h-[1px] w-[100px] bg-gold-500 mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <div 
              key={i}
              className="relative overflow-hidden rounded-lg cursor-pointer group break-inside-avoid"
              onClick={() => setActiveIndex(i)}
            >
              <img 
                src={src} 
                alt={`Gallery ${i+1}`}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to top, rgba(10,26,15,0.92) 0%, rgba(10,26,15,0.40) 50%, transparent 100%)' }}
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox 
        images={galleryImages} 
        activeIndex={activeIndex} 
        onClose={() => setActiveIndex(null)} 
        onNav={handleNav} 
      />
    </section>
  );
}
