import type { ReactNode } from "react";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata(
  "Cenik in ponudba",
  "Preverite cene obiska in ponudbo pijač v mačji kavarni Društva ljubiteljev mačjih tačk v Mariboru.",
  "/o_nas/cenik",
);

export default function PricingLayout({ children }: { children: ReactNode }) {
  return children;
}
