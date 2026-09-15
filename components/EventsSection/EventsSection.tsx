"use client";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import styles from "./EventsSection.module.css";
import { useLanguage } from "../../context/LanguageContext";

export default function EventsSection() {
  const { t } = useLanguage();
  const events = useQuery(api.events.listPublished);
  const today = new Date().toISOString().slice(0, 10);
  const current =
    events
      ?.filter(
        (item) => item.isNews || !item.eventDate || item.eventDate >= today,
      )
      .slice(0, 3) ?? [];
  return (
    <section className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.topLeft}>
          <h2 className={styles.topTitle}>{t.events.top_title}</h2>
        </div>
        <div className={styles.topRight}>
          <p className={styles.topRightText}>{t.events.top_text}</p>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.bottomLeft}>
          <h3 className={styles.label}>{t.events.label}</h3>
          <h2 className={styles.leftTitle}>{t.events.left_title}</h2>
          {current.length > 0 && (
            <Link href="/dogodki">Poglej vse dogodke</Link>
          )}
        </div>
        <div className={styles.cardsRow}>
          {current.map((item) => (
            <Link
              href={`/dogodki/${item._id}`}
              key={item._id}
              className={styles.card}
            >
              <div className={styles.cardImageWrapper}>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={styles.cardImage}
                  />
                )}
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardHeading}>{item.title}</h4>
                <p className={styles.cardText}>{item.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
