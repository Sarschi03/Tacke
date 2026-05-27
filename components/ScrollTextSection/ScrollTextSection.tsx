"use client";

import React from 'react';
import ScrollVelocity from '../ScrollVelocity/ScrollVelocity';
import styles from './ScrollTextSection.module.css';

export default function ScrollTextSection() {
  return (
    <section className={styles.container}>
      <ScrollVelocity
        texts={['React Bits', 'Scroll Down']} 
        velocity={100}
        className={styles.customScrollText}
        numCopies={6}
        damping={50}
        stiffness={400}
      />
    </section>
  );
}
