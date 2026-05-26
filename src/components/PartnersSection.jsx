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
  return (
    <div className="relative bg-[#07130B] border-t border-b border-white/10 py-10 overflow-hidden z-20">
      <style>{`
        @keyframes marqueePartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partners-track {
          display: flex;
          width: max-content;
          animation: marqueePartners 30s linear infinite;
        }
        .partner-logo-container {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 640px) {
          .partner-logo-container {
            height: 68px;
          }
        }
        @media (min-width: 1024px) {
          .partner-logo-container {
            height: 88px;
          }
        }
      `}</style>
      
      {/* Mini Title above the track */}
      <div className="text-center mb-8 px-4">
        <span className="font-body text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.4em] font-semibold block">
          ✦ Our Trusted Corporate & Community Partners ✦
        </span>
      </div>

      {/* Infinite Scrolling track */}
      <div className="overflow-hidden w-full flex items-center">
        <div className="partners-track gap-16 sm:gap-24 md:gap-32 px-4 items-center">
          {/* First copy of the 5 unique partners */}
          {partners.map((partner, idx) => (
            <div 
              key={`p1-${idx}`}
              className="partner-logo-container flex-shrink-0 px-4"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="h-full w-auto object-contain hover:scale-105 transition-all duration-300 pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
          {/* Second duplicate copy of the 5 unique partners for perfect seamless wrapping */}
          {partners.map((partner, idx) => (
            <div 
              key={`p2-${idx}`}
              className="partner-logo-container flex-shrink-0 px-4"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="h-full w-auto object-contain hover:scale-105 transition-all duration-300 pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



