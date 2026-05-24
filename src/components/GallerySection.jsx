import React, { useState } from 'react';
import Lightbox from './Lightbox';

import galleryGift from '../assets/gallery_real_gift.jpg';
import galleryKids from '../assets/gallery_real_kids.jpg';
import galleryCart from '../assets/gallery_real_cart.jpg';
import galleryBadges from '../assets/gallery_real_badges.jpg';
import galleryFood from '../assets/gallery_real_food.jpg';
import galleryBriefing from '../assets/gallery_real_briefing.jpg';
import galleryTeam from '../assets/gallery_real_team.jpg';
import galleryPacking from '../assets/gallery_real_packing.jpg';
import galleryYouth from '../assets/gallery_real_youth.jpg';
import galleryServing from '../assets/gallery_real_serving.jpg';
import galleryLoading from '../assets/gallery_real_loading.jpg';
import galleryVan from '../assets/gallery_real_van.jpg';
import galleryEidDelivery from '../assets/gallery_real_eid_delivery.jpg';
import galleryEidPrep from '../assets/gallery_real_eid_prep.jpg';
import galleryEidChecking from '../assets/gallery_real_eid_checking.jpg';

const row1Images = [
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
    src: galleryBriefing,
    caption: 'Volunteer Briefing Session',
    alt: 'A bearded coordinator in a neon vest giving operational instructions to active volunteers before starting a distribution drive.'
  },
  {
    src: galleryTeam,
    caption: 'Welfare Distribution Assembly',
    alt: 'A group of Zainab Helping Hands volunteers standing proudly side-by-side inside the brick-walled distribution center.'
  },
  {
    src: galleryServing,
    caption: 'Flood Relief Camp Food Service',
    alt: 'A dedicated volunteer coordinator serving warm rice dishes directly to children at the local flood relief campsite.'
  },
  {
    src: galleryYouth,
    caption: 'Youth Volunteer Brigade',
    alt: 'A lineup of eight passionate young volunteers in matching neon green vests, smiling and prepared to support ground operations.'
  },
  {
    src: galleryEidPrep,
    caption: 'Eid Meat Preparation & Packaging',
    alt: 'Freshly cut sacrificial meat portions laid out on a red sheet, being sorted and packed into clear bags for distribution in front of a celebratory Eid-ul-Adha Mubarak banner.'
  },
  {
    src: galleryEidDelivery,
    caption: 'Doorstep Eid Meat Distribution',
    alt: 'A smiling volunteer in a traditional shalwar kameez and prayer cap delivering a fresh meat pack directly to a family doorway at a traditional brick house.'
  }
];

const row2Images = [
  {
    src: galleryCart,
    caption: 'Meal Cargo Ready for Distribution',
    alt: 'A red three-wheel cargo loader packed with cooked lunch boxes and juice cartons, prepared for street food distribution drives.'
  },
  {
    src: galleryFood,
    caption: 'Organized Styrofoam Food Packages',
    alt: 'Neatly organized white styrofoam lunch boxes in bags, prepped and stickered with the organization label for the daily food drive.'
  },
  {
    src: galleryPacking,
    caption: 'Bagging Prepared Meals',
    alt: 'Two dedicated youth volunteers in safety vests working on their knees to pack individual hot meals into distribution bags.'
  },
  {
    src: galleryLoading,
    caption: 'Loading Relief Sacks',
    alt: 'Volunteers actively working together to distribute and load large relief packages and daily goods from a cargo truck.'
  },
  {
    src: galleryVan,
    caption: 'Flood Relief Camp Transport Prep',
    alt: 'Zainab Helping Hands volunteers preparing the side banner of a white distribution van containing essential goods for the flood relief camp.'
  },
  {
    src: galleryBadges,
    caption: 'Dedicated Volunteer Network Badges',
    alt: 'Stacked official volunteer ID badges printed with Zainab Helping Hands titles, social handles, and logos in transparent protective cases.'
  },
  {
    src: galleryEidChecking,
    caption: 'Eid Campaign Quality Check',
    alt: 'A dedicated volunteer in a traditional grey shalwar kameez and patterned prayer cap inspecting a freshly packed meat bag before distribution in front of a red metal gate.'
  }
];

