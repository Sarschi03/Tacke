"use client";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubHero from "../../../components/SubHero/SubHero";
import InfoSplitSection from "../../../components/InfoSplitSection/InfoSplitSection";
import styles from "../page.module.css";

export default function OMucahPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero
          title="Dejstva o mucah"
          texts={[
            "Ali so mačke dobre za naše zdravje? Odgovor vas bo morda presenetil.",
          ]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        <InfoSplitSection
          topTitle="Kako mačja prisotnost dejansko vpliva na človeka?"
          topRightText="Znanstveno dokazano — mačja družba pozitivno vpliva na naše fizično in duševno zdravje. Ljudje, ki preživijo več časa z mačkami, se počutijo mirnejše in pod manjšim stresom — mačke so masaža za dušo."
          leftLabel="Dokazane koristi mačje prisotnosti"
          leftTitle="Mačke so masaža za dušo"
          rightLabel="Zdravje in dobro počutje"
          rightText={[
            "Manj stresa in tesnobe — mačja bližina znižuje raven kortizola, hormona stresa, ter pomaga pri anksioznosti in depresiji. Lastniki mačk imajo tudi nižji krvni tlak in manjše tveganje za srčne bolezni.",
            "Zdravilno predenje — mačje predenje (20–140 Hz) spodbuja celjenje kosti, mišic in tkiv. Mačje terapije pomagajo tudi otrokom in odraslim na avtističnem spektru.",
            "»Koristno je imeti mačke. Če se slabo počutiš, jih samo pogledaš in takoj se počutiš bolje.« — Charles Bukowski",
          ]}
          imageSrc="/diana.jpg"
        />
        <InfoSplitSection
          topTitle="Dokazane koristi — številke govorijo"
          topRightText="87 % skrbnikov meni, da jim mačka izboljša splošno počutje. Lastniki mačk imajo 30 % manjše tveganje za srčni infarkt, otroci pa 48 % manjšo verjetnost, da razvijejo alergije na mačke."
          leftLabel="Kosmati terapevti v akciji"
          leftTitle="Mačke resnično vplivajo na naše zdravje"
          rightLabel="Vsakodnevne koristi"
          rightText={[
            "Manj stresa — 76 % skrbnikov meni, da jim mačke pomagajo pri vsakodnevnem stresu. Božanje znižuje kortizol. Boljši spanec — predenje pomirja možgane in spodbuja izločanje melatonina.",
            "Več sreče — lastniki mačk so bolj srečni, samozavestni in manj živčni. So tudi bolj družbeno senzitivni in bolj zaupajo drugim ljudem.",
            "Mačke nas ne razveselijo samo z norčijami — imajo zelo resničen, znanstveno določen učinek na zdravje. »Čas preživet z mačko ni nikoli potraten.« — Sigmund Freud",
          ]}
          imageSrc="/henrik.jpg"
        />
        <InfoSplitSection
          topTitle="Kako nam mačke pomagajo vsak dan"
          topRightText="Svetovni dan mačk praznujemo 8. avgusta. Mačke zahtevajo vsakodnevno skrb, kar ustvarja strukturo — ključno za duševno zdravje. In seveda — brezpogojno ljubijo."
          leftLabel="Bližina, rutina in ljubezen"
          leftTitle="Vsak dan z mačko je boljši"
          rightLabel="Pomoč telesu in duši"
          rightText={[
            "Lajšajo stres — že nekaj minut crkljanja znižuje kortizol. Mačja prisotnost pomaga celo pri reševanju matematičnih nalog, z nižjim krvnim tlakom in manj napakami.",
            "Ščitijo naše srce — lastniki mačk so po stresu fiziološko okrevali hitreje kot ljudje brez mačk.",
            "Pomagajo otrokom z avtizmom — otroci z motnjami avtističnega spektra, ki se povežejo z mačkami, se bolje odzivajo na okolico in lažje berejo čustva.",
          ]}
          imageSrc="/lily.jpg"
        />
      </main>
      <Footer />
    </>
  );
}
