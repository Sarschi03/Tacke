"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.col}>
          <h3 className={styles.colTitle}>MENI</h3>
          <Link href="/meni" className={styles.colLink}>Kavni napitki</Link>
          <Link href="/meni" className={styles.colLink}>Brezalkoholne pijače</Link>
          <Link href="/meni" className={styles.colLink}>Domači sokovi</Link>
          <Link href="/meni" className={styles.colLink}>Čaji</Link>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>PROSTOR</h3>
          <Link href="/o_nas" className={styles.colLink}>O nas</Link>
          <Link href="/muce" className={styles.colLink}>Naše muce</Link>
          <Link href="/rezervacija" className={styles.colLink}>Rezervacija</Link>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>LOKACIJA</h3>
          <p className={styles.colText}>Tacke Cat Café</p>
          <p className={styles.colText}>Ljubljana, Slovenija</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>KONTAKT</h3>
          <a href="mailto:info@tacke.si" className={styles.colLink}>info@tacke.si</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.colLink}>Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.colLink}>Facebook</a>
        </div>
      </div>

      <div className={styles.wordmark}>
        tacke
      </div>
    </footer>
  );
}
