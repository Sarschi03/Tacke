import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import ScrollTextSection from "../components/ScrollTextSection/ScrollTextSection";
import MenuSection from "../components/MenuSection/MenuSection";
import EventsSection from "../components/EventsSection/EventsSection";
import TilesSection from "../components/TilesSection/TilesSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar darkText />
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
