import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import InfoSplitSection from "../../components/InfoSplitSection/InfoSplitSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import MapSection from "../../components/MapSection/MapSection";
import styles from "./page.module.css";

export default function ONasPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero 
          title="O nas" 
          texts={["Spoznajte našo zgodbo in kako se je vse začelo."]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <InfoSplitSection
          topTitle="Dobrodošli v Tacke Cat Café."
          topRightText="Prostor, kjer se združita ljubezen do mačk in odlična kava."
          leftLabel="Kdo smo?"
          leftTitle="Ustvarjamo sproščujoče okolje za vse."
          rightLabel="Naše poslanstvo"
          rightText={[
            "Naša zgodba se je začela s preprosto idejo: ustvariti varen in prijeten kotiček za mačke, ki potrebujejo dom, ter hkrati ponuditi prostor za sprostitev vsem ljubiteljem živali.",
            "Vsak obisk pri nas pomaga pri oskrbi in iskanju novih domov za naše kosmate prijatelje. Verjamemo v dobrobit živali in grajenje skupnosti."
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
