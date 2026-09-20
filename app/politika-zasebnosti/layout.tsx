import type { ReactNode } from "react";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata(
  "Politika zasebnosti",
  "Informacije o obdelavi in varovanju osebnih podatkov na spletni strani Društva ljubiteljev mačjih tačk.",
  "/politika-zasebnosti",
);

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
