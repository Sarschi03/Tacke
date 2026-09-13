"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./page.module.css";

export default function ReservationDetailsPage() {
  return <Suspense fallback={<main className={styles.main}>Nalagam obrazec …</main>}><ReservationDetailsForm /></Suspense>;
}

function ReservationDetailsForm() {
  const params = useSearchParams();
  const date = params.get("date") ?? "";
  const timeSlot = params.get("time") ?? "";
  const addReservation = useMutation(api.reservations.addReservation);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSending(true);
    setStatus("");
    try {
      await addReservation({ date, timeSlot, name: String(form.get("name")), email: String(form.get("email")), phone: String(form.get("phone")), partySize: Number(form.get("partySize")) });
      setStatus("Rezervacija je uspešno oddana.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Rezervacije ni bilo mogoče oddati.");
    } finally {
      setSending(false);
    }
  }

  return <><Navbar /><main className={styles.main}><form className={styles.form} onSubmit={submit}>
    <p className={styles.eyebrow}>Rezervacija mize</p><h1>Vaši podatki</h1>
    <p className={styles.slot}>{date || "Datum ni izbran"} · {timeSlot || "Termin ni izbran"}</p>
    <label>Ime in priimek<input name="name" required autoComplete="name" /></label>
    <label>Telefonska številka<input name="phone" type="tel" required autoComplete="tel" /></label>
    <label>E-poštni naslov<input name="email" type="email" required autoComplete="email" /></label>
    <label>Število oseb<input name="partySize" type="number" min="1" max="12" defaultValue="1" required /></label>
    <button type="submit" disabled={sending || !date || !timeSlot}>{sending ? "Pošiljanje …" : "Potrdi rezervacijo"}</button>
    {status && <p className={styles.status} role="status">{status}</p>}
  </form></main><Footer /></>;
}
