import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { Heart } from 'lucide-react';

import Navbar from './components/Navbar';
import HeroShader from './components/HeroShader';
import CounterStrip from './components/CounterStrip';
import MissionSection from './components/MissionSection';
import ProgramsSection from './components/ProgramsSection';
import ProcessTimeline from './components/ProcessTimeline';
import TransparencySection from './components/TransparencySection';
import GallerySection from './components/GallerySection';
import IslamicValuesSection from './components/IslamicValuesSection';
import TeamSection from './components/TeamSection';
import DonationFlow from './components/DonationFlow';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);

  useGSAP(() => {
    // We use SplitType instead of SplitText as SplitText is a premium GreenSock plugin,
    // but SplitType achieves the exact same effect for characters and words.
    const split = new SplitType('.hero-headline', { types: 'chars,words' });
    
    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.from(split.chars, {
      opacity: 0,
      y: 80,
      rotationX: -90,
      transformOrigin: '50% 50% -30px',
      stagger: { amount: 0.6, from: 'start' },
      duration: 0.8,
      ease: 'power4.out'
    })
    .from('.hero-subtext', {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.3')
    .from('.hero-trust-pill', {
      opacity: 0,
      scale: 0.7,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.2')
    .from('.hero-cta', {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .from('.hero-float-card', {
      opacity: 0,
      x: 80,
      rotation: 5,
      duration: 0.9,
      ease: 'power3.out'
    }, '-=0.4');

    // Scroll Progress Bar
    gsap.to('.scroll-progress', {
      scaleX: 1,
      ease: 'none',
      transformOrigin: 'left center',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0
      }
    });

    return () => split.revert();
  }, { scope: heroRef });

  return (
    <>
      <div className="scroll-progress" />
      <Navbar />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-center bg-[#0F2518]">
        
        <HeroShader />

        {/* Islamic star SVG pattern overlay */}
        <div 
          className="absolute inset-0 z-[1] opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M300 0L335.54 135.54L471.08 171.08L335.54 206.62L300 342.16L264.46 206.62L128.92 171.08L264.46 135.54L300 0ZM300 257.84L322.09 313.91L378.16 336L322.09 358.09L300 414.16L277.91 358.09L221.84 336L277.91 313.91L300 257.84ZM471.08 342.16L496.2 405.8L559.84 430.92L496.2 456.04L471.08 519.68L445.96 456.04L382.32 430.92L445.96 405.8L471.08 342.16ZM128.92 342.16L154.04 405.8L217.68 430.92L154.04 456.04L128.92 519.68L103.8 456.04L40.16 430.92L103.8 405.8L128.92 342.16Z' fill='none' stroke='%23C9952A' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '600px 600px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Full-bleed background image with gradient overlay */}
        <div 
          className="absolute inset-0 z-[2] bg-cover bg-center md:hidden lg:block"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80)' }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(10,26,15,0.92) 0%, rgba(26,92,56,0.60) 60%, rgba(201,149,42,0.25) 100%)'
            }}
          />
        </div>

        <div className="container-custom relative z-[3] mt-16">
          <div className="max-w-3xl">
            <div className="flex gap-3 mb-6 flex-wrap">
              <span className="hero-trust-pill bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-body uppercase tracking-widest px-4 py-1.5 rounded-full">
                100% Transparent
              </span>
              <span className="hero-trust-pill bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-body uppercase tracking-widest px-4 py-1.5 rounded-full">
                Zakat Eligible
              </span>
            </div>
            
            <h1 className="hero-headline font-heading text-5xl md:text-7xl lg:text-[80px] text-white leading-[1.1] mb-8" style={{ perspective: '1000px' }}>
              Give Once.<br/>Impact Forever.
            </h1>
            
            <p className="hero-subtext font-body text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-2xl font-light">
              Join Pakistan's most transparent welfare organization. We turn your charity into documented impact—with photo proof for every donation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                className="hero-cta bg-gold-500 text-green-950 px-8 py-4 rounded font-body font-semibold text-lg hover:bg-gold-400 hover:-translate-y-1 transition-transform shadow-lg"
              >
                Donate Now
              </button>
              <button 
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                className="hero-cta bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded font-body font-semibold text-lg hover:bg-white/10 hover:border-white transition-colors"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stat Card */}
        <div className="hero-float-card absolute bottom-[10%] right-5 md:right-10 lg:right-20 z-[4] bg-white p-5 rounded-lg shadow-2xl border-l-[4px] border-gold-500 hidden sm:flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-full text-green-700">
            <Heart size={24} fill="currentColor" />
          </div>
          <div>
            <div className="font-heading text-2xl text-green-950">1,200+</div>
            <div className="font-body text-sm text-textMuted uppercase tracking-wider">Lives Impacted</div>
          </div>
        </div>

      </section>

      <CounterStrip />
      <MissionSection />
      <ProgramsSection />
      <ProcessTimeline />
      <TransparencySection />
      <GallerySection />
      <IslamicValuesSection />
      <TeamSection />
      <DonationFlow />
      <Footer />
    </>
  );
}

export default App;