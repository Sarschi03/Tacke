"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const overlayZoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      if (!zoomRef.current || !overlayZoomRef.current) return;

      const ctx = gsap.context(() => {
        // Zoom in both the background and front images as we scroll down the first 100vh
        gsap.to([zoomRef.current, overlayZoomRef.current], {
          scale: 1.05, // Zoom level when fully scrolled over
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: () => window.innerHeight,
            scrub: true,
          }
        });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className={styles.heroStickyWrapper}>
      <div
        className={styles.hero}
        ref={containerRef}
      >
        <div className={styles.backgroundLayer}>
          <div className={styles.zoomLayer} ref={zoomRef}>
            <Image
              src="/1. copy.jpg"
              alt="Hero background"
              fill
              priority
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.overlayLayer} ref={overlayZoomRef}>
          <Image
            src="/1.png"
            alt="Hero overlay"
            fill
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
