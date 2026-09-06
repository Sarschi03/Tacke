"use client";

import React, { useRef, RefObject } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import styles from './MenuSection.module.css';

interface TackaProps {
  side: 'left' | 'right';
  top: string;
  rotate: number;
  blur: number;
  scale: number;
  parallaxSpeed: number;
}

function ParallaxTacka({ side, top, rotate, blur, scale, parallaxSpeed }: TackaProps) {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`${parallaxSpeed * -120}px`, `${parallaxSpeed * 120}px`]);

  return (
    <motion.div
      ref={ref}
      className={`${styles.tacka} ${side === 'left' ? styles.tackaLeft : styles.tackaRight}`}
      style={{
        top,
        y,
        rotate,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        scale,
        opacity: 1 - blur * 0.1,
      }}
    >
      <Image src="/tacka.png" alt="Tacka" width={150} height={150} />
    </motion.div>
  );
}

interface SubGroup {
  label: string;
  sublabel?: string;
  desc?: string;
  items: string[];
}

interface MenuSection {
  category: string;
  subtitle?: string;
  note?: string;
  items: string[];
  sub: SubGroup[];
}

const menuData: MenuSection[] = [
  {
    category: 'KAVNI NAPITKI',
    subtitle: 'Julius Meinl',
    items: ['Espresso', 'Dolga kava', 'Kava z mlekom', 'Bela kava', 'Brezkofeinska kava', 'Cappuccino', 'Lahka mačja vroča čokolada', 'Kakav'],
    sub: [
      { label: 'Dodatki:', items: ['Sirup MONIN Cimet', 'Sirup MONIN Čokoladni piškot', 'Sirup MONIN Karamela', 'Sirup MONIN Lešnik', 'Sirup MONIN Vanilija'] }
    ]
  },
  {
    category: 'BREZALKOHOLNE PIJAČE',
    items: [],
    sub: [
      { label: 'Limonada z okusom', sublabel: 'Okusi:', items: ['Malina', 'Pasijonka', 'Ananas', 'Zeleno jabolko', 'Mango', 'Jagoda'] },
      { label: 'Cats Mojito', desc: '(limonin sok, metin sirup, sladkor, led, liker po želji)', items: [] },
      { label: 'Cats Colada', desc: '(ananasov sok, kokosovo mleko, led, liker po želji)', items: [] },
    ]
  },
  {
    category: 'DOMAČI SOKOVI',
    items: ['Bezeg', 'Šivka', 'Meta', 'Kopriva', 'Vrtnica', 'Pljučnik'],
    sub: []
  },
  {
    category: 'ČAJI Herbessa',
    note: 'Cena za prodajo čajev Herbessa: 8,50€/50g',
    items: [],
    sub: [
      { label: 'Čaj za ženske', desc: '(vrtnica, kamilica, rman, bazilika, plahtnica)', items: [] },
      { label: 'Dihalko', desc: '(materina dušica, pljučnik, smrekovi vršički, origano, trpotec, lipa)', items: [] },
      { label: 'Ples snežink', desc: '(suh jabolko, plodovi šipka, koriander in gver, oranžna meta, idr.)', items: [] },
      { label: 'Oaza miru', desc: '(melisa, sivka, rožmarin, lipa, rman, glog)', items: [] },
      { label: 'Družinska sreča', desc: '(melisa, lipa, rograt, šipek, list jagode)', items: [] },
    ]
  },
  {
    category: 'ČAJI Julius Meinl',
    items: ['Razni sadni čaji', 'Razni zeliščni čaji', 'Zeleni čaj', 'Črni čaj'],
    sub: []
  },
];

// Split into two columns
const col1 = menuData.slice(0, 2);
const col2 = menuData.slice(2);

function MenuColumn({ sections }: { sections: MenuSection[] }) {
  return (
    <div className={styles.column}>
      {sections.map((section) => (
        <div key={section.category} className={styles.section}>
          <h2 className={styles.categoryTitle}>{section.category}</h2>
          {section.subtitle && <p className={styles.subtitle}>{section.subtitle}</p>}
          {section.note && <p className={styles.note}>{section.note}</p>}
          {section.items.map((item) => (
            <p key={item} className={styles.item}>{item}</p>
          ))}
          {section.sub?.map((sub) => (
            <div key={sub.label} className={styles.subGroup}>
              <p className={styles.subLabel}>{sub.label}</p>
              {sub.sublabel && <p className={styles.sublabel}>{sub.sublabel}</p>}
              {sub.desc && <p className={styles.desc}>{sub.desc}</p>}
              {sub.items.map((item) => (
                <p key={item} className={styles.item}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function MenuSection() {
  const sectionRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

  const tackas: TackaProps[] = [
    // Left side: 3 tackas — center one is sharp, outer ones blurred
    { side: 'left', top: '10%', rotate: -20, blur: 3, scale: 0.7, parallaxSpeed: 0.6 },
    { side: 'left', top: '45%', rotate: 10, blur: 0, scale: 1, parallaxSpeed: 0.3 },
    { side: 'left', top: '78%', rotate: -35, blur: 1, scale: 0.8, parallaxSpeed: 0.7 },
    // Right side: 3 tackas
    { side: 'right', top: '18%', rotate: 25, blur: 1, scale: 0.75, parallaxSpeed: 0.5 },
    { side: 'right', top: '52%', rotate: -15, blur: 0, scale: 1.05, parallaxSpeed: 0.25 },
    { side: 'right', top: '82%', rotate: 30, blur: 4.5, scale: 0.7, parallaxSpeed: 0.65 },
  ];

  return (
    <section className={styles.container} ref={sectionRef}>
      {/* Decorative tacka paws */}
      {tackas.map((t, i) => (
        <ParallaxTacka key={i} {...t} />
      ))}

      {/* Two-column header — title left, body right — same as Dogodki & novosti */}
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <h2 className={styles.introTitle}>Naša ponudba.</h2>
        </div>
        <div className={styles.introRight}>
          <p className={styles.introText}>
            Razvajajte se z našo ponudbo toplih napitkov, osvežilnih sokov in domačih sladic —
            ob prijetnem prestižu naših mačjih prijateljev.
          </p>
        </div>
      </div>

      <motion.div className={styles.inner} style={{ y: textY }}>
        <div className={styles.grid}>
          <MenuColumn sections={col1} />
          <MenuColumn sections={col2} />
        </div>
      </motion.div>
    </section>
  );
}
