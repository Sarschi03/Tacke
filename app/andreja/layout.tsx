import type { Metadata } from "next";
import AdminShell from "./AdminShell";

export const metadata: Metadata = {
  title: "Nadzorna plošča",
  robots: { index: false, follow: false, noarchive: true },
};

export default function AndrejaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}
