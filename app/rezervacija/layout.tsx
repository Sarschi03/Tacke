import type { ReactNode } from "react";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata(
  "Rezervacija obiska",
  "Rezervirajte termin obiska mačje kavarne Društva ljubiteljev mačjih tačk v Mariboru.",
  "/rezervacija",
);

export default function ReservationLayout({ children }: { children: ReactNode }) {
  return children;
}
