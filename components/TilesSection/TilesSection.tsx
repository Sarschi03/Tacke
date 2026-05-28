"use client";

import React, { useRef, RefObject } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import styles from './TilesSection.module.css';

const column1Images = ['.././public/dalida.jpg', '/gallery/2.jpg'];
const column2Images = ['/gallery/dalida.jpg', '/gallery/4.jpg'];
const column3Images = ['/gallery/5.jpg', '/gallery/6.jpg'];
const column4Images = ['/gallery/7.jpg', '/gallery/8.jpg'];

interface ColumnProps {
  images: string[];
  speed: number; // positive = scroll up, negative = scroll down relative to page
}

function TileColumn({ images, speed }: ColumnProps) {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Columns alternate: speed 1 shifts up, speed -1 shifts down
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -80}px`, `${speed * 80}px`]);

  return (
    <motion.div className={styles.column} ref={ref} style={{ y }}>
      {images.map((src, i) => (
        <div
          key={i}
          className={styles.tile}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </motion.div>
  );
}

export default function TilesSection() {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <TileColumn images={column1Images} speed={1} />
        <TileColumn images={column2Images} speed={-1} />
        <TileColumn images={column3Images} speed={1} />
        <TileColumn images={column4Images} speed={-1} />
      </div>
    </section>
  );
}
