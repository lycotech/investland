import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://www.investtrustam.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Invest-Trust Asset Management | Wealth & Investment Solutions in Nigeria",
    template: "%s | Invest-Trust Asset Management",
  },
  description:
    "Invest-Trust Asset Management Limited offers professional portfolio management, wealth advisory, and investment solutions for high-net-worth individuals, families, and institutions in Nigeria.",
  keywords: [
    "asset management Nigeria",
    "investment management Lagos",
    "wealth management Nigeria",
    "portfolio advisory Nigeria",
    "fund management Nigeria",
    "high net worth investment Nigeria",
    "investment advisory Lagos",
    "Invest-Trust Asset Management",
    "Nigeria capital market",
    "estate planning Nigeria",
  ],
  authors: [{ name: "Invest-Trust Asset Management Limited", url: SITE_URL }],
  creator: "Invest-Trust Asset Management Limited",
  publisher: "Invest-Trust Asset Management Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Invest-Trust Asset Management",
    title: "Invest-Trust Asset Management | Wealth & Investment Solutions in Nigeria",
    description:
      "Professional portfolio management and wealth advisory for individuals, families, and institutions in Nigeria. Mandates from ₦10,000,000.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Invest-Trust Asset Management — Nigeria's Premier Wealth Advisory Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest-Trust Asset Management | Wealth & Investment Solutions in Nigeria",
    description:
      "Portfolio management, wealth advisory, and investment solutions for HNIs and institutions across Nigeria.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  manifest: "/manifest.webmanifest",
  // ─── Search Engine Verification ────────────────────────────────────────
  // Uncomment and fill in your codes after submitting the site to each platform:
  // verification: {
  //   google: "PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  //   other: {
  //     "msvalidate.01": "PASTE_YOUR_BING_WEBMASTER_CODE_HERE",
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
