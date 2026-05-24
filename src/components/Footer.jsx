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
              <img src={logoImg} alt="Zainab Helping Hands Logo" className="w-10 h-10 object-contain" />
              <span className="font-heading text-xl tracking-wide">Zainab Helping Hands</span>
            </div>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
              A verified humanitarian welfare organization delivering dignity, transparency, and documented impact across Pakistan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-green-950 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-green-950 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-green-950 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
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