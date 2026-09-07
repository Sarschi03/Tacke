"use client";

import React from 'react';
import styles from './ContactForm.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.formSection}>
            <label className={styles.mainLabel}>{t.pages.membership.form_name_req}</label>
            <div className={styles.rowGroup}>
              <div className={styles.inputWrapper}>
                <p className={styles.subLabel}>{t.pages.membership.form_first_name}</p>
                <input type="text" className={styles.lineInput} required />
              </div>
              <div className={styles.inputWrapper}>
                <p className={styles.subLabel}>{t.pages.membership.form_last_name}</p>
                <input type="text" className={styles.lineInput} required />
              </div>
            </div>
          </div>

          <div className={styles.rowGroup}>
            <div className={styles.formSection} style={{ flex: 1 }}>
              <label className={styles.mainLabel}>{t.pages.membership.form_type}</label>
              <select className={styles.lineInput}>
                <option value="basic">{t.pages.membership.form_basic}</option>
                <option value="premium">{t.pages.membership.form_premium}</option>
              </select>
            </div>

            <div className={styles.formSection} style={{ flex: 1 }}>
              <label className={styles.mainLabel}>{t.pages.membership.form_email}</label>
              <input type="email" className={styles.lineInput} required />
            </div>
          </div>

          <div className={styles.formSection}>
            <label className={styles.mainLabel}>{t.pages.membership.form_msg}</label>
            <textarea rows={2} className={styles.lineInput}></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>{t.pages.membership.form_send}</button>
        </form>
      </div>
    </section>
  );
}
