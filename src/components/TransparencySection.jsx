import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ImpactDashboard from './ImpactDashboard';
import { StaggerContainer } from './shared';
import { useIntersection } from '../hooks/useIntersection';

gsap.registerPlugin(ScrollTrigger);

export default function TransparencySection() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);
  
  const [dashboardRef, isIntersecting] = useIntersection({ threshold: 0.2, once: true });

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const bars = sectionRef.current.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
      const target = bar.dataset.width;
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: target + '%',
          duration: 1.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            once: true,
            onComplete: () => {
              gsap.fromTo(bar,
                { '--shimmer-x': '-100%' },
                { '--shimmer-x': '200%', duration: 0.8, ease: 'power1.inOut' }
              );
            }
          }
        }
      );
    });
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="section-padding bg-green-950 text-white relative">
      <div className="container-custom">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 reveal-up">
            <span className="font-body uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">100% Transparency</span>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Every Rupee Documented
            </h2>
            <div className="h-[1px] w-[60px] bg-gold-500 mb-8"></div>
            
            <p className="font-body text-white/70 text-lg leading-relaxed mb-10">
              We operate with absolute transparency. You shouldn't have to wonder where your charity goes. That's why we document every delivery and maintain open records of our allocations.
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between font-body text-sm mb-2">
                  <span className="text-white/90">Direct Aid Delivery</span>
                  <span className="text-gold-500 font-semibold">90%</span>
                </div>
                <div className="h-2 bg-green-900 rounded-full overflow-hidden relative">
                  <div 
                    className="progress-bar absolute top-0 left-0 bottom-0 bg-gold-500 rounded-full"
                    data-width="90"
                    style={{ 
                      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                      backgroundSize: '200% 100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPositionX: 'var(--shimmer-x, -100%)'
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-body text-sm mb-2">
                  <span className="text-white/90">Logistics & Operations</span>
                  <span className="text-gold-500 font-semibold">7%</span>
                </div>
                <div className="h-2 bg-green-900 rounded-full overflow-hidden relative">
                  <div className="progress-bar absolute top-0 left-0 bottom-0 bg-gold-500 rounded-full" data-width="7"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-body text-sm mb-2">
                  <span className="text-white/90">Documentation & Media</span>
                  <span className="text-gold-500 font-semibold">3%</span>
                </div>
                <div className="h-2 bg-green-900 rounded-full overflow-hidden relative">
                  <div className="progress-bar absolute top-0 left-0 bottom-0 bg-gold-500 rounded-full" data-width="3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Charts) */}
          <div className="lg:col-span-7" ref={dashboardRef}>
            {isIntersecting && (
              <StaggerContainer>
                <ImpactDashboard />
              </StaggerContainer>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
