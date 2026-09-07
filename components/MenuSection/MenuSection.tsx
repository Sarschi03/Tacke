"use client";

import React, { useRef, RefObject } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import styles from './MenuSection.module.css';
import { useLanguage } from '../../context/LanguageContext';

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

interface MenuItemSection {
  category: string;
  subtitle?: string;
  note?: string;
  items: string[];
  sub: SubGroup[];
}

function MenuColumn({ sections }: { sections: MenuItemSection[] }) {
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
  const { t } = useLanguage();

  const menuData: MenuItemSection[] = [
    {
      category: t.menu.cat1_title,
      subtitle: t.menu.cat1_sub,
      items: [
        t.menu.items.espresso,
        t.menu.items.long_coffee,
        t.menu.items.coffee_milk,
        t.menu.items.white_coffee,
        t.menu.items.decaf_coffee,
        t.menu.items.cappuccino,
        t.menu.items.hot_chocolate,
        t.menu.items.cocoa,
      ],
      sub: [
        {
          label: t.menu.cat1_extras,
          items: [
            t.menu.items.syrup_cinnamon,
            t.menu.items.syrup_biscuit,
            t.menu.items.syrup_caramel,
            t.menu.items.syrup_hazelnut,
            t.menu.items.syrup_vanilla,
          ],
        },
      ],
    },
    {
      category: t.menu.cat2_title,
      items: [],
      sub: [
        {
          label: t.menu.cat2_title === 'BREZALKOHOLNE PIJAČE' ? 'Limonada z okusom' : t.menu.cat2_title === 'NON-ALCOHOLIC BEVERAGES' ? 'Flavored Lemonade' : 'Aromatisierte Limonade',
          sublabel: t.menu.cat2_sublabel,
          items: [
            t.menu.items.raspberry,
            t.menu.items.passionfruit,
            t.menu.items.pineapple,
            t.menu.items.green_apple,
            t.menu.items.mango,
            t.menu.items.strawberry,
          ],
        },
        { label: t.menu.items.cats_mojito, desc: t.menu.cat2_mojito_desc, items: [] },
        { label: t.menu.items.cats_colada, desc: t.menu.cat2_colada_desc, items: [] },
      ],
    },
    {
      category: t.menu.cat3_title,
      items: [
        t.menu.items.elderberry,
        t.menu.items.lavender,
        t.menu.items.mint,
        t.menu.items.nettle,
        t.menu.items.rose,
        t.menu.items.lungwort,
      ],
      sub: [],
    },
    {
      category: t.menu.cat4_title,
      note: t.menu.cat4_note,
      items: [],
      sub: [
        { label: t.menu.items.tea_women, desc: t.menu.cat4_w_desc, items: [] },
        { label: t.menu.items.tea_breathe, desc: t.menu.cat4_d_desc, items: [] },
        { label: t.menu.items.tea_snow, desc: t.menu.cat4_s_desc, items: [] },
        { label: t.menu.items.tea_oasis, desc: t.menu.cat4_o_desc, items: [] },
        { label: t.menu.items.tea_family, desc: t.menu.cat4_f_desc, items: [] },
      ],
    },
    {
      category: t.menu.cat5_title,
      items: [
        t.menu.items.fruit_teas,
        t.menu.items.herbal_teas,
        t.menu.items.green_tea,
        t.menu.items.black_tea,
      ],
      sub: [],
    },
  ];

  const col1 = menuData.slice(0, 2);
  const col2 = menuData.slice(2);

  return (
    <section className={styles.container} ref={sectionRef}>
      {/* Decorative tacka paws */}
      {/* {tackas.map((t, i) => (
        <ParallaxTacka key={i} {...t} />
      ))} */}

      {/* Two-column header */}
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <h2 className={styles.introTitle}>{t.menu.intro_title}</h2>
        </div>
        <div className={styles.introRight}>
          <p className={styles.introText}>{t.menu.intro_text}</p>
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
