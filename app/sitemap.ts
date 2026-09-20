import type { MetadataRoute } from "next";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";
import { SITE_URL } from "../lib/seo";

const publicRoutes = [
  "",
  "/o_nas",
  "/o_nas/o_mucah",
  "/o_nas/clanstvo",
  "/o_nas/donacije",
  "/o_nas/cenik",
  "/muce",
  "/kontakt",
  "/rezervacija",
  "/dogodki",
  "/politika-zasebnosti",
  "/piskotki",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let eventRoutes: string[] = [];
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (convexUrl) {
    try {
      const events = await new ConvexHttpClient(convexUrl).query(
        api.events.listPublished,
      );
      eventRoutes = events.map((event) => `/dogodki/${event._id}`);
    } catch {
      // Keep the static sitemap available if the content service is temporarily down.
    }
  }

  return [...publicRoutes, ...eventRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
