import type { ReactNode } from "react";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata(
  "Članstvo",
  "Postanite član Društva ljubiteljev mačjih tačk ter prenesite pristopno izjavo in informacije o članstvu.",
  "/o_nas/clanstvo",
);

export default function MembershipLayout({ children }: { children: ReactNode }) {
  return children;
}
