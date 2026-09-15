"use client";
import { use } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./page.module.css";

export default function EventDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const item = useQuery(api.events.getById, { id: id as Id<"events"> });
  if (item === undefined) return null;
  if (!item)
    return (
      <>
        <Navbar />
        <main className={styles.empty}>Objava ne obstaja.</main>
        <Footer />
      </>
    );
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
          <div>
            <p>{item.isNews ? "Novica" : item.eventDate}</p>
            <h1>{item.title}</h1>
            <span>{item.shortDescription}</span>
          </div>
        </section>
        <section className={styles.split}>
          <div>
            <p>Dogodki & novice</p>
            <h2>{item.title}</h2>
          </div>
          <article>
            {item.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
