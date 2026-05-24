import React, { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { StaggerContainer, StaggerItem, TiltCard } from './shared';

import aliImg from '../assets/founder1.jpg';
import abubakarImg from '../assets/founder2.jpg';
import hadiImg from '../assets/founder3.jpg';

const team = [
  {
    name: 'Muhammad Ali',
    role: 'Founder',
    color: '#DC2626',
    desc: 'Responsible for establishing the vision and groundwork for our welfare initiatives. His relentless dedication laid the foundation of Zainab Helping Hands.',
    image: aliImg,
    orderClass: 'order-2 md:order-1'
  },
  {
    name: 'Muhammad Abubakar Ejaz',
    role: 'Founder',
    color: '#2563EB',
    desc: 'Working alongside Muhammad Ali to build, fund, and expand the reach of our community support network across Pakistan.',
    image: abubakarImg,
    orderClass: 'order-3 md:order-2'
  },
  {
    name: 'Syed Abdul Hadi Usman',
    role: 'Chief Executive Officer',
    color: '#16A34A',
    desc: 'Leading daily operations, managing strategy, and directing the executive execution of all humanitarian projects.',
    image: hadiImg,
    orderClass: 'order-1 md:order-3'
  }
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section id="team" ref={sectionRef} className="section-padding bg-[#0F2518] relative overflow-hidden text-white">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9952A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
          <span className="font-body uppercase tracking-[0.25em] text-gold-500 text-xs font-semibold mb-4 block">
            Leadership
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            The Hands Behind<br/>the Mission
          </h2>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Meet the visionaries who turned compassion into action and built a movement that has impacted thousands of lives.
          </p>
          <div className="h-[2px] w-[80px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Team Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, i) => (
            <StaggerItem key={i} className={`h-full ${member.orderClass}`}>
              <TiltCard className="h-full rounded-2xl overflow-hidden group cursor-pointer relative bg-green-950/80 border border-white/[0.08] backdrop-blur-sm">
                {/* Image Container */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(to top, rgba(10,26,15,0.95) 0%, rgba(10,26,15,0.5) 35%, rgba(10,26,15,0.1) 60%, transparent 100%)` 
                    }}
                  />
                  
                  {/* Color accent line at bottom of image */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[3px] opacity-80"
                    style={{ background: `linear-gradient(to right, transparent, ${member.color}, transparent)` }}
                  />
                </div>

                {/* Content overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Role badge */}
                  <span 
                    className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full font-body"
                    style={{ 
                      backgroundColor: `${member.color}20`,
                      color: member.color,
                      border: `1px solid ${member.color}40`
                    }}
                  >
                    {member.role}
                  </span>
                  
                  <h3 className="font-heading text-2xl lg:text-3xl text-white mb-3 leading-tight">
                    {member.name}
                  </h3>
                  
                  <p className="font-body text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-[200px] overflow-hidden" style={{ transition: 'opacity 0.5s, max-height 0.5s ease' }}>
                    {member.desc}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
