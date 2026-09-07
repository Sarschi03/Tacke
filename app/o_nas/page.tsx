"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import InfoSplitSection from "../../components/InfoSplitSection/InfoSplitSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import MapSection from "../../components/MapSection/MapSection";
import styles from "./page.module.css";
import { useLanguage } from "../../context/LanguageContext";

export default function ONasPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero 
          title={t.pages.about.subhero_title} 
          texts={[t.pages.about.subhero_text]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <InfoSplitSection
          topTitle={t.pages.about.top_title}
          topRightText={t.pages.about.top_right}
          leftLabel={t.pages.about.left_label}
          leftTitle={t.pages.about.left_title}
          rightLabel={t.pages.about.right_label}
          rightText={[
            t.pages.about.right_p1,
            t.pages.about.right_p2,
          ]}
          imageSrc="/hero.jpg"
        />
        <AboutSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
