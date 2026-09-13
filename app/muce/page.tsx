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
}

const columns: Cat[][] = [
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
      {cats.map((cat) => (
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
      </main>
      <Footer />
    </>
  );
}
