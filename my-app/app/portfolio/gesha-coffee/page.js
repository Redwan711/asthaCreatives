import GeshaCaseStudyContent from "@/components/GeshaCaseStudyContent";

export const metadata = {
  title: "Gesha Coffee Roasters Case Study | Astha Creatives — Brand & Packaging Design",
  description:
    "Explore the complete visual identity, organic leaf & bean typography, architectural cafe storefront, and sustainable packaging architecture designed for Gesha Coffee Roasters.",
  alternates: {
    canonical: "https://www.asthacreatives.com/portfolio/gesha-coffee",
  },
  openGraph: {
    title: "Gesha Coffee Roasters Case Study | Astha Creatives",
    description:
      "Full brand identity, custom typography anatomy, cafe storefront architecture, and takeaway packaging suite for specialty coffee.",
    url: "https://www.asthacreatives.com/portfolio/gesha-coffee",
    siteName: "Astha Creatives",
    images: [
      {
        url: "/images/brand-design/gesha-materials/brand-identity-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Gesha Coffee Roasters Brand Identity",
      },
    ],
    type: "article",
  },
};

export default function GeshaCoffeePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Gesha Coffee Roasters — Brand Identity & Packaging Architecture",
    headline: "Gesha Coffee Roasters Case Study",
    description:
      "Minimalist visual identity, custom leaf-and-bean typography, and eco-packaging architecture for specialty coffee roasters.",
    creator: {
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
      <GeshaCaseStudyContent />
    </>
  );
}
