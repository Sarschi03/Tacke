import { pageMetadata } from "../../../lib/pageMetadata";

export const metadata = pageMetadata(
  "Članstvo",
  "Postanite član Društva ljubiteljev mačjih tačk in podprite naše delo.",
  "/o_nas/clanstvo",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
