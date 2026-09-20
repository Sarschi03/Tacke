import type { ReactNode } from "react";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata(
  "O nas",
  "Spoznajte Društvo ljubiteljev mačjih tačk, naše poslanstvo in prostor za ljubitelje mačk v Mariboru.",
  "/o_nas",
);

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
