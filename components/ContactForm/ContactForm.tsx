"use client";

import { FormEvent, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import styles from "./ContactForm.module.css";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const join = useMutation(api.members.join);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setSubmitting(true);
    setStatus("");
    try {
      await join({
        firstName: String(form.get("firstName")),
        lastName: String(form.get("lastName")),
        email: String(form.get("email")),
        phone: String(form.get("phone")),
        address: String(form.get("address")),
        message: String(form.get("message") ?? "") || undefined,
      });
      formElement.reset();
      setStatus(t.pages.membership.form_success);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Oddaja ni uspela.");
    } finally {
      setSubmitting(false);
    }
  }

  const membership = t.pages.membership;
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={submit}>
          <div className={styles.formSection}>
            <label className={styles.mainLabel}>
              {membership.form_name_req}
            </label>
            <div className={styles.rowGroup}>
              <div className={styles.inputWrapper}>
                <p className={styles.subLabel}>{membership.form_first_name}</p>
                <input
                  name="firstName"
                  type="text"
                  className={styles.lineInput}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <p className={styles.subLabel}>{membership.form_last_name}</p>
                <input
                  name="lastName"
                  type="text"
                  className={styles.lineInput}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.rowGroup}>
            <div className={styles.formSection}>
              <label className={styles.mainLabel}>
                {membership.form_email}
              </label>
              <input
                name="email"
                type="email"
                className={styles.lineInput}
                required
              />
            </div>
            <div className={styles.formSection}>
              <label className={styles.mainLabel}>
                {membership.form_phone}
              </label>
              <input
                name="phone"
                type="tel"
                className={styles.lineInput}
                required
              />
            </div>
          </div>
          <div className={styles.formSection}>
            <label className={styles.mainLabel}>
              {membership.form_address}
            </label>
            <input
              name="address"
              type="text"
              className={styles.lineInput}
              required
            />
          </div>
          <div className={styles.formSection}>
            <label className={styles.mainLabel}>{membership.form_msg}</label>
            <textarea name="message" rows={3} className={styles.lineInput} />
          </div>
          {status && <p aria-live="polite">{status}</p>}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={submitting}
          >
            {submitting ? "…" : membership.form_send}
          </button>
        </form>
      </div>
    </section>
  );
}
