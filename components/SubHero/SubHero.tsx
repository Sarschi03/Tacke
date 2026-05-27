import React from 'react';
import Image from 'next/image';
import styles from './SubHero.module.css';

interface SubHeroProps {
  title: string;
  texts: string[];
  imageSrc: string; // E.g., "/1. copy.jpg"
  overlayImageSrc?: string; // E.g., "/1.png"
}

export default function SubHero({ title, texts, imageSrc, overlayImageSrc }: SubHeroProps) {
  return (
    <div className={styles.subHero}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} fill className={styles.image} priority />
        {overlayImageSrc && (
           <Image src={overlayImageSrc} alt={`${title} overlay`} fill className={styles.image} priority />
        )}
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {texts.map((text, idx) => (
          <p key={idx} className={styles.text}>{text}</p>
        ))}
      </div>
    </div>
  );
}
