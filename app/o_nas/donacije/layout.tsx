import type { ReactNode } from "react";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata(
  "Donacije",
  "Z donacijo podprite oskrbo, prehrano in veterinarsko nego muc Društva ljubiteljev mačjih tačk.",
  "/o_nas/donacije",
);

export default function DonationsLayout({ children }: { children: ReactNode }) {
  return children;
}
