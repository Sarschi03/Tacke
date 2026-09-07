"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutSection.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current || !block3Ref.current || !overlayRef.current || !image2Ref.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block3Ref.current,
            start: "top 80%", // Starts when Block 3 comes into the lower part of the screen
            end: "center center", // Ends when Block 3 is fully centered
            scrub: true,
          }
        });

        // First it gets darker, then the other image appears
        tl.to(overlayRef.current, { opacity: 0.6, duration: 1 })
          .to(image2Ref.current, { opacity: 1, duration: 1.5 });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className={styles.aboutContainer} ref={containerRef}>

      <div className={styles.splitSection}>
        {/* LEFT COLUMN - Scrolls normally */}
        <div className={styles.leftColumn}>
          {/* Block 1: Heading, text, and SMALL image */}
          <div className={styles.contentBlock}>
            <div className={styles.blockInner}>
              <h2 className={styles.heading}>{t.about.b1_title}</h2>
              <p className={styles.paragraph}>{t.about.b1_p1}</p>
              <p className={styles.paragraph} style={{ fontWeight: 600 }}>
                {t.about.b1_bold}
              </p>
              <div className={styles.smallImageContainer}>
                <Image src="/a.jpg" alt="Small view 1" fill className={styles.image} />
              </div>
            </div>
          </div>

          {/* Block 2: Just heading and text, NO image */}
          <div className={styles.contentBlock}>
            <div className={styles.blockInner}>
              <h2 className={styles.heading}>{t.about.b2_title}</h2>
              <p className={styles.paragraph}>{t.about.b2_p1}</p>
              <p className={styles.paragraph}>{t.about.b2_p2}</p>
            </div>
          </div>

          {/* Block 3: Triggers the right image change */}
          <div className={styles.contentBlock} ref={block3Ref}>
            <div className={styles.blockInner}>
              <h2 className={styles.heading}>{t.about.b3_title}</h2>
              <p className={styles.paragraph}>{t.about.b3_p1}</p>
              <a href="/rezervacija" className={styles.ctaButton}>
                {t.about.b3_btn}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Sticky and crossfades */}
        <div className={styles.rightColumn}>
          <div className={styles.stickyImage}>
            {/* Base Image 1 */}
            <Image src="/slika.jpeg" alt="Big view 1" fill className={styles.image} priority />
            {/* Darkening Overlay */}
            <div className={styles.darkOverlay} ref={overlayRef}></div>
            {/* Image 2 (fades in) */}
            <Image src="/slika2.png" alt="Big view 2" fill className={`${styles.image} ${styles.secondImage}`} ref={image2Ref} />
          </div>
        </div>
      </div>

    </section>
  );
}
