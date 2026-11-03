import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chocolate-frog-774793.hostingersite.com";

export const metadata: Metadata = {
  title: "CXDYNAMIQ — Cloud Contact Center & AI Customer Experience Platform",
  description:
    "Stress-free contact center solutions. Deploy a cloud contact center in a day and automate customer engagement in minutes with omnichannel routing, CTI integrations, and conversational AI.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Cloud Contact Center",
    "Call Centre Solutions",
    "Omnichannel Contact Center",
    "Conversational AI",
    "Auto Dialer",
    "CTI Integration",
    "CXDYNAMIQ",
  ],
  icons: {
    icon: [
      { url: "/cxdynamiq-favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/cxdynamiq-favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png?v=cxdynamiq", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=cxdynamiq", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png?v=cxdynamiq", type: "image/png" },
      { url: "/favicon.ico?v=cxdynamiq", type: "image/x-icon" },
    ],
    apple: [
      { url: "/cxdynamiq-favicon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png?v=cxdynamiq", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/cxdynamiq-favicon.ico",
  },
  openGraph: {
    title: "CXDYNAMIQ — Cloud Contact Center Solutions",
    description: "Deploy a Cloud Contact Center in a day and automate it in minutes with VIP support.",
    url: siteUrl,
    siteName: "CXDYNAMIQ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/cxdynamiq-og.png",
        width: 512,
        height: 512,
        alt: "CXDYNAMIQ — Redefining Customer Experiences",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CXDYNAMIQ — Cloud Contact Center Solutions",
    description: "Deploy a Cloud Contact Center in a day and automate it in minutes with VIP support.",
    images: ["/cxdynamiq-og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${garamond.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
