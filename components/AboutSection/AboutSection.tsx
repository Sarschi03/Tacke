"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);

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
              <h2 className={styles.heading}>Architecture that belongs to the land.</h2>
              <p className={styles.paragraph}>
                We are a full-service, design-forward practice focused on creating
                architecture that belongs to the land and fosters connection.
              </p>
              <div className={styles.smallImageContainer}>
                <Image src="/1.jpg" alt="Small view 1" fill className={styles.image} />
              </div>
            </div>
          </div>
          
          {/* Block 2: Just heading and text, NO image */}
          <div className={styles.contentBlock}>
            <div className={styles.blockInner}>
              <h2 className={styles.heading}>Harmony in every detail.</h2>
              <p className={styles.paragraph}>
                Our designs are born from a thoughtful dialogue infused with optimism,
                sensitivity, and a profound sense of stewardship.
              </p>
            </div>
          </div>

          {/* Block 3: Triggers the right image change */}
          <div className={styles.contentBlock} ref={block3Ref}>
            <div className={styles.blockInner}>
              <h2 className={styles.heading}>A vision for the future.</h2>
              <p className={styles.paragraph}>
                We believe in creating spaces that are not only beautiful but also
                deeply meaningful and sustainable for generations to come.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Sticky and crossfades */}
        <div className={styles.rightColumn}>
          <div className={styles.stickyImage}>
            {/* Base Image 1 */}
            <Image src="/1.jpg" alt="Big view 1" fill className={styles.image} priority />
            {/* Darkening Overlay */}
            <div className={styles.darkOverlay} ref={overlayRef}></div>
            {/* Image 2 (fades in) */}
            <Image src="/1..jpg" alt="Big view 2" fill className={`${styles.image} ${styles.secondImage}`} ref={image2Ref} />
          </div>
        </div>
      </div>

    </section>
  );
}
