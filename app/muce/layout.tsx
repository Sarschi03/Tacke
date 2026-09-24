import { pageMetadata } from "../../lib/pageMetadata";

export const metadata = pageMetadata(
  "Naše muce",
  "Spoznajte muce Društva ljubiteljev mačjih tačk v Mariboru.",
  "/muce",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
