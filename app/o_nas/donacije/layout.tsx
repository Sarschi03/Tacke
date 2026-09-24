import { pageMetadata } from "../../../lib/pageMetadata";

export const metadata = pageMetadata(
  "Donacije",
  "Z donacijo pomagajte pri oskrbi, zdravljenju in boljših življenjskih pogojih mačk.",
  "/o_nas/donacije",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
