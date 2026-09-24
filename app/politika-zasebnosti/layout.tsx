import { pageMetadata } from "../../lib/pageMetadata";

export const metadata = pageMetadata(
  "Politika zasebnosti",
  "Informacije o varovanju in obdelavi osebnih podatkov.",
  "/politika-zasebnosti",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
