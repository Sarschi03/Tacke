"use client";

import React from 'react';
import styles from './MapSection.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <div className={styles.mapColumn}>
          <iframe 
            src="https://maps.google.com/maps?q=Zagata%205,%20Maribor&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            className={styles.mapIframe}
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.textColumn}>
          <div className={styles.infoBlock}>
            <h3 className={styles.title}>{t.map.title_location}</h3>
            <p className={styles.address}>
              Zagata 5<br/>
              Maribor<br/>
              Slovenija
            </p>
          </div>
          
          <div className={styles.infoBlock}>
            <h3 className={styles.title}>{t.map.title_contact}</h3>
            <p className={styles.address}>
              <a href="tel:041374434" style={{ color: '#444', textDecoration: 'none' }}>041 374 434</a>
            </p>
          </div>
          
          <div className={styles.infoBlock}>
            <h3 className={styles.title}>{t.map.title_hours}</h3>
            <div className={styles.hoursList}>
              <div className={styles.hoursRow}><span>{t.map.every_day}</span> <span>{t.footer.hoursVal}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
