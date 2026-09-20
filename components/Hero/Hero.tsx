"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useLanguage();

  const heroImages = ["/3.jpg", "/5.jpg", "/6.jpg"];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      if (!zoomRef.current) return;

      const ctx = gsap.context(() => {
        // Keep the original image size until scrolling begins.
        gsap.fromTo(
          zoomRef.current,
          { scale: 1 },
          {
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
              start: 0,
              end: () => window.innerHeight,
              scrub: true,
            },
          },
        );
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className={styles.heroStickyWrapper}>
      <div className={styles.hero} ref={containerRef}>
        <div className={styles.backgroundLayer}>
          <div className={styles.zoomLayer} ref={zoomRef}>
            {heroImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt="Mačke v društvu ljubiteljev mačjih tačk"
                fill
                priority={index === 0}
                sizes="100vw"
                className={`${styles.image} ${styles.slide} ${index === activeSlide ? styles.slideActive : ""}`}
              />
            ))}
          </div>
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
