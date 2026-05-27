"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import styles from './InfoSplitSection.module.css';

interface InfoSplitSectionProps {
  topTitle: string;
  topRightText: string;
  leftLabel: string;
  leftTitle: string;
  rightLabel: string;
  rightText: string[];
  imageSrc: string;
}

export default function InfoSplitSection({
  topTitle,
  topRightText,
  leftLabel,
  leftTitle,
  rightLabel,
  rightText,
  imageSrc
}: InfoSplitSectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect on the top title
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.topSection}>
        <div className={styles.topLeft}>
          <motion.h2 className={styles.topTitle} style={{ y: yParallax }}>
            {topTitle}
          </motion.h2>
        </div>
        <div className={styles.topRight}>
          <p className={styles.topRightText}>{topRightText}</p>
        </div>
      </div>
      
      <div className={styles.bottomSection}>
        <div className={styles.bottomLeft}>
          <h3 className={styles.label}>{leftLabel}</h3>
          <h2 className={styles.leftTitle}>{leftTitle}</h2>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.rightContent}>
            <h3 className={styles.label}>{rightLabel}</h3>
            {rightText.map((p, i) => (
              <p key={i} className={styles.rightParagraph}>{p}</p>
            ))}
          </div>
          <div className={styles.imageContainer}>
             <Image src={imageSrc} alt={rightLabel} fill className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
