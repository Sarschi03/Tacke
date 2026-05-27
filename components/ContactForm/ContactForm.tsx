import React from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.formSection}>
            <label className={styles.mainLabel}>Ime (obvezno)</label>
            <div className={styles.rowGroup}>
              <div className={styles.inputWrapper}>
                <p className={styles.subLabel}>Ime</p>
                <input type="text" className={styles.lineInput} required />
              </div>
              <div className={styles.inputWrapper}>
                <p className={styles.subLabel}>Priimek</p>
                <input type="text" className={styles.lineInput} required />
              </div>
            </div>
          </div>

          <div className={styles.rowGroup}>
            <div className={styles.formSection} style={{ flex: 1 }}>
              <label className={styles.mainLabel}>Vrsta članstva</label>
              <select className={styles.lineInput}>
                <option value="basic">Osnovno članstvo</option>
                <option value="premium">Premium članstvo</option>
              </select>
            </div>

            <div className={styles.formSection} style={{ flex: 1 }}>
              <label className={styles.mainLabel}>Email (obvezno)</label>
              <input type="email" className={styles.lineInput} required />
            </div>
          </div>

          <div className={styles.formSectionRow}>
            

          </div>

          <div className={styles.formSection}>
            <label className={styles.mainLabel}>Vaše sporočilo</label>
            <textarea rows={2} className={styles.lineInput}></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Pošlji</button>
        </form>
      </div>
    </section>
  );
}
