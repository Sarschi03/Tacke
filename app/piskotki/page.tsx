"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../legal.module.css";

const content = {
  slo: {
    title: "Piškotki",
    intro: "Informacije o piškotkih in shranjevanju podatkov v brskalniku.",
    sections: [
      [
        "Nujno shranjevanje",
        "Spletna stran uporablja nujno lokalno shranjevanje za izbrani jezik in varno prijavo v nadzorno ploščo. Brez teh podatkov nekatere funkcije ne bi delovale pravilno.",
      ],
      [
        "Analitični in oglaševalski piškotki",
        "Trenutno ne uporabljamo oglaševalskih piškotkov ali piškotkov za profiliranje obiskovalcev.",
      ],
      [
        "Upravljanje podatkov",
        "Shranjene podatke lahko izbrišete v nastavitvah svojega brskalnika. S tem boste morda odjavljeni, jezik strani pa bo ponastavljen.",
      ],
    ],
  },
  eng: {
    title: "Cookies",
    intro: "Information about cookies and browser storage.",
    sections: [
      [
        "Essential storage",
        "The website uses essential local browser storage for your language selection and secure dashboard login. Some features would not work correctly without this data.",
      ],
      [
        "Analytics and advertising cookies",
        "We currently do not use advertising cookies or cookies to profile visitors.",
      ],
      [
        "Managing stored data",
        "You can delete stored data in your browser settings. This may sign you out and reset the website language.",
      ],
    ],
  },
  ger: {
    title: "Cookies",
    intro: "Informationen zu Cookies und zur Speicherung im Browser.",
    sections: [
      [
        "Notwendige Speicherung",
        "Die Website verwendet notwendige lokale Browserspeicherung für Ihre Sprachauswahl und die sichere Anmeldung im Dashboard. Ohne diese Daten würden einige Funktionen nicht richtig funktionieren.",
      ],
      [
        "Analyse- und Werbe-Cookies",
        "Wir verwenden derzeit keine Werbe-Cookies oder Cookies zur Profilbildung von Besuchern.",
      ],
      [
        "Gespeicherte Daten verwalten",
        "Sie können gespeicherte Daten in den Einstellungen Ihres Browsers löschen. Dadurch werden Sie möglicherweise abgemeldet und die Sprache der Website wird zurückgesetzt.",
      ],
    ],
  },
} as const;

export default function CookiesPage() {
  const { language } = useLanguage();
  const page = content[language];
  return (
    <>
      <Navbar />
      <main className={styles.legalPage}>
        <SubHero
          title={page.title}
          texts={[page.intro]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <section className={styles.legalContent}>
          {page.sections.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
