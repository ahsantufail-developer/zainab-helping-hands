import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TransparencySection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Header stagger animation
    gsap.fromTo(sectionRef.current.querySelectorAll('.reveal-transparency'),
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Staggered bento grid cards animation
    gsap.fromTo(sectionRef.current.querySelectorAll('.bento-card'),
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="relative bg-[#0A1A0F] py-24 md:py-32 overflow-hidden border-t border-b border-white/5">
      <style>{`
        .grid-bg-overlay {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        .bento-card-bg {
          background-size: 30px 30px;
          background-image: linear-gradient(to right, rgba(201, 149, 42, 0.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(201, 149, 42, 0.04) 1px, transparent 1px);
        }
        .glow-effect::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201, 149, 42, 0.08), transparent 80%);
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }
        .bento-card:hover .glow-effect::after {
          opacity: 1;
        }
      `}</style>

      {/* Grid Pattern and Faint Radial Glow */}
      <div className="absolute inset-0 grid-bg-overlay opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-custom relative z-10 mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-body uppercase tracking-[0.25em] text-gold-500 text-xs font-semibold mb-4 block reveal-transparency">
            ✦ 100% Financial Accountability ✦
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 reveal-transparency leading-tight">
            Every Single Rupee Documented
          </h2>
          <p className="font-body text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto reveal-transparency">
            We operate with absolute transparency. You shouldn't have to wonder where your charity goes. Browse the audited allocations and strict guidelines that govern every single donation.
          </p>
          <div className="h-[1px] w-[120px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6 reveal-transparency" />
        </div>

        {/* Bento Grid Container */}
        <div 
          ref={containerRef}
          className="grid lg:grid-cols-12 gap-8 w-full bento-container"
        >
          
          {/* Card 1: Left Top (Allocation Summary & Progress Sliders) */}
          <div className="bento-card lg:col-span-7 bg-gradient-to-br from-[#0F2D1C]/85 to-[#06150D]/95 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-gold-500/40 hover:shadow-[0_0_35px_rgba(201,149,42,0.1)] transition-all duration-500 flex flex-col justify-between min-h-[460px]">
            <div className="absolute inset-0 bento-card-bg opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            <div className="glow-effect absolute inset-0 pointer-events-none" />
            
            {/* Top Text content */}
            <div>
              <span className="text-gold-500 font-body text-[10px] font-semibold uppercase tracking-[0.25em] mb-2 block">
                ✦ Direct Allocation Tracking ✦
              </span>
              <h3 className="font-heading text-2xl md:text-3xl text-white font-semibold mb-3 group-hover:text-gold-400 transition-colors duration-300">
                Enhance Your Impact Journey
              </h3>
              <p className="font-body text-white/70 text-sm md:text-base leading-relaxed max-w-md">
                Easily monitor where your funds are going. 90% of every donation goes directly to active relief goods, with full audit trials.
              </p>
            </div>

            {/* Bottom Visual: Payer-style Transaction & Progress Widget */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/15 rounded-2xl p-6 mt-8 max-w-md w-full shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold-500/5 rounded-full blur-xl pointer-events-none" />
              
              {/* Transaction Header */}
              <div className="flex justify-between items-center mb-5">
                <div>
                  <span className="font-body text-xs text-white/40 block uppercase tracking-wider">Average Kit Cost</span>
                  <span className="font-heading text-2xl text-white font-semibold">₨ 5,000.00</span>
                </div>
                <span className="bg-gold-500/10 border border-gold-500/30 text-gold-500 font-body text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  ✓ 90% Direct Aid
                </span>
              </div>

              {/* Progress bars representing allocations */}
              <div className="space-y-4">
                {/* 90% Direct Aid */}
                <div>
                  <div className="flex justify-between font-body text-xs mb-1.5">
                    <span className="text-white/80">Direct Aid Delivery</span>
                    <span className="text-gold-500 font-bold">90%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                    <div className="h-full bg-gold-500 rounded-full w-[90%] transition-transform duration-500" />
                  </div>
                </div>

                {/* 7% Operations */}
                <div>
                  <div className="flex justify-between font-body text-xs mb-1.5">
                    <span className="text-white/80">Logistics & Transportation</span>
                    <span className="text-[#3AAA35] font-bold">7%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                    <div className="h-full bg-[#3AAA35] rounded-full w-[7%] transition-transform duration-500" />
                  </div>
                </div>

                {/* 3% Media */}
                <div>
                  <div className="flex justify-between font-body text-xs mb-1.5">
                    <span className="text-white/80">Verification & ID Badges</span>
                    <span className="text-white/40 font-bold">3%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                    <div className="h-full bg-white/30 rounded-full w-[3%] transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] w-0 bg-gradient-to-r from-transparent via-gold-500 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
          </div>

          {/* Card 2: Right Top (Monthly Growth Bar Chart) */}
          <div className="bento-card lg:col-span-5 bg-gradient-to-br from-[#0F2D1C]/85 to-[#06150D]/95 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-gold-500/40 hover:shadow-[0_0_35px_rgba(201,149,42,0.1)] transition-all duration-500 flex flex-col justify-between min-h-[460px]">
            <div className="absolute inset-0 bento-card-bg opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            <div className="glow-effect absolute inset-0 pointer-events-none" />
            
            {/* Top Text content */}
            <div>
              <span className="text-gold-500 font-body text-[10px] font-semibold uppercase tracking-[0.25em] mb-2 block">
                ✦ Optimized Analytics ✦
              </span>
              <h3 className="font-heading text-2xl md:text-3xl text-white font-semibold mb-3 group-hover:text-gold-400 transition-colors duration-300">
                Personalized Impact Insights
              </h3>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                Track how ZHH is scaling its ground operations month-over-month. Real-time statistics show constant, secure growth.
              </p>
            </div>

            {/* Bottom Visual: Payer-style Bar Chart Widget */}
            <div className="mt-8 bg-white/[0.02] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <span className="font-body text-xs text-white/50 uppercase tracking-wider block">Growth Index</span>
                <span className="font-heading text-sm text-gold-400 font-bold">₨ 1.2M+ Distributed</span>
              </div>

              {/* HTML/CSS Bar Chart Graph */}
              <div className="flex items-end justify-between h-32 px-2 relative">
                {/* Y-Axis dashed grid lines */}
                <div className="absolute inset-x-0 top-1/4 border-t border-white/5 pointer-events-none" />
                <div className="absolute inset-x-0 top-2/4 border-t border-white/5 pointer-events-none" />
                <div className="absolute inset-x-0 top-3/4 border-t border-white/5 pointer-events-none" />

                {/* Jan */}
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-6 bg-white/10 rounded-t-sm group-hover:bg-[#124C2A] h-[25px] transition-all duration-700 ease-out" />
                  <span className="font-mono text-[9px] text-white/40">Jan</span>
                </div>
                {/* Feb */}
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-6 bg-white/10 rounded-t-sm group-hover:bg-[#124C2A] h-[40px] transition-all duration-700 ease-out" />
                  <span className="font-mono text-[9px] text-white/40">Feb</span>
                </div>
                {/* Mar */}
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-6 bg-white/10 rounded-t-sm group-hover:bg-[#124C2A] h-[30px] transition-all duration-700 ease-out" />
                  <span className="font-mono text-[9px] text-white/40">Mar</span>
                </div>
                {/* Apr */}
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-6 bg-[#3482F6]/75 rounded-t-sm group-hover:bg-[#3482F6] h-[65px] transition-all duration-700 ease-out shadow-[0_0_15px_rgba(52,130,246,0.3)] animate-pulse" />
                  <span className="font-mono text-[9px] text-[#3482F6] font-semibold">Apr</span>
                </div>
                {/* May */}
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-6 bg-white/10 rounded-t-sm group-hover:bg-[#124C2A] h-[50px] transition-all duration-700 ease-out" />
                  <span className="font-mono text-[9px] text-white/40">May</span>
                </div>
                {/* Jun */}
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-6 bg-gold-500/80 rounded-t-sm group-hover:bg-gold-500 h-[85px] transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(201,149,42,0.4)]" />
                  <span className="font-mono text-[9px] text-gold-500 font-bold">Jun</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] w-0 bg-gradient-to-r from-transparent via-gold-500 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
          </div>

          {/* Card 3: Bottom Full-Width Card (Islamic Compliance & floating Donor Card) */}
          <div className="bento-card lg:col-span-12 bg-gradient-to-br from-[#0F2D1C]/85 to-[#06150D]/95 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-gold-500/40 hover:shadow-[0_0_35px_rgba(201,149,42,0.1)] transition-all duration-500 grid md:grid-cols-12 gap-8 items-center min-h-[380px]">
            <div className="absolute inset-0 bento-card-bg opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            <div className="glow-effect absolute inset-0 pointer-events-none" />
            
            {/* Left Column Text details */}
            <div className="md:col-span-7">
              <span className="text-gold-500 font-body text-[10px] font-semibold uppercase tracking-[0.25em] mb-2 block">
                ✦ Islamic Compliance & Verification ✦
              </span>
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4 leading-tight group-hover:text-gold-400 transition-colors duration-300">
                Cutting-Edge Shariah & Proof Standards
              </h3>
              <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-6">
                All donations are stored and audited under strict Shariah boundaries with completely segregated bank logs. Administrative overheads are 100% sponsored privately by our founders, ensuring <strong>zero leakage</strong>. Additionally, every donor receives direct WhatsApp video/photo evidence of their exact ration package being handed to deserving families.
              </p>
              
              <div className="flex gap-3 flex-wrap">
                <span className="bg-white/5 border border-white/10 text-white/90 text-xs px-4 py-2 rounded-full font-body">
                  🌙 100% Shariah Compliant
                </span>
                <span className="bg-white/5 border border-white/10 text-white/90 text-xs px-4 py-2 rounded-full font-body">
                  🛡️ Zero Admin Overhead
                </span>
                <span className="bg-white/5 border border-white/10 text-white/90 text-xs px-4 py-2 rounded-full font-body">
                  📱 Direct WhatsApp Proofs
                </span>
              </div>
            </div>

            {/* Right Column: Floating Payer-style Card & Security badges */}
            <div className="md:col-span-5 flex justify-center py-6 relative select-none">
              
              {/* Outer floating orbiting icons */}
              
              {/* Moon Icon (Shariah) */}
              <div className="absolute top-[5%] left-[10%] w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shadow-lg animate-bounce pointer-events-none z-20">
                <span className="text-sm">🌙</span>
              </div>
              {/* Shield Icon (Zero Loss) */}
              <div className="absolute bottom-[5%] right-[10%] w-10 h-10 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/30 flex items-center justify-center shadow-lg animate-pulse pointer-events-none z-20" style={{ animationDelay: '1s' }}>
                <span className="text-sm">🛡️</span>
              </div>
              {/* Chat Icon (WhatsApp) */}
              <div className="absolute top-[40%] -left-[5%] w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shadow-lg pointer-events-none z-20 animate-bounce" style={{ animationDelay: '1.8s' }}>
                <span className="text-sm">💬</span>
              </div>

              {/* The ZHH Premium Donor Card */}
              <div className="w-[280px] sm:w-[320px] aspect-[1.586/1] bg-gradient-to-tr from-[#123E25] to-[#06150D] border border-gold-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group-hover:scale-105 group-hover:border-gold-500/60 group-hover:shadow-[0_0_40px_rgba(201,149,42,0.15)] transition-all duration-700">
                {/* Shiny holographic wave */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                {/* Zainab Helping Hands Branding */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-heading text-[10px] text-white/50 block tracking-widest uppercase">Amanah Card</span>
                    <span className="font-heading text-[11px] text-gold-300 font-bold tracking-wider">ZAINAB HELPING HANDS</span>
                  </div>
                  {/* Miniature Logo Emblem shape */}
                  <div className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                    <span className="text-[10px] text-gold-500 font-bold">ZHH</span>
                  </div>
                </div>

                {/* Card Chip & Wi-Fi */}
                <div className="flex justify-between items-center mb-6">
                  {/* Gold Chip */}
                  <div className="w-8 h-6 bg-gradient-to-r from-gold-500/70 to-gold-400 rounded-md border border-gold-300/40 relative">
                    <div className="absolute inset-1 border border-green-950/20" />
                  </div>
                  <span className="text-xs text-white/30 tracking-wider">Verified Account</span>
                </div>

                {/* Donor Details & Status */}
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-body text-[8px] text-white/35 block uppercase tracking-widest">Account Status</span>
                    <span className="font-mono text-[10px] sm:text-xs text-white tracking-wider font-semibold">100% SECURE AID</span>
                  </div>
                  <div className="text-right">
                    <span className="font-body text-[8px] text-white/35 block uppercase tracking-widest">Amanah Title</span>
                    <span className="font-heading text-[10px] sm:text-[11px] text-gold-500 font-bold">MUHAMMAD ABU BAKAR EJAZ</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] w-0 bg-gradient-to-r from-transparent via-gold-500 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
          </div>

        </div>

      </div>
    </section>
  );
}
