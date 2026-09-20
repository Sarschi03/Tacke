import type { Metadata } from "next";

export const SITE_URL = "https://www.drustvomacjihtack.com";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  options: { noIndex?: boolean } = {},
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    ...(options.noIndex
      ? { robots: { index: false, follow: false, noarchive: true } }
      : {}),
  };
}
