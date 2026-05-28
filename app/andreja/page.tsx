"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import styles from "./page.module.css";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const TIME_SLOTS = [
  "09:00-10:00",
  "10:15-11:15",
  "11:30-12:30",
  "15:00-16:00",
  "16:15-17:15",
  "17:30-18:30",
  "18:45-19:45"
];

const DAYS_OF_WEEK = ["pon.", "tor.", "sre.", "čet.", "pet.", "sob.", "ned."];
const MONTHS = [
  "januar", "februar", "marec", "april", "maj", "junij",
  "julij", "avgust", "september", "oktober", "november", "december"
];

export default function DashboardPage() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "andreja" && password === "andreja123") {
      setIsLogged(true);
      setError("");
    } else {
      setError("Napačno uporabniško ime ali geslo.");
    }
  };

  if (!isLogged) {
    return (
      <main className={styles.loginMain}>
        <div className={styles.loginNavWrapper}>
          <Navbar hideLinks={true} />
        </div>
        <div className={styles.loginRow}>
          <div className={styles.loginImageCol} style={{ backgroundImage: 'url("/1. copy.jpg")' }} />
          <div className={styles.loginFormCol}>
            <form className={styles.loginBox} onSubmit={handleLogin}>
              <h1 className={styles.loginTitle}>Prijava v sistem</h1>
              {error && <p className={styles.error}>{error}</p>}
              <input 
                type="text" 
                placeholder="Uporabniško ime" 
                className={styles.input} 
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Geslo" 
                className={styles.input}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button type="submit" className={styles.loginBtn}>Prijava</button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return <DashboardContent />;
}

function DashboardContent() {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());
  const [filter, setFilter] = useState<"all"|"reservations">("all");

  const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;

  const getWeekDays = () => {
    const startObj = new Date(selectedDate);
    
    const week = [];
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(startObj);
      nextDay.setDate(startObj.getDate() + i);
      week.push(nextDay);
    }
    return week;
  };

  const weekDaysArray = useMemo(() => getWeekDays(), [selectedDate]);
  
  const weekStartStr = `${weekDaysArray[0].getFullYear()}-${String(weekDaysArray[0].getMonth() + 1).padStart(2, "0")}-${String(weekDaysArray[0].getDate()).padStart(2, "0")}`;
  const weekEndStr = `${weekDaysArray[6].getFullYear()}-${String(weekDaysArray[6].getMonth() + 1).padStart(2, "0")}-${String(weekDaysArray[6].getDate()).padStart(2, "0")}`;

  const data = useQuery(api.reservations.getDashboardData, { startDate: weekStartStr, endDate: weekEndStr });
  const toggleUnavailable = useMutation(api.reservations.toggleUnavailable);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; 
  };

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const daysArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < firstDay; i++) arr.push(null);
    for (let i = 1; i <= daysInMonth; i++) arr.push(i);
    return arr;
  }, [daysInMonth, firstDay]);

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
  };

  const isUnavailable = data?.unavailableDates?.some(d => d.date === formattedDate);

  const handleNeDelam = async () => {
    await toggleUnavailable({ date: formattedDate });
  };

  // Process today's reservations
  const dailyReservations = data?.reservations?.filter(r => r.date === formattedDate) || [];
  
  const displaySlots = filter === "all" ? TIME_SLOTS : TIME_SLOTS.filter(s => dailyReservations.some(r => r.timeSlot === s));

  return (
    <main className={styles.main} style={{ background: "#ffffff" }}>
      <Navbar hideLinks={true} />
      <SubHero 
        title="Zdravo Andreja" 
        texts={["Dobrodošla v nadzorni plošči"]}
        imageSrc="/1. copy.jpg"
        overlayImageSrc="/1.png"
      />

      <div className={styles.dashboardContainer}>
        <div className={styles.grid}>
          
          <div className={styles.leftCol}>
            <h2 className={styles.sectionTitle}>Koledar</h2>
            
            <div className={styles.calendarHeader}>
              <button className={styles.calendarNavBtn} onClick={() => setCurrentDate(new Date(currentYear, currentMonth - 1, 1))}>&lt;</button>
              <span>{MONTHS[currentMonth]} {currentYear}</span>
              <button className={styles.calendarNavBtn} onClick={() => setCurrentDate(new Date(currentYear, currentMonth + 1, 1))}>&gt;</button>
            </div>

            <div className={styles.weekDays}>
              {DAYS_OF_WEEK.map(day => <div key={day}>{day}</div>)}
            </div>

            <div className={styles.daysGrid}>
              {daysArray.map((day, idx) => {
                if (day === null) return <div key={`empty-${idx}`} />;
                
                const thisDateObj = new Date(currentYear, currentMonth, day);
                const todayObj = new Date();
                todayObj.setHours(0, 0, 0, 0);
                const isPast = thisDateObj < todayObj;

                const isSelected = selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear;

                return (
                  <button
                    key={day}
                    className={`${styles.dayBtn} ${isSelected ? styles.selected : ""} ${isPast ? styles.pastDay : ""}`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.rightCol}>
            <h2 className={styles.sectionTitle}>Pregled tedenja</h2>
            
            <div className={styles.weekView}>
              {weekDaysArray.map((dateObj, i) => {
                const isSelected = dateObj.toDateString() === selectedDate.toDateString();
                const dStr = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, "0")}`;
                const hasBlock = data?.unavailableDates?.some(d => d.date === dStr);

                return (
                  <div 
                    key={i} 
                    className={`${styles.weekDayBox} ${isSelected ? styles.active : ""}`}
                    onClick={() => setSelectedDate(dateObj)}
                  >
                    <div className={styles.weekDayName}>{DAYS_OF_WEEK[(dateObj.getDay() + 6) % 7]}</div>
                    <div className={styles.weekDayNum}>{dateObj.getDate()}</div>
                    {hasBlock && <div style={{ fontSize: '0.7rem', color: 'red', marginTop: '4px' }}>Ne delam</div>}
                  </div>
                );
              })}
            </div>

            <div className={styles.actionsBar}>
              <div>
                {!isUnavailable ? (
                  <button className={styles.neDelamBtn} onClick={handleNeDelam}>
                    Označi "Ne delam"
                  </button>
                ) : (
                  <button className={styles.delamBtn} onClick={handleNeDelam}>
                    Odstrani "Ne delam"
                  </button>
                )}
              </div>
              <select className={styles.filterSelect} value={filter} onChange={e => setFilter(e.target.value as any)}>
                <option value="all">Vsa okna</option>
                <option value="reservations">Samo rezervacije</option>
              </select>
            </div>

            <h3 style={{ fontFamily: "var(--font-pt-serif, serif)", color: "#4A4036", marginBottom: "1rem" }}>
              Aktivne rezervacije za {selectedDate.getDate()}. {MONTHS[selectedDate.getMonth()]}
            </h3>

            {isUnavailable ? (
              <p>Na ta dan ne obratujete.</p>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Čas</th>
                    <th>Št. rezervacij</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {displaySlots.length === 0 ? (
                    <tr>
                      <td colSpan={3}>Ni rezervacij za ta dan.</td>
                    </tr>
                  ) : (
                    displaySlots.map(slot => {
                      const count = dailyReservations.filter(r => r.timeSlot === slot).length;
                      return (
                        <tr key={slot}>
                          <td>{slot}</td>
                          <td>
                            <span className={styles.badge}>{count} / 10</span>
                          </td>
                          <td>
                            {count >= 10 ? <span style={{color: 'red'}}>Polno</span> : count > 0 ? "Delno zasedeno" : "Prosto"}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            )}

          </div>

        </div>
      </div>
    </main>
  );
}