const allImages = [...row1Images, ...row2Images];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNav = (dir) => {
    setActiveIndex(prev => {
      if (prev === null) return null;
      let next = prev + dir;
      if (next < 0) next = allImages.length - 1;
      if (next >= allImages.length) next = 0;
      return next;
    });
  };

  return (
    <section id="gallery" className="relative bg-[#0A1A0F] py-24 md:py-32 overflow-hidden border-t border-b border-white/5">
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 45s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 45s linear infinite;
        }
        .marquee-container:hover .marquee-track-left,
        .marquee-container:hover .marquee-track-right {
          animation-play-state: paused;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Decorative radial background */}
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

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <span className="font-body uppercase tracking-[0.25em] text-gold-500 text-xs font-semibold mb-4 block animate-pulse">
            ✦ Ground Reality & Transparency ✦
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Our Impact in Pictures
          </h2>
          <div className="h-[1px] w-[120px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Endless Marquee Wrapper */}
        <div className="relative w-full space-y-6 md:space-y-8 py-4 marquee-container">
          
          {/* Subtle Fading Edge Overlays (Not Heavy/Dark Shadows) */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-28 bg-gradient-to-r from-[#0A1A0F]/30 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-28 bg-gradient-to-l from-[#0A1A0F]/30 to-transparent z-20 pointer-events-none" />

          {/* Row 1: Leftward Infinite Marquee */}
          <div className="overflow-hidden w-full flex">
            <div className="marquee-track-left gap-4 md:gap-6 px-2">
              {/* Render original list */}
              {row1Images.map((img, i) => (
                <div 
                  key={`r1-${i}`}
                  className="w-[260px] sm:w-[340px] md:w-[420px] aspect-[4/3] relative rounded-xl overflow-hidden group/card cursor-pointer border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex-shrink-0 shadow-lg"
                  onClick={() => setActiveIndex(i)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle, minimal caption displayed only on hover (No heavy dark overlays) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-gold-500 font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-1">
                      ✦ ZHH Welfare Drive ✦
                    </span>
                    <h3 className="text-white font-heading text-base sm:text-lg">
                      {img.caption}
                    </h3>
                  </div>
                </div>
              ))}
              {/* Duplicate list for mathematically seamless looping */}
              {row1Images.map((img, i) => (
                <div 
                  key={`r1-dup-${i}`}
                  className="w-[260px] sm:w-[340px] md:w-[420px] aspect-[4/3] relative rounded-xl overflow-hidden group/card cursor-pointer border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex-shrink-0 shadow-lg"
                  onClick={() => setActiveIndex(i)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-gold-500 font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-1">
                      ✦ ZHH Welfare Drive ✦
                    </span>
                    <h3 className="text-white font-heading text-base sm:text-lg">
                      {img.caption}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Infinite Marquee */}
          <div className="overflow-hidden w-full flex">
            <div className="marquee-track-right gap-4 md:gap-6 px-2">
              {/* Render original list */}
              {row2Images.map((img, i) => (
                <div 
                  key={`r2-${i}`}
                  className="w-[260px] sm:w-[340px] md:w-[420px] aspect-[4/3] relative rounded-xl overflow-hidden group/card cursor-pointer border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex-shrink-0 shadow-lg"
                  onClick={() => setActiveIndex(row1Images.length + i)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-gold-500 font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-1">
                      ✦ ZHH Welfare Drive ✦
                    </span>
                    <h3 className="text-white font-heading text-base sm:text-lg">
                      {img.caption}
                    </h3>
                  </div>
                </div>
              ))}
              {/* Duplicate list for mathematically seamless looping */}
              {row2Images.map((img, i) => (
                <div 
                  key={`r2-dup-${i}`}
                  className="w-[260px] sm:w-[340px] md:w-[420px] aspect-[4/3] relative rounded-xl overflow-hidden group/card cursor-pointer border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex-shrink-0 shadow-lg"
                  onClick={() => setActiveIndex(row1Images.length + i)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-gold-500 font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-1">
                      ✦ ZHH Welfare Drive ✦
                    </span>
                    <h3 className="text-white font-heading text-base sm:text-lg">
                      {img.caption}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Clickable Lightbox Presentation */}
      <Lightbox 
        images={allImages.map(g => g.src)} 
        activeIndex={activeIndex} 
        onClose={() => setActiveIndex(null)} 
        onNav={handleNav} 
      />
    </section>
  );
}


