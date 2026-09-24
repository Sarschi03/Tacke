import type { MetadataRoute } from "next";

const SITE_URL = "https://drustvomacjihtack.com";

const pages = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/o_nas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/o_nas/o_mucah", priority: 0.7, changeFrequency: "monthly" },
  { path: "/o_nas/clanstvo", priority: 0.7, changeFrequency: "yearly" },
  { path: "/o_nas/donacije", priority: 0.7, changeFrequency: "monthly" },
  { path: "/o_nas/cenik", priority: 0.8, changeFrequency: "monthly" },
  { path: "/muce", priority: 0.8, changeFrequency: "monthly" },
  { path: "/dogodki", priority: 0.8, changeFrequency: "weekly" },
  { path: "/rezervacija", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.7, changeFrequency: "yearly" },
  { path: "/politika-zasebnosti", priority: 0.2, changeFrequency: "yearly" },
  { path: "/piskotki", priority: 0.2, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    priority,
    changeFrequency,
  }));
}
