import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { pageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const path = `/dogodki/${id}`;
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (convexUrl) {
    try {
      const event = await new ConvexHttpClient(convexUrl).query(
        api.events.getById,
        { id: id as Id<"events"> },
      );
      if (event) {
        return pageMetadata(event.title, event.shortDescription, path);
      }
    } catch {
      // Fall back to valid route metadata if content cannot be reached.
    }
  }

  return pageMetadata(
    "Dogodek ali novica",
    "Dogodek ali novica Društva ljubiteljev mačjih tačk.",
    path,
  );
}

export default function EventLayout({ children }: { children: ReactNode }) {
  return children;
}
