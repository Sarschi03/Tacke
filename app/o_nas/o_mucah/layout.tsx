import type { ReactNode } from "react";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata(
  "Dejstva o mucah",
  "Preberite, kako mačke vplivajo na zdravje, počutje in vsakdanje življenje ljudi.",
  "/o_nas/o_mucah",
);

export default function CatFactsLayout({ children }: { children: ReactNode }) {
  return children;
}
