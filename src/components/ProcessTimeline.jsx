import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Verification',
    desc: 'Each family is personally visited by our team to confirm their living conditions and verify their eligibility for Zakat/Sadaqah.',
  },
  {
    title: 'Donation Allocation',
    desc: 'Your donation is grouped by cause (Food, Water, Family) and assigned specifically to the verified cases without delay.',
  },
  {
    title: 'Direct Delivery',
    desc: 'We purchase quality goods and our ground team delivers them directly to the families with dignity and respect.',
  },
  {
    title: 'Photo Proof Provided',
    desc: 'Within 24-48 hours of delivery, we send you WhatsApp confirmation with photo evidence of your specific donation in action.',
  }
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current || !containerRef.current) return;
    
    const length = pathRef.current.getTotalLength();
    
    gsap.fromTo(pathRef.current, 
      { 
        strokeDasharray: length,
        strokeDashoffset: length 
      },
      {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-section',
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 1.2
        }
      }
    );

    const nodes = containerRef.current.querySelectorAll('.timeline-node');
    nodes.forEach((node) => {
      ScrollTrigger.create({
        trigger: node,
        start: 'top 65%',
        once: true,
        onEnter: () => {
          gsap.to(node, {
            backgroundColor: 'var(--gold-500)',
            boxShadow: '0 0 0 8px rgba(201,149,42,0.2)',
            scale: 1.1,
            duration: 0.4,
            ease: 'back.out(1.4)'
          });
        }
      });
    });
  }, []);

  return (
    <section id="process" className="timeline-section section-padding bg-white relative">
      <div className="container-custom" ref={containerRef}>
        <div className="text-center max-w-2xl mx-auto mb-20 reveal-up">
          <span className="font-body uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">How It Works</span>
          <h2 className="font-heading text-4xl text-green-950 mb-6">
            A Transparent Process from Start to Finish
          </h2>
          <div className="h-[1px] w-[100px] bg-gold-500 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* SVG Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] -ml-[1px]">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 1000">
              <path 
                ref={pathRef}
                className="timeline-line"
                d="M1,0 L1,1000" 
                fill="none" 
                stroke="var(--gold-500)" 
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="space-y-16 relative">
            {steps.map((step, i) => (
              <div key={i} className={`flex items-center w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="absolute left-[20px] md:left-1/2 -ml-2 w-4 h-4 rounded-full bg-green-100 timeline-node z-10 transition-colors"></div>
                <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className={`reveal-${i % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="font-display text-gold-500 text-6xl opacity-20 mb-2 leading-none">0{i + 1}</div>
                    <h3 className="font-heading text-2xl text-green-950 mb-3">{step.title}</h3>
                    <p className="font-body text-textMuted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
