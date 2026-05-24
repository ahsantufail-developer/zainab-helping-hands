import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (ref) => {
  useGSAP(() => {
    if (!ref.current) return;
    
    // Fade up
    gsap.from(ref.current.querySelectorAll('.reveal-up'), {
      opacity: 0,
      y: 50,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current.querySelectorAll('.reveal-up'),
        start: 'top 82%',
        once: true
      }
    });

    // Fade in from left
    gsap.from(ref.current.querySelectorAll('.reveal-left'), {
      opacity: 0,
      x: -60,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current.querySelectorAll('.reveal-left'),
        start: 'top 80%',
        once: true
      }
    });

    // Fade in from right  
    gsap.from(ref.current.querySelectorAll('.reveal-right'), {
      opacity: 0,
      x: 60,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current.querySelectorAll('.reveal-right'),
        start: 'top 80%',
        once: true
      }
    });
  }, { scope: ref });
};
