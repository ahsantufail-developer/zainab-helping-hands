import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CounterStrip() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const animateCounter = (el, target) => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.8,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toLocaleString() + (el.dataset.suffix || '+');
        },
        onComplete: () => {
          gsap.fromTo(el, 
            { filter: 'drop-shadow(0 0 0px rgba(201,149,42,0))' },
            { 
              filter: 'drop-shadow(0 0 20px rgba(201,149,42,0.9))',
              duration: 0.3,
              yoyo: true,
              repeat: 1
            }
          );
        }
      });
    };

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const counters = containerRef.current.querySelectorAll('.counter-number');
        counters.forEach(el => {
          animateCounter(el, parseInt(el.dataset.target, 10));
        });
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="counter-strip bg-green-700 py-16 text-white text-center">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="counter-number font-display text-5xl md:text-6xl text-gold-500 mb-2" data-target="1200" data-suffix="+">0+</div>
            <div className="font-body uppercase tracking-wider text-sm opacity-90">Families Fed</div>
          </div>
          <div>
            <div className="counter-number font-display text-5xl md:text-6xl text-gold-500 mb-2" data-target="300" data-suffix="+">0+</div>
            <div className="font-body uppercase tracking-wider text-sm opacity-90">Water Pumps</div>
          </div>
          <div>
            <div className="counter-number font-display text-5xl md:text-6xl text-gold-500 mb-2" data-target="85" data-suffix="+">0+</div>
            <div className="font-body uppercase tracking-wider text-sm opacity-90">Orphans Supported</div>
          </div>
          <div>
            <div className="counter-number font-display text-5xl md:text-6xl text-gold-500 mb-2" data-target="100" data-suffix="%">0%</div>
            <div className="font-body uppercase tracking-wider text-sm opacity-90">Transparency</div>
          </div>
        </div>
        <p className="font-body font-light italic text-white/70">
          "The believer's shade on the Day of Resurrection will be his charity." (Tirmidhi)
        </p>
      </div>
    </div>
  );
}
