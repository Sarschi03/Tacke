import { pageMetadata } from "../../lib/pageMetadata";

export const metadata = pageMetadata(
  "Rezervacija obiska",
  "Rezervirajte termin za obisk Društva ljubiteljev mačjih tačk v Mariboru.",
  "/rezervacija",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
