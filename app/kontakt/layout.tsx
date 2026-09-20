import type { ReactNode } from "react";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata(
  "Kontakt in lokacija",
  "Kontaktirajte Društvo ljubiteljev mačjih tačk ali nas obiščite na naslovu Zagata 5 v Mariboru.",
  "/kontakt",
);

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
