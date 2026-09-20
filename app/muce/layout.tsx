import type { ReactNode } from "react";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata(
  "Naše muce",
  "Spoznajte muce in druge živalske prebivalce Društva ljubiteljev mačjih tačk v Mariboru.",
  "/muce",
);

export default function CatsLayout({ children }: { children: ReactNode }) {
  return children;
}
