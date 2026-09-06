"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      // Use transform for zero-jank positioning — no layout thrash
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/tacka.png" alt="" width={40} height={40} />
    </div>
  );
}
