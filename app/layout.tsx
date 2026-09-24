import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import { LanguageProvider } from "../context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drustvomacjihtack.com"),
  title: {
    default: "Društvo ljubiteljev mačjih tačk",
    template: "%s | Društvo mačjih tačk",
  },
  description:
    "Društvo ljubiteljev mačjih tačk v Mariboru – prijeten prostor za druženje z mačkami, dogodke in odgovorno skrb za mačke.",
  applicationName: "Društvo ljubiteljev mačjih tačk",
  openGraph: {
    type: "website",
    locale: "sl_SI",
    siteName: "Društvo ljubiteljev mačjih tačk",
    images: [{ url: "/hero.jpg", alt: "Društvo ljubiteljev mačjih tačk" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sl"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body>
        <LanguageProvider>
          <CustomCursor />
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
