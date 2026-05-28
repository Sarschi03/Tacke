"use client";

import { useState, useMemo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SubHero from "../../components/SubHero/SubHero";
import styles from "./page.module.css";
import { useQuery } from "convex/react";
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

export default function RezervacijaPage() {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const formattedDate = selectedDate
    ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`
    : "1970-01-01"; // Dummy date before selection to avoid query errors

  const availability = useQuery(api.reservations.getAvailability, { date: formattedDate });

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust so Monday is 0, Sunday is 6
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
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
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (newDate >= today) {
      setSelectedDate(newDate);
      setSelectedTime(null);
    }
  };

  const isTimePassed = (timeStr: string) => {
    if (!selectedDate) return false;
    const today = new Date();
    
    // Check if selectedDate is today
    if (
      selectedDate.getFullYear() === today.getFullYear() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getDate() === today.getDate()
    ) {
      const [startHour, startMin] = timeStr.split("-")[0].split(":").map(Number);
      const slotTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHour, startMin);
      
      return slotTime < today;
    }
    return false;
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SubHero 
          title="Načrtujte vašo storitev" 
          texts={["Preverite našo razpoložljivost in rezervirajte datum in uro, ki vam ustrezata"]}
          imageSrc="/1. copy.jpg"
          overlayImageSrc="/1.png"
        />
        
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Left Col - Calendar */}
            <div className={styles.leftCol}>
              <h2 className={styles.sectionTitle}>Izberite datum in uro</h2>
              
              <div className={styles.calendarHeader}>
                <button className={styles.calendarNavBtn} onClick={handlePrevMonth}>&lt;</button>
                <span>{MONTHS[currentMonth]} {currentYear}</span>
                <button className={styles.calendarNavBtn} onClick={handleNextMonth}>&gt;</button>
              </div>

              <div className={styles.weekDays}>
                {DAYS_OF_WEEK.map(day => <div key={day}>{day}</div>)}
              </div>

              <div className={styles.daysGrid}>
                {daysArray.map((day, idx) => {
                  if (day === null) return <div key={`empty-${idx}`} />;
                  
                  const thisDate = new Date(currentYear, currentMonth, day);
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const isPast = thisDate < today;
                  
                  const isSelected = selectedDate && 
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === currentMonth &&
                    selectedDate.getFullYear() === currentYear;

                  return (
                    <button
                      key={day}
                      className={`${styles.dayBtn} ${isSelected ? styles.selected : ""} ${isPast ? styles.disabled : ""}`}
                      disabled={isPast}
                      onClick={() => handleDateClick(day)}
                    >
                      {day}
                      {isSelected && <div style={{ fontSize: "0.5rem", marginTop: "-10px", pointerEvents: "none" }}>•</div>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle Col - Times */}
            <div className={styles.midCol}>
              {selectedDate ? (
                <>
                  <h3 className={styles.timeTitle}>
                    Razpoložljivost za {DAYS_OF_WEEK[(selectedDate.getDay() + 6) % 7]}., {selectedDate.getDate()}. {MONTHS[selectedDate.getMonth()]}
                  </h3>
                  
                  {availability === undefined ? (
                    <p>Nalaganje...</p>
                  ) : availability.isUnavailable ? (
                    <p>Ni razpoložljivosti (Na ta dan ne delamo).</p>
                  ) : (
                    <div className={styles.slotsGrid}>
                      {TIME_SLOTS.map(slot => {
                        const passed = isTimePassed(slot);
                        const booked = availability.slotsCount[slot] || 0;
                        const isFull = booked >= 10;
                        const disabled = passed || isFull;

                        return (
                          <button
                            key={slot}
                            className={`${styles.slotBtn} ${selectedTime === slot ? styles.selected : ""} ${disabled ? styles.disabled : ""}`}
                            disabled={disabled}
                            onClick={() => setSelectedTime(slot)}
                          >
                            {slot} {isFull && "(Zasedeno)"}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <p>Izberite datum za prikaz ur.</p>
              )}
            </div>

            {/* Right Col - Review */}
            <div className={styles.rightCol}>
              <h2 className={styles.sectionTitle}>Podatki o storitvi</h2>
              <div className={styles.serviceDetails}>
                <span>Rezervacija mize</span>
                <span style={{ fontSize: '0.9rem', color: '#777', cursor: 'pointer' }}>Več podrobnosti ⬇</span>
              </div>
              
              <button 
                className={styles.submitBtn} 
                disabled={!selectedDate || !selectedTime}
                onClick={() => {
                  if (selectedDate && selectedTime) {
                    window.location.href = `/rezervacija/miza?date=${formattedDate}&time=${selectedTime}`;
                  }
                }}
              >
                Izberi mizo
              </button>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
