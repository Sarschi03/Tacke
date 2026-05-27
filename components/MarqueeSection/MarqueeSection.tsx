"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MarqueeSection.module.css';

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current || !textRef.current) return;

      const textWidth = textRef.current.offsetWidth;
      const windowWidth = window.innerWidth;

      // We want to move the text to the left as we scroll down
      // The total distance to move is the text width minus the window width
      const distanceToMove = textWidth - windowWidth + 200; // adding a little extra for padding

      const ctx = gsap.context(() => {
        gsap.to(textRef.current, {
          x: -distanceToMove,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", // when the top of the container hits the bottom of the viewport
            end: "bottom top",   // when the bottom of the container hits the top of the viewport
            scrub: 1, // smooth scrubbing
          }
        });
      }, containerRef); // Scope to the container

      return () => ctx.revert(); // Cleanup on unmount
    }
  }, []);

  return (
    <section className={styles.marqueeContainer} ref={containerRef}>
      <div className={styles.marqueeText} ref={textRef}>
        endless acceleration toward infinity the greatest barrier to your enlightenment The conservation of novelty is simply that, over time, the universe has become more complicated. New levels of complexity become the foundations for yet deeper levels of complexity. And this phenomenon of the production and conservation of what I call novelty is not something which goes on only in the biological domain or only in the cultural domain or only in the domain of physics. It is a trans-categorical impulse in reality, meaning: it’s everywhere. Everywhere!
      </div>
    </section>
  );
}
