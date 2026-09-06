"use client";

import React from 'react';
import Image from 'next/image';
import styles from './EventsSection.module.css';

const events = [
  {
    image: '/1. copy.jpg',
    heading: 'Delavnica fotografiranja mačk',
    text: 'Naučite se zajeti nepozabne trenutke naših muckov pod vodstvom profesionalnega fotografa.',
  },
  {
    image: '/1_2.jpg',
    heading: 'Večer za nove posvojitelje',
    text: 'Spoznajte naše mačke in izveste vse, kar morate vedeti pred posvojitvijo. Rezervirajte mesto!',
  },
  {
    image: '/1..jpg',
    heading: 'Jutranja joga z mučkami',
    text: 'Začnite dan umirjeno — jutranja vadba v sproščenem vzdušju ob prisotnosti naših kosmatih prijateljev.',
  },
];

export default function EventsSection() {
  return (
    <section className={styles.container}>
      {/* Top row — mirrors InfoSplitSection topSection */}
      <div className={styles.topSection}>
        <div className={styles.topLeft}>
          <h2 className={styles.topTitle}>Dogodki &amp; novosti.</h2>
        </div>
        <div className={styles.topRight}>
          <p className={styles.topRightText}>
            Pridružite se nam na posebnih prireditvah, delavnicah in srečanjih — za ljubitelje
            mačk in tiste, ki to šele postajajo.
          </p>
        </div>
      </div>

      {/* Bottom row — label left + event cards right */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomLeft}>
          <h3 className={styles.label}>Prihajajoči dogodki</h3>
          <h2 className={styles.leftTitle}>Vedno se dogaja kaj novega.</h2>
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
