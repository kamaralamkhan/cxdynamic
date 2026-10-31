import { notFound } from "next/navigation";
import { getPageData, getSitemap, pathToSlug } from "@/lib/content";
import ServicePage from "@/components/ServicePage";
import { getSeo } from "@/content/seo";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const sitemap = getSitemap();
  return sitemap
    .filter((entry) => entry.path.startsWith("/page/"))
    .map((entry) => ({
      slug: entry.path.replace("/page/", ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const path = `/page/${decoded}`;
  const seo = getSeo(path);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://www.cxdynamiq.com/page/${slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://chocolate-frog-774793.hostingersite.com/page/${slug}`,
      siteName: "CXDYNAMIQ",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 512,
          height: 512,
          alt: "CXDYNAMIQ",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function PageTemplate({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const jsonSlug = pathToSlug(`/page/${decoded}`);
  const page = getPageData(jsonSlug);
  if (!page) notFound();
  return <ServicePage page={page} />;
}
