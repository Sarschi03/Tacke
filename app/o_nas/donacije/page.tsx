import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import InfoSplitSection from "../../../components/InfoSplitSection/InfoSplitSection";
import ScrollVelocity from "../../../components/ScrollVelocity/ScrollVelocity";
import styles from "../page.module.css";

export default function DonacijePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero 
          title="Donacije" 
          texts={["S svojo donacijo pomagate skrbeti za mačke in podpirate naše poslanstvo."]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <InfoSplitSection
          topTitle="Vsak prispevek šteje."
          topRightText="Vaše donacije neposredno pomagajo zagotoviti hrano, cepiva in veterinarsko pomoč."
          leftLabel="Kako donirati?"
          leftTitle="Skupaj lahko naredimo razliko."
          rightLabel="Kje konča vaš denar"
          rightText={[
            "100% zbranih sredstev se nameni neposredno za oskrbo in nego naših rešenih mačk. Pomagate nam plačati najnujnejše stroške, tiste vidne in nevidne.",
            "Omogočite jim toplo zavetje in igralni prostor. Vsak obrok in vsaka nega zanje pomenita korak do polnega zdravja in varnega življenja."
          ]}
          imageSrc="/1.jpg"
        />
        <ScrollVelocity texts={["Hvala za podporo ", "Donacije "]} className="scrollVelocityText" />
      </main>
      <Footer />
    </>
  );
}
