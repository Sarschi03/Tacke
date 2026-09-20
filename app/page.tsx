import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import MenuSection from "../components/MenuSection/MenuSection";
import EventsSection from "../components/EventsSection/EventsSection";
import TilesSection from "../components/TilesSection/TilesSection";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Mačja kavarna v Mariboru",
  description:
    "Obiščite Društvo ljubiteljev mačjih tačk v Mariboru, spoznajte naše muce ter odkrijte dogodke, ponudbo in termine obiska.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      {/*<ScrollTextSection />*/}
      <EventsSection />
      <MenuSection />
      <TilesSection />
      <Footer />
    </main>
  );
}
import type { Metadata } from "next";
