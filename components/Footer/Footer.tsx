"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { useLanguage } from "../../context/LanguageContext";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.77 1.52V7.08a4.85 4.85 0 0 1-1-.39z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      {/* Social icons row — above the grid so they don't affect title alignment */}
      <div className={styles.socialsRow}>
        <a
          href="https://www.instagram.com/macjetacke/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.tiktok.com/@drustvomacjihtack"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="TikTok"
        >
          <TikTokIcon />
        </a>
        <a
          href="https://www.facebook.com/p/Dru%C5%A1tvo-ljubiteljev-ma%C4%8Djih-ta%C4%8Dk-61567177840034/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
      </div>

      {/* 5-column grid — all titles on the exact same horizontal line */}
      <div className={styles.grid}>
        {/* Col 1 – O nas */}
        <div className={styles.col}>
          <Link href="/o_nas" className={styles.colTitle}>
            {t.footer.about}
          </Link>
          <Link href="/o_nas/clanstvo" className={styles.colLink}>
            {t.nav.membership}
          </Link>
          <Link href="/o_nas/donacije" className={styles.colLink}>
            {t.nav.donations}
          </Link>
          <Link href="/o_nas/cenik" className={styles.colLink}>
            {t.nav.pricing}
          </Link>
        </div>

        {/* Col 2 – Naše muce / Rezervacija */}
        <div className={styles.col}>
          <Link href="/muce" className={styles.colTitle}>
            {t.footer.cats}
          </Link>
          <Link href="/rezervacija" className={styles.colTitle}>
            {t.nav.reservation}
          </Link>
        </div>

        {/* Col 3 – Delovni čas */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>{t.footer.hours}</h3>
          <p className={styles.colText}>{t.footer.everyDay}</p>
          <p className={styles.colText}>16:15–17:15</p>
          <p className={styles.colText}>17:30–18:30</p>
          <p className={styles.colText}>18:45–19:45</p>
        </div>

        {/* Col 4 – Lokacija */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>{t.footer.location}</h3>
          <a
            href="https://maps.google.com/?q=Zagata+5,+Maribor"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colLink}
          >
            Zagata 5, Maribor
          </a>
        </div>

        {/* Col 5 – Kontakt */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>{t.footer.contact}</h3>
          <a href="tel:041374434" className={styles.colLink}>
            041 374 434
          </a>
          <a
            href="mailto:drustvo.macjetacke@gmail.com"
            className={styles.colLink}
          >
            drustvo.macjetacke@gmail.com
          </a>
          <p className={styles.financialDetails}>
            TRR SI56 6100 0002 9754 224 <br /> Delavska hranilnica DD
            <br />
            BIC/SWIFT: HDELSI22
            <br />
            DAVČNA ŠTEVILKA: 23705647
            <br />
            MATIČNA ŠTEVILKA: 4127951000
          </p>
        </div>
      </div>

      <div className={styles.wordmark}>tacke</div>
      <nav className={styles.legalLinks} aria-label="Pravne informacije">
        <Link href="/politika-zasebnosti">{t.footer.privacy}</Link>
        <Link href="/piskotki">{t.footer.cookies}</Link>
      </nav>
    </footer>
  );
}
