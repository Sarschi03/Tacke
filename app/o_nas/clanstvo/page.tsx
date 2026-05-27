import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import InfoSplitSection from "../../../components/InfoSplitSection/InfoSplitSection";
import ContactForm from "../../../components/ContactForm/ContactForm";
import ScrollVelocity from "../../../components/ScrollVelocity/ScrollVelocity";
import styles from "../page.module.css";
import TilesSection from "@/components/TilesSection/TilesSection";

export default function ClanstvoPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero
          title="Članstvo"
          texts={["Postanite član naše skupnosti in uživajte v posebnih ugodnostih."]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <InfoSplitSection
          topTitle="Ekskluzivne ugodnosti."
          topRightText="S članstvom v naši kavarni pridobite dostop do številnih popustov in dogodkov."
          leftLabel="Zakaj postati član?"
          leftTitle="Veliko več kot le dobra kava."
          rightLabel="Vaše ugodnosti"
          rightText={[
            "Kot član dobite prednost pri rezervacijah, kar pomeni, da boste vedno našli prostor za sprostitev ob naših muckah. Ponujamo tudi fiksne popuste na vse tople napitke.",
            "Prav tako naši člani prejmejo ekskluzivna vabila na posebne dogodke, predavanja o oskrbi mačk ter druge z zaprtimi vrati vodene delavnice."
          ]}
          imageSrc="/1.jpg"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
