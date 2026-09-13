"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import styles from "./page.module.css";

const cats = [
  {
    name: "Henrik",
    image: "/henrik.jpg",
    meta: "25. 9. 2023 · rojen pri nas doma",
    description: "Njegova mamica je Diana, ata pa Dallas. Bil je vedno prvi ob hrani — misleč, da mora vse pojesti. Še vedno je strasten ljubitelj hrane in strasten cartljivec. Foodie & cartljivec.",
  },
  {
    name: "Diana",
    image: "/diana.jpg",
    meta: "12. 9. 2021 · iz Nove Gorice",
    description: "Njeni starši so iz Nove Gorice — pripotovala je dolgo pot. Je neverjetna mamica svojim mladičem. Ob njej čutiš neizmerno materinski čut.",
  },
  {
    name: "Lilu",
    image: "/lilu.jpg",
    meta: "27. 9. 2022",
    description: "Sestrica od Ferdota — bila je tudi hranjena na flaško. Nežna in čuteča muca do vseh.",
  },
  {
    name: "Čoko",
    image: "/c.jpg",
    meta: "10. 3. 2024 – 2. 10. 2025 · V večen spomin",
    description: "Poseben dolgodlaki mucek, poln energije. Mamica je naša muca Diana in naš mucek Dallas.",
  },
  {
    name: "Kelly",
    image: "/kelly.jpg",
    meta: "6. 12. 2022",
    description: "Prišla iz Sestrž, kjer je imela polno mačjih in pasjih prijateljev. Na dom se je navadila, a je še vedno malce zadržana.",
  },
  {
    name: "Dallas",
    image: "/dallas.jpg",
    meta: "22. 6. 2020",
    description: "Najstarejši mačji član! Prišel iz Mokronoga pri Novem mestu. Živel z devetimi otroki — navajen hrupa in prilagodljiv.",
  },
  {
    name: "Ferdo",
    image: "/ferdo.jpg",
    meta: "27. 9. 2022 · rojen pri nas doma",
    description: "Naš cartek je zrastel v velikega orjaka, ki mu nikoli ne zmanjka želje po cartanju …",
  },
  {
    name: "Freya",
    image: "/freya.jpg",
    meta: "2. 4. 2022 · iz Maribora",
    description: "Strastna muca, ki glasno prede ob vsakem dotiku. Rada ima močnejše božanje in vrača z nežnim grickanjem.",
  },
  {
    name: "Lily",
    image: "/lily.jpg",
    meta: "7. 2. 2021 · iz Vrhnike",
    description: "Lepo je sprejela novo okolje — ko jo pokličeš, priteče in začne nežno gnesti po trebuščku. Zelo skrbna mamica.",
  },
  {
    name: "Dalida",
    image: "/dalida.jpg",
    meta: "10. 7. 2021 · iz Prekmurja",
    description: "Majhna muca, ki se je v letu dni prelevila v pravo velikanko. Posebnega značaja — včasih dostopna, včasih ne.",
  },
];

export default function OMucahPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubHero
          title="O mucah"
          texts={["Spoznajte naše mačje družinske člane in njihove zgodbe."]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <section className={styles.section} aria-labelledby="cats-title">
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Naša mačja družina</p>
            <h2 id="cats-title">Vsaka ima svojo zgodbo.</h2>
            <p>Premaknite kazalec čez fotografijo ali se je dotaknite, da spoznate muco.</p>
          </div>
          <div className={styles.grid}>
            {cats.map((cat) => (
              <article className={styles.card} key={cat.name} tabIndex={0}>
                <div className={styles.photo}>
                  <Image src={cat.image} alt={cat.name} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw" />
                  <div className={styles.namePlate}><h3>{cat.name}</h3></div>
                </div>
                <div className={styles.biography}>
                  <p className={styles.meta}>{cat.meta}</p>
                  <p>{cat.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
