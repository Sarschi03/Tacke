"use client";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import InfoSplitSection from "../../../components/InfoSplitSection/InfoSplitSection";
import { useLanguage } from "../../../context/LanguageContext";
import styles from "../page.module.css";
import membershipStyles from "./page.module.css";

export default function ClanstvoPage() {
  const { t } = useLanguage();
  const membership = t.pages.membership;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero
          title={membership.subhero_title}
          texts={[membership.subhero_text]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <InfoSplitSection
          topTitle={membership.top_title}
          topRightText={membership.top_right}
          leftLabel={membership.left_label}
          leftTitle={membership.left_title}
          rightLabel={membership.right_label}
          rightText={[membership.right_p1, membership.right_p2]}
          imageSrc="/4.jpg"
        />
        <section className={membershipStyles.downloadSection}>
          <a
            className={membershipStyles.downloadButton}
            href="/statut-drustva-ljubiteljev-macjih-tack.pdf"
            download
          >
            {membership.download_form}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
