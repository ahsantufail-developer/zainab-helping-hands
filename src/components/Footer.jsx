import React from 'react';
import { HeartHandshake } from 'lucide-react';
import logoImg from '../assets/logo_figures.png';

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white pt-20 pb-8 border-t border-white/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1">
            <div className="flex items-center gap-3 text-white mb-6">
              <img src={logoImg} alt="Zainab Helping Hands Logo" className="w-14 h-14 object-contain" />
              <span className="font-heading text-xl tracking-wide">Zainab Helping Hands</span>
            </div>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
              A verified humanitarian welfare organization delivering dignity, transparency, and documented impact across Pakistan.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/zainab_helping_hands_official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-green-950 transition-colors" title="Follow us on Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-gold-500 mb-6">Quick Links</h4>
            <ul className="space-y-4 font-body text-sm text-white/70">
              <li><a href="#mission" className="hover:text-gold-500 transition-colors">Our Mission</a></li>
              <li><a href="#programs" className="hover:text-gold-500 transition-colors">Programs</a></li>
              <li><a href="#process" className="hover:text-gold-500 transition-colors">How We Work</a></li>
              <li><a href="#impact" className="hover:text-gold-500 transition-colors">Transparency</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-gold-500 mb-6">Programs</h4>
            <ul className="space-y-4 font-body text-sm text-white/70">
              <li><a href="#donate" className="hover:text-gold-500 transition-colors">Monthly Rashan Package</a></li>
              <li><a href="#donate" className="hover:text-gold-500 transition-colors">Clean Water Installation</a></li>
              <li><a href="#donate" className="hover:text-gold-500 transition-colors">Widow & Orphan Support</a></li>
              <li><a href="#donate" className="hover:text-gold-500 transition-colors">Zakat Allocation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-gold-500 mb-6">Verified Trust</h4>
            <div className="bg-white/5 rounded p-4 font-body text-sm text-white/80">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-gold-500">✓</span>
                <span>Zakat Eligible</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-gold-500">✓</span>
                <span>Photo Proof Provided</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">✓</span>
                <span>Secure Payments</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} Zainab Helping Hands. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/50 italic">
            Built with care for the Ummah
          </p>
        </div>
      </div>
    </footer>
  );
}