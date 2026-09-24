import { pageMetadata } from "../../lib/pageMetadata";

export const metadata = pageMetadata(
  "Kontakt",
  "Kontakt, lokacija in odpiralni čas Društva ljubiteljev mačjih tačk v Mariboru.",
  "/kontakt",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
