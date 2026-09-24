import { pageMetadata } from "../../lib/pageMetadata";

export const metadata = pageMetadata(
  "Piškotki",
  "Informacije o uporabi piškotkov na spletni strani Društva ljubiteljev mačjih tačk.",
  "/piskotki",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
