"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const overlayZoomRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      if (!zoomRef.current || !overlayZoomRef.current) return;

      const ctx = gsap.context(() => {
        // Keep the original image size until scrolling begins.
        gsap.fromTo(
          [zoomRef.current, overlayZoomRef.current],
          { scale: 1 },
          {
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
              start: 0,
              end: () => window.innerHeight,
              scrub: true,
            }
          }
        );
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
              src="/1.jpg"
              alt="Hero background"
              fill
              priority
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.overlayLayer} ref={overlayZoomRef}>
          <Image
            src="/1.jpg"
            alt="Hero overlay"
            fill
            priority
            className={styles.image}
          />
        </div>

        {/* Left-side text overlay positioned lower */}
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>{t.hero.label}</p>
          <h1
            className={styles.heroTitle}
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          />
          <p className={styles.heroParagraph}>{t.hero.p1}</p>
          <p className={styles.heroParagraph}>{t.hero.p2}</p>
          <Link href="/rezervacija" className={styles.heroButton}>
            {t.hero.btn}
          </Link>
        </div>
      </div>
    </section>
  );
}
