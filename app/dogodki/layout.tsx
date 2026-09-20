import type { ReactNode } from "react";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata(
  "Dogodki in novice",
  "Oglejte si aktualne dogodke, novice in zgodbe Društva ljubiteljev mačjih tačk v Mariboru.",
  "/dogodki",
);

export default function EventsLayout({ children }: { children: ReactNode }) {
  return children;
}
