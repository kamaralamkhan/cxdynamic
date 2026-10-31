import type { Metadata } from "next";
import ProductsClientView from "./ProductsClientView";

export const metadata: Metadata = {
  title: "All Products & Cloud Solutions | CXDYNAMIQ",
  description:
    "Explore CXDYNAMIQ's complete suite of cloud contact center solutions: inbound calling, predictive sales dialers, smart IVR, conversational AI, and 20+ native CRM integrations.",
  alternates: {
    canonical: "https://chocolate-frog-774793.hostingersite.com/products",
  },
  openGraph: {
    title: "All Products & Cloud Solutions | CXDYNAMIQ",
    description:
      "Explore CXDYNAMIQ's complete suite of cloud contact center solutions: inbound calling, predictive sales dialers, smart IVR, conversational AI, and 20+ native CRM integrations.",
    url: "https://chocolate-frog-774793.hostingersite.com/products",
    siteName: "CXDYNAMIQ",
    type: "website",
    images: [
      {
        url: "/cxdynamiq-og.png",
        width: 512,
        height: 512,
        alt: "CXDYNAMIQ Products Suite",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "All Products & Cloud Solutions | CXDYNAMIQ",
    description:
      "Explore CXDYNAMIQ's complete suite of cloud contact center solutions: inbound calling, predictive sales dialers, smart IVR, conversational AI, and 20+ native CRM integrations.",
    images: ["/cxdynamiq-og.png"],
  },
};

export default function ProductsPage() {
  return <ProductsClientView />;
}
