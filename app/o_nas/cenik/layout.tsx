import { pageMetadata } from "../../../lib/pageMetadata";

export const metadata = pageMetadata(
  "Cenik",
  "Cenik obiska Društva ljubiteljev mačjih tačk v Mariboru.",
  "/o_nas/cenik",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
