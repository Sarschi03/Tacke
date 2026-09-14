"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../legal.module.css";

const content = {
  slo: {
    title: "Politika zasebnosti",
    intro: "Kako Društvo ljubiteljev mačjih tačk varuje vaše osebne podatke.",
    sections: [
      [
        "Upravljavec podatkov",
        "Upravljavec osebnih podatkov je Društvo ljubiteljev mačjih tačk. Za vprašanja nam pišite na drustvo.macjetacke@gmail.com.",
      ],
      [
        "Katere podatke zbiramo",
        "Pri rezervaciji zbiramo ime in priimek, e-poštni naslov, telefonsko številko, število oseb, izbrani termin ter morebitno sporočilo. Podatke, ki nam jih pošljete po e-pošti, uporabimo za odgovor na vaše sporočilo.",
      ],
      [
        "Namen in pravna podlaga",
        "Podatke uporabljamo za izvedbo in upravljanje rezervacij, komunikacijo z obiskovalci, zagotavljanje varnosti ter izpolnjevanje zakonskih obveznosti. Obdelava temelji na izvedbi vašega zahtevka, zakonitem interesu društva ali zakonski obveznosti.",
      ],
      [
        "Hramba in posredovanje",
        "Podatke hranimo le toliko časa, kolikor je potrebno za navedene namene in izpolnjevanje zakonskih obveznosti. Dostop imajo le pooblaščene osebe in ponudniki storitev, ki jih potrebujemo za delovanje spletne strani in rezervacijskega sistema.",
      ],
      [
        "Vaše pravice",
        "Zahtevate lahko dostop, popravek, izbris ali omejitev obdelave svojih podatkov ter ugovarjate obdelavi. Zahtevo pošljite na drustvo.macjetacke@gmail.com. Prav tako lahko vložite pritožbo pri Informacijskem pooblaščencu Republike Slovenije.",
      ],
    ],
  },
  eng: {
    title: "Privacy Policy",
    intro: "How the Society of Cat Paw Lovers protects your personal data.",
    sections: [
      [
        "Data controller",
        "The controller of personal data is the Society of Cat Paw Lovers. For questions, contact us at drustvo.macjetacke@gmail.com.",
      ],
      [
        "Data we collect",
        "When you make a reservation, we collect your full name, email address, telephone number, party size, selected appointment and any optional message. Information sent to us by email is used to respond to your enquiry.",
      ],
      [
        "Purpose and legal basis",
        "We use data to process and manage reservations, communicate with visitors, ensure safety and comply with legal obligations. Processing is based on fulfilling your request, the association's legitimate interests or a legal obligation.",
      ],
      [
        "Retention and sharing",
        "We retain data only for as long as necessary for these purposes and applicable legal obligations. Access is limited to authorised persons and service providers needed to operate the website and reservation system.",
      ],
      [
        "Your rights",
        "You may request access, correction, deletion or restriction of your data and object to processing. Send requests to drustvo.macjetacke@gmail.com. You may also lodge a complaint with the Information Commissioner of the Republic of Slovenia.",
      ],
    ],
  },
  ger: {
    title: "Datenschutzerklärung",
    intro:
      "Wie der Verein der Katzenpfoten-Liebhaber Ihre personenbezogenen Daten schützt.",
    sections: [
      [
        "Verantwortlicher",
        "Verantwortlicher für personenbezogene Daten ist der Verein der Katzenpfoten-Liebhaber. Bei Fragen schreiben Sie an drustvo.macjetacke@gmail.com.",
      ],
      [
        "Welche Daten wir erheben",
        "Bei einer Reservierung erheben wir Vor- und Nachname, E-Mail-Adresse, Telefonnummer, Personenzahl, gewählten Termin und eine optionale Nachricht. Per E-Mail übermittelte Daten verwenden wir zur Beantwortung Ihrer Anfrage.",
      ],
      [
        "Zweck und Rechtsgrundlage",
        "Wir verwenden Daten zur Bearbeitung und Verwaltung von Reservierungen, zur Kommunikation mit Besuchern, zur Gewährleistung der Sicherheit und zur Erfüllung gesetzlicher Pflichten. Die Verarbeitung beruht auf der Durchführung Ihrer Anfrage, berechtigten Interessen des Vereins oder einer gesetzlichen Pflicht.",
      ],
      [
        "Speicherung und Weitergabe",
        "Wir speichern Daten nur so lange, wie es für diese Zwecke und gesetzliche Pflichten erforderlich ist. Zugriff erhalten nur befugte Personen und Dienstleister, die für den Betrieb der Website und des Reservierungssystems notwendig sind.",
      ],
      [
        "Ihre Rechte",
        "Sie können Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen und der Verarbeitung widersprechen. Senden Sie Ihre Anfrage an drustvo.macjetacke@gmail.com. Außerdem können Sie sich bei der slowenischen Datenschutzaufsichtsbehörde beschweren.",
      ],
    ],
  },
} as const;

export default function PrivacyPage() {
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
