import React from 'react';
import styles from './MapSection.module.css';

export default function MapSection() {
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
            <h3 className={styles.title}>Naša lokacija</h3>
            <p className={styles.address}>
              Zagata 5<br/>
              Maribor<br/>
              Slovenija
            </p>
          </div>
          
          <div className={styles.infoBlock}>
            <h3 className={styles.title}>Delovni čas</h3>
            <div className={styles.hoursList}>
              <div className={styles.hoursRow}><span>Ponedeljek - Petek:</span> <span>09:00 - 20:00</span></div>
              <div className={styles.hoursRow}><span>Sobota:</span> <span>09:00 - 15:00</span></div>
              <div className={styles.hoursRow}><span>Nedelja in prazniki:</span> <span>Zaprto</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
