import { pageMetadata } from "../../lib/pageMetadata";

export const metadata = pageMetadata(
  "O nas",
  "Spoznajte Društvo ljubiteljev mačjih tačk, naše poslanstvo in prostor v Mariboru.",
  "/o_nas",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
