"use client";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import InfoSplitSection from "../../../components/InfoSplitSection/InfoSplitSection";
import ContactForm from "../../../components/ContactForm/ContactForm";
import styles from "../page.module.css";

export default function ClanstvoPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero
          title="Članstvo"
          texts={["Pridruži se nam in postani del naše mačje družine! 🐾"]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <InfoSplitSection
          topTitle="Kdo je lahko naš član?"
          topRightText="Člani društva so lahko državljanke in državljani Republike Slovenije, ki podpišejo pristopno izjavo, želijo postati člani, so seznanjeni s pravili in se bodo po njih ravnali. Če se v društvo včlani mladoletnik do 7. leta starosti, pristopno izjavo podpiše njegov zakoniti zastopnik. Od 7. do 15. leta starosti mora zakoniti zastopnik pred vstopom v društvo podati pisno soglasje."
          leftLabel="Članarina"
          leftTitle="Letna članarina: 20 €"
          rightLabel="Članstvo preneha"
          rightText={[
            "Po sklepu Občnega zbora, 29. 10. 2024. Študentje in brezposelne osebe so oproščene plačevanja članarine.",
            "• s prostovoljnim izstopom iz društva,",
            "• s črtanjem iz članstva,",
            "• z izključitvijo na podlagi sklepa disciplinske komisije,",
            "• s smrtjo.",
          ]}
          imageSrc="/1.jpg"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
