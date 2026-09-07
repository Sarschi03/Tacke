"use client";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import InfoSplitSection from "../../../components/InfoSplitSection/InfoSplitSection";
import ContactForm from "../../../components/ContactForm/ContactForm";
import styles from "../page.module.css";
import { useLanguage } from "../../../context/LanguageContext";

export default function ClanstvoPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero
          title={t.pages.membership.subhero_title}
          texts={[t.pages.membership.subhero_text]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <InfoSplitSection
          topTitle={t.pages.membership.top_title}
          topRightText={t.pages.membership.top_right}
          leftLabel={t.pages.membership.left_label}
          leftTitle={t.pages.membership.left_title}
          rightLabel={t.pages.membership.right_label}
          rightText={[
            t.pages.membership.right_p1,
            t.pages.membership.right_p2,
          ]}
          imageSrc="/1.jpg"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
