"use client";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import styles from "./page.module.css";

export default function EventsPage() {
  const events = useQuery(api.events.listPublished) ?? [];
  const today = new Date().toISOString().slice(0, 10);
  const current = events.filter(
    (item) => item.isNews || !item.eventDate || item.eventDate >= today,
  );
  const previous = events.filter(
    (item) => !item.isNews && item.eventDate && item.eventDate < today,
  );
  const group = (title: string, items: typeof events) => (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <Link
            href={`/dogodki/${item._id}`}
            className={styles.card}
            key={item._id}
          >
            <div className={styles.image}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
            </div>
            <h3>{item.title}</h3>
            {item.eventDate && <small>{item.eventDate}</small>}
            <p>{item.shortDescription}</p>
          </Link>
        ))}
      </div>
    </section>
  );
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero
          title="Dogodki & novice"
          texts={["Aktualni dogodki, novice in zgodbe našega društva."]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        {group("Aktualni dogodki in novice", current)}
        {group("Pretekli dogodki", previous)}
      </main>
      <Footer />
    </>
  );
}
