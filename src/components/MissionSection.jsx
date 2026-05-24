import React, { useRef } from 'react';
import { Heart, Droplets, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function MissionSection() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section id="mission" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="md:col-span-5 relative reveal-left">
          <div className="absolute -left-12 -top-12 text-9xl text-gold-500 opacity-[0.08] font-display font-bold leading-none select-none">
            "
          </div>
          <div className="h-[1px] w-[60px] bg-gold-500 mb-6"></div>
          <span className="font-body uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">Our Mission</span>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight text-green-950">
            Deliver Proof,<br/>Not Just Promises
          </h2>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 reveal-right">
          <p className="font-body text-textMuted text-lg leading-relaxed mb-6">
            We believe that every donation is an amanah (trust). Our goal is to provide verified, documented, and structured welfare support to families across Pakistan. We don't just distribute aid; we deliver dignity and transparent accountability.
          </p>
          <p className="font-body text-textMuted text-lg leading-relaxed mb-10">
            Through strict verification, we ensure your Sadaqah and Zakat reach exactly where they are needed most—creating a legacy of impact for generations to come.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700 mt-1">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-heading text-xl text-green-950 mb-1">100% Transparent</h4>
                <p className="font-body text-textMuted">Every Rupee documented with photo proof sent directly to you.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700 mt-1">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="font-heading text-xl text-green-950 mb-1">Dignified Support</h4>
                <p className="font-body text-textMuted">We serve community members with the respect and honor they deserve.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700 mt-1">
                <Droplets size={24} />
              </div>
              <div>
                <h4 className="font-heading text-xl text-green-950 mb-1">Sadaqah Jariyah</h4>
                <p className="font-body text-textMuted">Sustainable projects like clean water that continue to benefit communities.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
