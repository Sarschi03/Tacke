import type { ReactNode } from "react";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata(
  "Podatki za rezervacijo",
  "Vnesite podatke za izbrani termin obiska.",
  "/rezervacija",
  { noIndex: true },
);

export default function ReservationDetailsLayout({ children }: { children: ReactNode }) {
  return children;
}
