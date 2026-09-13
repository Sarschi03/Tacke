"use client";

import { FormEvent, useMemo, useState } from "react";
import SubHero from "../../components/SubHero/SubHero";
import styles from "./page.module.css";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";

const TIME_SLOTS = ["16:15-17:15", "17:30-18:30", "18:45-19:45"];
const DAYS = ["pon.", "tor.", "sre.", "čet.", "pet.", "sob.", "ned."];
const MONTHS = [
  "januar",
  "februar",
  "marec",
  "april",
  "maj",
  "junij",
  "julij",
  "avgust",
  "september",
  "oktober",
  "november",
  "december",
];

const dateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

export default function DashboardPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function login(event: FormEvent) {
    event.preventDefault();
    if (username === "andreja" && password === "andreja123") {
      setLoggedIn(true);
      setError("");
    } else setError("Napačno uporabniško ime ali geslo.");
  }

  if (loggedIn) return <DashboardContent />;
  return (
    <main className={styles.loginMain}>
      <div className={styles.loginRow}>
        <div className={styles.loginImageCol} />
        <div className={styles.loginFormCol}>
          <form className={styles.loginBox} onSubmit={login}>
            <h1>Prijava v sistem</h1>
            {error && <p className={styles.error}>{error}</p>}
            <input
              aria-label="Uporabniško ime"
              placeholder="Uporabniško ime"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <input
              aria-label="Geslo"
              placeholder="Geslo"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button type="submit">Prijava</button>
          </form>
        </div>
      </div>
    </main>
  );
}

