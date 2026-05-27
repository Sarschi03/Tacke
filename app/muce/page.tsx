"use client";

import React, { useRef, RefObject } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import styles from './page.module.css';

// Add your images to /public/muce/ folder - 9 images total
const column1 = ['/muce/1.jpg', '/muce/2.jpg', '/muce/3.jpg'];
const column2 = ['/muce/4.jpg', '/muce/5.jpg', '/muce/6.jpg'];
const column3 = ['/muce/7.jpg', '/muce/8.jpg', '/muce/9.jpg'];

interface ColumnProps {
  images: string[];
  speed: number;
}

function TileColumn({ images, speed }: ColumnProps) {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
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

export default function MucePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubHero 
          title="Naše muce" 
          texts={["Spoznajte naše čudovite mačke, ki živijo z nami."]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />

        <section className={styles.tilesSection}>
          <div className={styles.wrap}>
            <TileColumn images={column1} speed={1} />
            <TileColumn images={column2} speed={-1} />
            <TileColumn images={column3} speed={1} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
