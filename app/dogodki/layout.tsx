import { pageMetadata } from "../../lib/pageMetadata";

export const metadata = pageMetadata(
  "Dogodki in novice",
  "Aktualni dogodki, novice in zgodbe Društva ljubiteljev mačjih tačk.",
  "/dogodki",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