function DashboardContent() {
  const [calendarDate, setCalendarDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [filter, setFilter] = useState<"all" | "reservations">("all");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showManualForm, setShowManualForm] = useState(false);
  const [manualDate, setManualDate] = useState(() => dateKey(new Date()));
  const [rescheduleId, setRescheduleId] = useState<Id<"reservations"> | null>(
    null,
  );
  const [notice, setNotice] = useState("");
  const selectedKey = dateKey(selectedDate);

  const monthDays = useMemo(() => {
    const first = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth(),
      1,
    );
    const offset = first.getDay() === 0 ? 6 : first.getDay() - 1;
    const total = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth() + 1,
      0,
    ).getDate();
    return [
      ...Array(offset).fill(null),
      ...Array.from({ length: total }, (_, index) => index + 1),
    ];
  }, [calendarDate]);

  const week = useMemo(
    () =>
      Array.from({ length: 7 }, (_, index) => {
        const value = new Date(selectedDate);
        value.setDate(selectedDate.getDate() + index);
        return value;
      }),
    [selectedDate],
  );
  const data = useQuery(api.reservations.getDashboardData, {
    startDate: dateKey(week[0]),
    endDate: dateKey(week[6]),
  });
  const monthStart = dateKey(
    new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1),
  );
  const monthEnd = dateKey(
    new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0),
  );
  const monthData = useQuery(api.reservations.getDashboardData, {
    startDate: monthStart,
    endDate: monthEnd,
  });
  const toggleUnavailable = useMutation(api.reservations.toggleUnavailable);
  const addReservation = useMutation(api.reservations.addReservation);
  const deleteReservations = useMutation(api.reservations.deleteReservations);
  const rescheduleReservation = useMutation(
    api.reservations.rescheduleReservation,
  );
  const reservations =
    data?.reservations.filter((item) => item.date === selectedKey) ?? [];
  const unavailable =
    data?.unavailableDates.some((item) => item.date === selectedKey) ?? false;
  const visibleSlots =
    filter === "all"
      ? TIME_SLOTS
      : TIME_SLOTS.filter((slot) =>
          reservations.some((item) => item.timeSlot === slot),
        );

  function toggleSelection(id: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  async function removeSelected() {
    if (
      !selectedIds.size ||
      !window.confirm(`Izbrišem ${selectedIds.size} izbranih rezervacij?`)
    )
      return;
    await deleteReservations({ ids: [...selectedIds] as Id<"reservations">[] });
    setSelectedIds(new Set());
    setNotice("Izbrane rezervacije so izbrisane.");
  }

  async function submitManual(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setNotice("");
    try {
      await addReservation({
        date: manualDate,
        timeSlot: String(form.get("timeSlot")),
        name: "Andreja",
        email: "Andreja",
        phone: "Andreja",
        partySize: Number(form.get("partySize")),
        adminCreated: true,
      });
      setShowManualForm(false);
      setNotice("Rezervacija je dodana.");
      event.currentTarget.reset();
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "Rezervacije ni bilo mogoče dodati.",
      );
    }
  }

  async function submitReschedule(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!rescheduleId) return;
    const form = new FormData(event.currentTarget);
    try {
      await rescheduleReservation({
        id: rescheduleId,
        date: String(form.get("date")),
        timeSlot: String(form.get("timeSlot")),
      });
      setRescheduleId(null);
      setSelectedIds(new Set());
      setNotice("Rezervacija je prestavljena.");
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "Rezervacije ni bilo mogoče prestaviti.",
      );
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.dashboardHero}>
        <SubHero
          title="Zdravo, Andreja"
          texts={["Dobrodošla v nadzorni plošči rezervacij."]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
      </div>
      <div className={styles.dashboardContainer}>
        <div className={styles.grid}>
          <aside className={styles.leftCol}>
            <p className={styles.kicker}>Izberi datum</p>
            <h2>Koledar</h2>
            <div className={styles.calendarHeader}>
              <button
                onClick={() =>
                  setCalendarDate(
                    new Date(
                      calendarDate.getFullYear(),
                      calendarDate.getMonth() - 1,
                      1,
                    ),
                  )
                }
                aria-label="Prejšnji mesec"
              >
                ←
              </button>
              <strong>
                {MONTHS[calendarDate.getMonth()]} {calendarDate.getFullYear()}
              </strong>
              <button
                onClick={() =>
                  setCalendarDate(
                    new Date(
                      calendarDate.getFullYear(),
                      calendarDate.getMonth() + 1,
                      1,
                    ),
                  )
                }
                aria-label="Naslednji mesec"
              >
                →
              </button>
            </div>
            <div className={styles.weekDays}>
              {DAYS.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className={styles.daysGrid}>
              {monthDays.map((day, index) => {
                if (day === null) return <span key={`empty-${index}`} />;
                const dayDate = new Date(
                  calendarDate.getFullYear(),
                  calendarDate.getMonth(),
                  day,
                );
                const key = dateKey(dayDate);
                const hasBooking = monthData?.reservations.some(
                  (item) => item.date === key,
                );
                return (
                  <button
                    key={day}
                    className={key === selectedKey ? styles.selectedDay : ""}
                    onClick={() => setSelectedDate(dayDate)}
                  >
                    <span>{day}</span>
                    {hasBooking && <i aria-label="Ima rezervacije" />}
                  </button>
                );
              })}
            </div>
          </aside>
          <section className={styles.rightCol}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.kicker}>Dnevni pregled</p>
                <h2>
                  Rezervacije za {selectedDate.getDate()}.{" "}
                  {MONTHS[selectedDate.getMonth()]}
                </h2>
              </div>
              <button
                className={styles.primaryButton}
                onClick={() => {
                  setManualDate(selectedKey);
                  setShowManualForm(true);
                }}
              >
                + Nova rezervacija
              </button>
            </div>
            <div className={styles.weekView}>
              {week.map((date) => {
                const key = dateKey(date);
                const closed = data?.unavailableDates.some(
                  (item) => item.date === key,
                );
                return (
                  <button
                    key={key}
                    className={key === selectedKey ? styles.activeWeekDay : ""}
                    onClick={() => setSelectedDate(date)}
                  >
                    <span>{DAYS[(date.getDay() + 6) % 7]}</span>
                    <strong>{date.getDate()}</strong>
                    {closed && <small>Ne delam</small>}
                  </button>
                );
              })}
            </div>
            <div className={styles.actionsBar}>
              <button
                className={
                  unavailable ? styles.openButton : styles.closedButton
                }
                onClick={() => toggleUnavailable({ date: selectedKey })}
              >
                {unavailable ? "Ponovno odpri dan" : "Ne delam"}
              </button>
              <select
                value={filter}
                onChange={(event) =>
                  setFilter(event.target.value as "all" | "reservations")
                }
              >
                <option value="all">Vsi termini</option>
                <option value="reservations">Samo rezervirani</option>
              </select>
            </div>
            {selectedIds.size > 0 && (
              <div className={styles.selectionBar}>
                <strong>Izbrano: {selectedIds.size}</strong>
                <button onClick={removeSelected}>Izbriši</button>
                <button
                  disabled={selectedIds.size !== 1}
                  onClick={() =>
                    setRescheduleId([...selectedIds][0] as Id<"reservations">)
                  }
                >
                  Prestavi
                </button>
              </div>
            )}
            {notice && <p className={styles.notice}>{notice}</p>}
            {unavailable ? (
              <div className={styles.emptyState}>
                Ta dan je označen kot »Ne delam«. Rezervacij ni mogoče
                ustvariti.
              </div>
            ) : (
              <div className={styles.slotList}>
                {visibleSlots.map((slot) => {
                  const slotReservations = reservations.filter(
                    (item) => item.timeSlot === slot,
                  );
                  const filled = slotReservations.reduce(
                    (sum, item) => sum + (item.partySize ?? 1),
                    0,
                  );
                  return (
                    <section className={styles.slotGroup} key={slot}>
                      <header>
                        <div>
                          <h3>{slot}</h3>
                          <span>Rezervacija mize</span>
                        </div>
                        <strong
                          className={
                            filled >= 12
                              ? styles.fullBadge
                              : styles.capacityBadge
                          }
                        >
                          {filled} / 12 mest
                        </strong>
                      </header>
                      {slotReservations.length === 0 ? (
                        <p className={styles.noBookings}>Ni rezervacij.</p>
                      ) : (
                        slotReservations.map((reservation) => (
                          <article
                            key={reservation._id}
                            className={styles.bookingRow}
                          >
                            <input
                              aria-label={`Izberi rezervacijo ${reservation.name ?? "brez imena"}`}
                              type="checkbox"
                              checked={selectedIds.has(reservation._id)}
                              onChange={() => toggleSelection(reservation._id)}
                            />
                            <button
                              className={styles.bookingSummary}
                              onClick={() =>
                                setExpandedId(
                                  expandedId === reservation._id
                                    ? null
                                    : reservation._id,
                                )
                              }
                            >
                              <span>
                                <strong>
                                  {reservation.name ?? "Ime ni zabeleženo"}
                                </strong>
                                <small>
                                  {reservation.partySize ?? 1}{" "}
                                  {(reservation.partySize ?? 1) === 1
                                    ? "oseba"
                                    : "osebe"}
                                </small>
                              </span>
                              <span className={styles.statusBadge}>
                                Rezervirano
                              </span>
                              <span>•••</span>
                            </button>
                            {expandedId === reservation._id && (
                              <div className={styles.bookingDetails}>
                                <span>
                                  <b>Ime</b>
                                  {reservation.name ?? "Ni podatka"}
                                </span>
                                <span>
                                  <b>E-pošta</b>
                                  {reservation.email ?? "Ni podatka"}
                                </span>
                                <span>
                                  <b>Telefon</b>
                                  {reservation.phone ?? "Ni podatka"}
                                </span>
                                {reservation.message && (
                                  <span className={styles.messageDetail}>
                                    <b>Sporočilo</b>
                                    {reservation.message}
                                  </span>
                                )}
                              </div>
                            )}
                          </article>
                        ))
                      )}
                    </section>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
      {showManualForm && (
        <div
          className={styles.modalBackdrop}
          onMouseDown={() => setShowManualForm(false)}
        >
          <form
            className={styles.modal}
            onSubmit={submitManual}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeModal}
              onClick={() => setShowManualForm(false)}
            >
              ×
            </button>
            <p className={styles.kicker}>Ročni vnos · Andreja</p>
            <h2>Nova rezervacija</h2>
            <label>
              Število oseb
              <input
                name="partySize"
                type="number"
                min="1"
                max="12"
                defaultValue="1"
                required
              />
            </label>
            <label>
              Datum
              <input
                type="date"
                value={manualDate}
                onChange={(event) => setManualDate(event.target.value)}
                required
              />
            </label>
            <label>
              Termin
              <select name="timeSlot">
                {TIME_SLOTS.map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
            </label>
            <button className={styles.primaryButton}>Dodaj rezervacijo</button>
          </form>
        </div>
      )}
      {rescheduleId && (
        <div
          className={styles.modalBackdrop}
          onMouseDown={() => setRescheduleId(null)}
        >
          <form
            className={styles.modal}
            onSubmit={submitReschedule}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeModal}
              onClick={() => setRescheduleId(null)}
            >
              ×
            </button>
            <p className={styles.kicker}>Sprememba termina</p>
            <h2>Prestavi rezervacijo</h2>
            <label>
              Nov datum
              <input
                name="date"
                type="date"
                defaultValue={selectedKey}
                required
              />
            </label>
            <label>
              Nov termin
              <select name="timeSlot">
                {TIME_SLOTS.map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
            </label>
            <button className={styles.primaryButton}>Shrani spremembo</button>
          </form>
        </div>
      )}
    </main>
  );
}
