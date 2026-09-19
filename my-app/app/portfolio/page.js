import PortfolioPage from "@/pages/PortfolioPage";

export const metadata = {
  title: "Portfolio & Case Studies | Astha Creatives — Brand Design & Digital Systems",
  description:
    "Explore bespoke brand identities, eco-packaging architectures, digital platforms, video production, and business intelligence case studies crafted by Astha Creatives.",
  alternates: {
    canonical: "https://www.asthacreatives.com/portfolio",
  },
  openGraph: {
    title: "Portfolio & Brand Design Case Studies | Astha Creatives",
    description:
      "Explore bespoke brand architectures, commercial packaging systems, digital flagships, and marketing deployments across diverse industries.",
    url: "https://www.asthacreatives.com/portfolio",
    siteName: "Astha Creatives",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Brand Design Case Studies | Astha Creatives",
    description:
      "Bespoke brand architectures, commercial packaging systems, and digital platforms across diverse industries.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Astha Creatives Portfolio & Case Studies",
    description:
      "Curated case library of brand design, website development, video editing, and analytics systems.",
    url: "https://www.asthacreatives.com/portfolio",
    provider: {
      "@type": "Organization",
      name: "Astha Creatives",
      url: "https://www.asthacreatives.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioPage />
    </>
  );
}
