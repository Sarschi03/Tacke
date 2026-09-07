"use client";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import InfoSplitSection from "../../../components/InfoSplitSection/InfoSplitSection";
import ScrollVelocity from "../../../components/ScrollVelocity/ScrollVelocity";
import styles from "../page.module.css";
import { useLanguage } from "../../../context/LanguageContext";

export default function DonacijePage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero 
          title={t.pages.donations.subhero_title} 
          texts={[t.pages.donations.subhero_text]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <InfoSplitSection
          topTitle={t.pages.donations.top_title}
          topRightText={t.pages.donations.top_right}
          leftLabel={t.pages.donations.left_label}
          leftTitle={t.pages.donations.left_title}
          rightLabel={t.pages.donations.right_label}
          rightText={[
            t.pages.donations.right_p1,
            t.pages.donations.right_p2,
          ]}
          imageSrc="/1.jpg"
        />
        <ScrollVelocity texts={[t.pages.donations.scroll_1, t.pages.donations.scroll_2]} className="scrollVelocityText" />
      </main>
      <Footer />
    </>
  );
}
