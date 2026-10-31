import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "CXDYNAMIQ — Cloud Contact Center & AI Customer Experience Platform",
  description:
    "Stress-free contact center solutions. Deploy a cloud contact center in a day and automate customer engagement in minutes with omnichannel routing, CTI integrations, and conversational AI.",
  metadataBase: new URL("https://www.cxdynamiq.com"),
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
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CXDYNAMIQ — Cloud Contact Center Solutions",
    description: "Deploy a Cloud Contact Center in a day and automate it in minutes with VIP support.",
    url: "https://www.cxdynamiq.com",
    siteName: "CXDYNAMIQ",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
