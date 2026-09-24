import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact-7", destination: "/kontakt", permanent: true },
      { source: "/book-online", destination: "/rezervacija", permanent: true },
      { source: "/nasa-macja-druzina", destination: "/muce", permanent: true },
      { source: "/naše-poslanstvo", destination: "/o_nas", permanent: true },
      { source: "/informacije-o-društvu", destination: "/o_nas", permanent: true },
      { source: "/about-7", destination: "/o_nas/clanstvo", permanent: true },
      { source: "/donacije", destination: "/o_nas/donacije", permanent: true },
      { source: "/cenik", destination: "/o_nas/cenik", permanent: true },
      { source: "/dejstva-o-mucah", destination: "/o_nas/o_mucah", permanent: true },
      { source: "/general-5", destination: "/o_nas/o_mucah", permanent: true },
      { source: "/en/contact-7", destination: "/kontakt", permanent: true },
      { source: "/en/book-online", destination: "/rezervacija", permanent: true },
      { source: "/en/nasa-macja-druzina", destination: "/muce", permanent: true },
      { source: "/en/informacije-o-društvu", destination: "/o_nas", permanent: true },
      { source: "/en/about-7", destination: "/o_nas/clanstvo", permanent: true },
      { source: "/en/donacije", destination: "/o_nas/donacije", permanent: true },
      { source: "/en/cenik", destination: "/o_nas/cenik", permanent: true },
      { source: "/en/dejstva-o-mucah", destination: "/o_nas/o_mucah", permanent: true },
      { source: "/en/general-5", destination: "/o_nas/o_mucah", permanent: true },
    ];
  },
};

export default nextConfig;
