"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import MapSection from "../../components/MapSection/MapSection";
import { useLanguage } from "../../context/LanguageContext";

export default function KontaktPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        <SubHero
          title={t.pages.contact.subhero_title}
          texts={[t.pages.contact.subhero_text]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
