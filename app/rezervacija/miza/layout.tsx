import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podatki za rezervacijo",
  alternates: { canonical: "/rezervacija/miza" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
