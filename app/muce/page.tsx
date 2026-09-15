"use client";

import { RefObject, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./page.module.css";

interface Cat {
  name: string;
  image: string;
  meta: string;
  description: string;
  hidden?: boolean;
}

const columns: Cat[][] = [
  // To replace or add a cat, upload the image to /public and edit its image path here.
  [
    {
      name: "Dalida",
      image: "/dalida.jpg",
      meta: "10. 7. 2021 · iz Prekmurja",
      description:
        "Majhna muca, ki se je v letu dni prelevila v pravo velikanko. Posebnega značaja — včasih dostopna, včasih ne.",
    },
    {
      name: "Dallas",
      image: "/dallas.jpg",
      meta: "22. 6. 2020",
      description:
        "Najstarejši mačji član! Prišel je iz Mokronoga pri Novem mestu. Živel je z devetimi otroki — navajen je hrupa in zelo prilagodljiv.",
    },
    {
      name: "Diana",
      image: "/diana.jpg",
      meta: "12. 9. 2021 · iz Nove Gorice",
      description:
        "Njeni starši so iz Nove Gorice — pripotovala je dolgo pot. Je neverjetna mamica svojim mladičem. Ob njej čutiš neizmeren materinski čut.",
    },
    {
      name: "Blanka",
      image: "/blanka.jpg",
      meta: "",
      description:
        "Blanka je rodovniška muca, ki prihaja iz Zemuna v Beogradu. Že od samega začetka je bila nežna, prikupna in posebna, vendar jo je žal spremljalo tudi zahtevno zdravstveno obdobje. Spopada se z močnimi alergijami, zaradi katerih se še vedno zdravi in potrebuje posebno nego, veliko potrpežljivosti ter ljubezni. Kljub vsem težavam ostaja izjemno nežna, prijazna in srčna muca, ki s svojo prisotnostjo hitro očara vsakogar.",
    },
    {
      name: "Čoko †",
      image: "/coko.jpg",
      meta: "",
      description: "",
    },
    {
      name: "Kena",
      image: "/kena.jpg",
      meta: "",
      description: "",
    },
  ],
  [
    {
      name: "Ferdo",
      image: "/ferdo.jpg",
      meta: "27. 9. 2022 · rojen pri nas doma",
      description:
        "Naš cartek je zrastel v velikega orjaka, ki mu nikoli ne zmanjka želje po cartanju …",
    },
    {
      name: "Freya",
      image: "/freya.jpg",
      meta: "2. 4. 2022 · iz Maribora",
      description:
        "Strastna muca, ki glasno prede ob vsakem dotiku. Rada ima močnejše božanje in vrača z nežnim grickanjem.",
    },
    {
      name: "Henrik",
      image: "/henrik.jpg",
      meta: "25. 9. 2023 · rojen pri nas doma",
      description:
        "Njegova mamica je Diana, ata pa Dallas. Vedno je bil prvi ob hrani — misleč, da mora vse pojesti. Še vedno je strasten ljubitelj hrane in cartljivec.",
    },
    {
      name: "Lola",
      image: "/lola.jpg",
      meta: "6. 5. 2026 ",
      description:
        "Lola je naša čudovita mladenka, hčerka nežne Freye in očarljivega očeta Henrika. Od prvih dni naprej nas navdušuje s svojo radovednostjo, nežnostjo in igrivim značajem. Vsak njen pogled, poskok in nagajiv nasmeh nam polepša dan. Lola je prava mala princeska, ki v naš dom prinaša ogromno veselja, topline in ljubezni.",
    },
    {
      name: "daisy",
      image: "/daisy.jpg",
      meta: "",
      description:
        "Daisy je nežna, elegantna in prijazna muca, ki s svojim toplim pogledom hitro osvoji srca. Je skrbna in predana mama, ki z veliko ljubezni skrbi za svoje mladičke ter jim daje občutek varnosti. Čeprav je zelo ljubka, ima tudi svojo voljo. Včasih uživa v božanju, drugič pa si želi miru in prostora zase. Prav zaradi te samosvojosti je še posebej posebna.",
    },
    {
      name: "Creamy",
      image: "/creamy.jpg",
      meta: "",
      description: "",
    },
  ],
  [
    {
      name: "Kelly",
      image: "/kelly.jpg",
      meta: "6. 12. 2022",
      description:
        "Prišla je iz Sestrž, kjer je imela polno mačjih in pasjih prijateljev. Na dom se je navadila, a je še vedno malce zadržana.",
    },
    {
      name: "Lilu",
      image: "/lilu.jpg",
      meta: "27. 9. 2022",
      description:
        "Sestrica od Ferdota — bila je tudi hranjena na flaško. Nežna in čuteča muca do vseh.",
    },
    {
      name: "Lily",
      image: "/lily.jpg",
      meta: "7. 2. 2021 · iz Vrhnike",
      description:
        "Lepo je sprejela novo okolje — ko jo pokličeš, priteče in začne nežno gnesti po trebuščku. Zelo skrbna mamica.",
    },

    {
      name: "Maksi",
      image: "/maksi.jpg",
      meta: "16. 6. 2024 ",
      description:
        "Maksi je nežen, prijazen in zelo prikupen maček, ki ti hitro zleze pod kožo. Za njim je težka operacija, saj mu je zaradi hudih zdravstvenih zapletov črevesje zdrsnilo iz trebuščka. Komaj je preživel, danes pa je pravi mali borec. Zaradi posledic operacije ne čuti, kdaj mora odvajati blato, zato se ga je ljubkovalno prijel vzdevek »Posranček«.  ",
    },
    {
      name: "Katy",
      image: "/katy.jpg",
      meta: " ",
      description:
        "Katy je bila na začetku naša glavna športnica. Z veliko energije in navdušenja je neutrudno vrtela kolo ter skrbela, da je bilo v našem mačjem svetu vedno dovolj gibanja in živahnosti. Danes je šport nekoliko opustila, saj je odkrila še eno veliko strast – crkljanje. Katy se zdaj še raje kot telovadbi posveča nežnim dotikom, pozornosti in cartanju. Ko si zaželi bližine, to pokaže zelo jasno in strastno – njena ljubezen do ljudi je iskrena, topla in neizmerna.",
    },
  ],
];

const otherAnimals: Cat[][] = [
  [
    {
      name: "Xena in Arija",
      image: "/xena.jpg",
      meta: "",
      description:
        "Xena in Aria sta naši prikupni bradati agami, ki sta s svojim mirnim značajem in zanimivim vedenjem osvojili prav vsakogar. Obe sta navajeni ljudi in tudi mačk, saj jih vsak dan opazujeta in sta vajeni njihove prisotnosti. Aria je od Xene mlajša približno dva meseca, vendar je kljub temu večja od nje. Prav zaradi tega sta si še posebej zanimivi – vsaka ima svoj značaj in svojo posebno podobo.",
    },
    {
      name: "Ginko in Blue",
      image: "/ginko.jpg",
      meta: "",
      description:
        "Grinko in Blue sta prav posebni papigi, ki s svojo prikupnostjo hitro osvojita vsakogar. Živita med mačkami, zato sta se od njiju naučili nekaj prav nenavadnega – posnemata mačje petje! Ko se oglasita, je njuno petje tako ljubko in zabavno, da človek skoraj ne more verjeti svojim ušesom. Namesto običajnega oglašanja papig lahko pri njiju slišimo zvoke, ki spominjajo na mačje mijavkanje in predenje.",
    },
  ],
  [
    {
      name: "Lakotka in Slowko",
      image: "/slowko.jpg",
      meta: "",
      description:
        "Lakotka in Slowko sta prav posebni želvi, ki s svojim vedenjem hitro osvojita vsakogar. Lakotka je dobila ime zato, ker skoraj ves čas samo je. Slowko pa je pravi počasnež. Premika se počasi in umirjeno, kot se za želvo tudi spodobi.",
    },
    {
      name: "3 Pajolanke in gupiji",
      image: "/gupi.jpg",
      meta: "",
      description:
        "Pajcolanke z velikimi možgani in gupiji živijo skupaj v čudovitem sožitju v akvariju. Vsaka žival ima svojo posebno vlogo, skupaj pa ustvarjajo miren in zanimiv podvodni svet. Pajcolanke so radovedne in bistre, gupiji pa živahni, pisani ter vedno pripravljeni na raziskovanje. Čeprav so si med seboj različni, se lepo dopolnjujejo in mirno sobivajo.",
    },
  ],
  [
    {
      name: "Jackson",
      image: "/jackson.jpg",
      meta: "",
      description:
        "Jackson je pravi posebnež med našimi živalmi. Je najbolj cartljiv, najbolj glasen in zagotovo eden najbolj prepoznavnih prebivalcev našega kotička. Njegovo kukurikanje je skoraj nemogoče spregledati – oziroma preslišati! Ko se oglasi Jackson, vsi vemo, kdo je glavni.",
    },
    {
      name: "Yuki Kuro",
      image: "/kuro.jpg",
      meta: "",
      description:
        "Ob Jacksonu sta njegovi dve zvesti prijateljici, s katerima tvori prav posebno trojico.",
    },
  ],
];

function TileColumn({ cats, speed }: { cats: Cat[]; speed: number }) {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * -80}px`, `${speed * 80}px`],
  );

  return (
    <motion.div className={styles.column} ref={ref} style={{ y }}>
      {cats
        .filter((cat) => !cat.hidden)
        .map((cat) => (
          <article key={cat.name} className={styles.tileWrapper} tabIndex={0}>
            <div
              className={styles.tile}
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <div className={styles.nameOverlay}>
              <h2 className={styles.catName}>{cat.name}</h2>
              <p className={styles.catMeta}>{cat.meta}</p>
              <p className={styles.catDescription}>{cat.description}</p>
            </div>
          </article>
        ))}
    </motion.div>
  );
}

export default function MucePage() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <main>
        <SubHero
          title={t.pages.cats.subhero_title}
          texts={[t.pages.cats.subhero_text]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <section className={styles.tilesSection}>
          <div className={styles.wrap}>
            <TileColumn cats={columns[0]} speed={1} />
            <TileColumn cats={columns[1]} speed={-1} />
            <TileColumn cats={columns[2]} speed={1} />
          </div>
        </section>
        <section className={`${styles.tilesSection} ${styles.otherSection}`}>
          <h2 className={styles.sectionTitle}>Naše druge živali</h2>
          <div className={styles.wrap}>
            <TileColumn cats={otherAnimals[0]} speed={1} />
            <TileColumn cats={otherAnimals[1]} speed={-1} />
            <TileColumn cats={otherAnimals[2]} speed={1} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
