"use client";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import MenuSection from "../../../components/MenuSection/MenuSection";
import styles from "./page.module.css";
import { useLanguage } from "../../../context/LanguageContext";

export default function CenikPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <SubHero 
        title={t.pages.pricing.subhero_title}
        texts={[]}
        imageSrc="/1. copy.jpg"
      />

      {/* Pricing info section */}
      <section className={styles.pricingSection}>
        <div className={styles.pricingInner}>
          <h2 className={styles.pricingTitle}>{t.pages.pricing.title}</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>{t.pages.pricing.adults}</span>
              <span className={styles.priceAmount}>10 €</span>
            </div>
            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>{t.pages.pricing.children}</span>
              <span className={styles.priceAmount}>5 €</span>
            </div>
          </div>
          <p className={styles.pricingNote}>
            {t.pages.pricing.note1}
          </p>
          <p className={styles.pricingNote}>
            {t.pages.pricing.note2}
          </p>
        </div>
      </section>

      <MenuSection />
      <Footer />
    </>
  );
}
