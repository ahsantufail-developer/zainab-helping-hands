import React from 'react';
import partnerShelter from '../assets/partner_shelter.png';
import partnerSuperior from '../assets/partner_superior.png';
import partnerDove from '../assets/partner_dove.png';
import partnerUrban from '../assets/partner_urban.png';
import partnerHolistic from '../assets/partner_holistic.png';

const partners = [
  { name: 'Shelter Welfare Association', src: partnerShelter },
  { name: 'The Superior College Lahore', src: partnerSuperior },
  { name: 'Dove Inn Group', src: partnerDove },
  { name: 'Urban Slice Pizza Cafe', src: partnerUrban },
  { name: 'Holistic Health Nexus', src: partnerHolistic }
];

export default function PartnersSection() {
  // Duplicate list twice to make a solid long stream for flawless seamless marquee looping
  const scrollList = [...partners, ...partners, ...partners];

  return (
    <div className="relative bg-[#07130B] border-t border-b border-white/20 py-8 overflow-hidden z-20">
      <style>{`
        @keyframes marqueePartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .partners-track {
          display: flex;
          width: max-content;
          animation: marqueePartners 25s linear infinite;
        }
      `}</style>
      
      {/* Mini Title above the track */}
      <div className="text-center mb-6 px-4">
        <span className="font-body text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.3em] font-semibold block">
          ✦ Our Trusted Corporate & Community Partners ✦
        </span>
      </div>

      {/* Infinite Scrolling track */}
      <div className="overflow-hidden w-full flex">
        <div className="partners-track gap-6 px-2">
          {/* Main List */}
          {scrollList.map((partner, idx) => (
            <div 
              key={`p1-${idx}`}
              className="flex-shrink-0 bg-white/95 rounded-xl px-5 py-3.5 flex items-center justify-center h-16 w-40 sm:h-20 sm:w-44 shadow-xl border border-white/10"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="max-h-full max-w-full object-contain filter hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate List for seamless wrapping */}
          {scrollList.map((partner, idx) => (
            <div 
              key={`p2-${idx}`}
              className="flex-shrink-0 bg-white/95 rounded-xl px-5 py-3.5 flex items-center justify-center h-16 w-40 sm:h-20 sm:w-44 shadow-xl border border-white/10"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="max-h-full max-w-full object-contain filter hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
