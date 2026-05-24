import React, { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { StaggerContainer, StaggerItem, TiltCard } from './shared';

import aliImg from '../assets/founder_ali.png';
import abubakarImg from '../assets/founder_abubakar.png';
import hadiImg from '../assets/ceo_hadi.png';

const team = [
  {
    name: 'Muhammad Ali',
    role: 'Founder',
    desc: 'Responsible for establishing the vision and groundwork for our welfare initiatives.',
    image: aliImg
  },
  {
    name: 'Muhammad Abubakar Ejaz',
    role: 'Founder',
    desc: 'Working to build, fund, and expand the reach of our community support network.',
    image: abubakarImg
  },
  {
    name: 'Syed Abdul Hadi Usman',
    role: 'Chief Executive Officer',
    desc: 'Leading daily operations, managing strategy, and directing humanitarian projects execution.',
    image: hadiImg
  }
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section id="team" ref={sectionRef} className="section-padding bg-[#0F2518] relative text-white">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="font-body uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">Our Team</span>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            The Hands Behind the Mission
          </h2>
          <div className="h-[1px] w-[100px] bg-gold-500 mx-auto"></div>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <StaggerItem key={i} className="h-full">
              <TiltCard className="h-full rounded-lg overflow-hidden group cursor-pointer border border-white/10 bg-green-950/50">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(to top, rgba(10,26,15,1) 0%, rgba(10,26,15,0.4) 40%, transparent 100%)' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <span className="font-body text-gold-500 text-xs font-bold uppercase tracking-wider mb-2">
                      {member.role}
                    </span>
                    <h3 className="font-heading text-2xl text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="font-body text-white/80 text-sm leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
