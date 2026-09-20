import type { ReactNode } from "react";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata(
  "Piškotki",
  "Informacije o piškotkih in lokalnem shranjevanju podatkov na spletni strani Društva ljubiteljev mačjih tačk.",
  "/piskotki",
);

export default function CookiesLayout({ children }: { children: ReactNode }) {
  return children;
}
