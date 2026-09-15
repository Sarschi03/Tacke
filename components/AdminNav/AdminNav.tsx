"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AdminNav.module.css";

const links = [
  ["/andreja", "Rezervacije"],
  ["/andreja/clani", "Člani"],
  ["/andreja/dogodki", "Dogodki in novice"],
] as const;
export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav} aria-label="Nadzorna plošča">
      {links.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? styles.active : ""}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
