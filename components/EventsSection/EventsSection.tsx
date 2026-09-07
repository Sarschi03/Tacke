"use client";

import React from 'react';
import Image from 'next/image';
import styles from './EventsSection.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function EventsSection() {
  const { t } = useLanguage();

  const events = [
    {
      image: '/1. copy.jpg',
      heading: t.events.card1_title,
      text: t.events.card1_text,
    },
    {
      image: '/1_2.jpg',
      heading: t.events.card2_title,
      text: t.events.card2_text,
    },
    {
      image: '/1..jpg',
      heading: t.events.card3_title,
      text: t.events.card3_text,
    },
  ];

  return (
    <section className={styles.container}>
      {/* Top row — mirrors InfoSplitSection topSection */}
      <div className={styles.topSection}>
        <div className={styles.topLeft}>
          <h2 className={styles.topTitle}>{t.events.top_title}</h2>
        </div>
        <div className={styles.topRight}>
          <p className={styles.topRightText}>{t.events.top_text}</p>
        </div>
      </div>

      {/* Bottom row — label left + event cards right */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomLeft}>
          <h3 className={styles.label}>{t.events.label}</h3>
          <h2 className={styles.leftTitle}>{t.events.left_title}</h2>
        </div>

        <div className={styles.cardsRow}>
          {events.map((ev, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={ev.image}
                  alt={ev.heading}
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardHeading}>{ev.heading}</h4>
                <p className={styles.cardText}>{ev.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
