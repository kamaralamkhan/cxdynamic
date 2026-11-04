import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
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

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chocolate-frog-774793.hostingersite.com";

export const metadata: Metadata = {
  title: "CXdynamIQ — AI-Powered Omnichannel Customer Experience Platform",
  description:
    "CXdynamIQ delivers autonomous AI agents, omnichannel engagement, and 100% conversation intelligence — resolving customer inquiries in real time across Voice, WhatsApp, Chat, and more.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "AI Customer Experience Platform",
    "Agentic AI Contact Center",
    "Omnichannel CX Platform",
    "AI Voice Agents",
    "Conversational AI",
    "CXdynamIQ",
    "CXQ360",
    "Contact Center AI",
    "AI Quality Assurance",
    "Agent Assist Copilot",
  ],
  icons: {
    icon: [
      { url: "/cxdynamiq-favicon.png?v=2", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png?v=2", type: "image/png" },
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/cxdynamiq-favicon.png?v=2",
  },
  openGraph: {
    title: "CXdynamIQ — AI-Powered Omnichannel Customer Experience Platform",
    description:
      "Autonomous AI agents resolving customer inquiries in real time. Voice, WhatsApp, Chat & more — with 72% AI containment, 100% conversation intelligence, and enterprise-grade compliance.",
    url: siteUrl,
    siteName: "CXdynamIQ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/cxdynamiq-og.png?v=2",
        width: 1200,
        height: 630,
        alt: "CXdynamIQ — AI-Powered Customer Experience Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CXdynamIQ — AI-Powered Omnichannel Customer Experience Platform",
    description:
      "Autonomous AI agents resolving customer inquiries in real time. 72% AI containment, 100% conversation intelligence.",
    images: ["/cxdynamiq-og.png?v=2"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
