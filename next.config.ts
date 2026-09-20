import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const legacyRoutes: ReadonlyArray<readonly [string, string]> = [
      ["/about-5", "/rezervacija"],
      ["/book-online", "/rezervacija"],
      ["/cenik", "/o_nas/cenik"],
      ["/informacije-o-dru%C5%A1tvu", "/o_nas"],
      ["/dejstva-o-mucah", "/o_nas/o_mucah"],
      ["/about-7", "/o_nas/clanstvo"],
      ["/nasa-macja-druzina", "/muce"],
      ["/contact-7", "/kontakt"],
      ["/donacije", "/o_nas/donacije"],
    ] as const;

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "drustvomacjihtack.com" }],
        destination: "https://www.drustvomacjihtack.com/:path*",
        permanent: true,
      },
      { source: "/en", destination: "/", permanent: true },
      ...legacyRoutes.flatMap(([source, destination]) => [
        { source, destination, permanent: true },
        { source: `/en${source}`, destination, permanent: true },
      ]),
    ];
  },
};

export default nextConfig;
