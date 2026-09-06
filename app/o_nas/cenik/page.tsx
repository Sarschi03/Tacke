import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import MenuSection from "../../../components/MenuSection/MenuSection";
import styles from "./page.module.css";

export default function CenikPage() {
  return (
    <>
      <Navbar />
      <SubHero 
        title="Cenik"
        texts={[]}
        imageSrc="/1. copy.jpg"
      />

      {/* Pricing info section */}
      <section className={styles.pricingSection}>
        <div className={styles.pricingInner}>
          <h2 className={styles.pricingTitle}>Vstopnina</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>Odrasli</span>
              <span className={styles.priceAmount}>10 €</span>
            </div>
            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>Otroci (4–9 let)</span>
              <span className={styles.priceAmount}>5 €</span>
            </div>
          </div>
          <p className={styles.pricingNote}>
            Vstop je dovoljen otrokom starosti 4 leta do 9 let v spremstvu odrasle osebe.
          </p>
          <p className={styles.pricingNote}>
            V ceno so všete voda, domači sokovi, kava, kakav, domači čaj in sezonsko sadje.
          </p>
        </div>
      </section>

      <MenuSection />
      <Footer />
    </>
  );
}
