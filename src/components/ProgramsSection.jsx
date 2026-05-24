import React from 'react';
import { TiltCard, StaggerContainer, StaggerItem } from './shared';

import imgFood from '../assets/gallery_food.png';
import imgWater from '../assets/gallery_water.png';
import imgFamily from '../assets/gallery_orphan.png';

const programs = [
  {
    title: 'Monthly Rashan Package',
    image: imgFood,
    description: 'Providing comprehensive food supplies to verified families, ensuring no one in our community sleeps hungry.'
  },
  {
    title: 'Clean Water Installation',
    image: imgWater,
    description: 'Installing hand pumps and deep wells in water-scarce regions as a sustainable Sadaqah Jariyah.'
  },
  {
    title: 'Widow & Orphan Support',
    image: imgFamily,
    description: 'Monthly financial assistance, education support, and healthcare for the most vulnerable families.'
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="font-body uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">Our Programs</span>
          <h2 className="font-heading text-4xl md:text-5xl text-green-950 mb-6">
            Structured Support for Maximum Impact
          </h2>
          <div className="h-[1px] w-[100px] bg-gold-500 mx-auto"></div>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <StaggerItem key={i} className="h-full">
              <TiltCard className="h-full rounded-lg overflow-hidden group cursor-pointer h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${prog.image})` }}
                />
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(to top, rgba(10,26,15,0.70) 0%, transparent 60%)' }}
                />
                
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <h3 className="font-heading text-2xl text-white mb-3 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                    {prog.title}
                  </h3>
                  <p className="font-body text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 absolute bottom-6 left-8 right-8">
                    {prog.description}
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
