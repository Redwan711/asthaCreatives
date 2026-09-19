import AhfCaseStudyContent from "@/components/AhfCaseStudyContent";

export const metadata = {
  title: "Alpha Health Farma (AHF) Case Study | Astha Creatives — Clinical Brand & Packaging",
  description:
    "Explore the certified clinical brand identity, pharmaceutical container packaging, medical device displays, and institutional stationery designed for Alpha Health Farma.",
  alternates: {
    canonical: "https://www.asthacreatives.com/portfolio/alpha-health-farma",
  },
  openGraph: {
    title: "Alpha Health Farma (AHF) Case Study | Astha Creatives",
    description:
      "Clinical brand architecture, certified pharmaceutical packaging, and medical device UI displays.",
    url: "https://www.asthacreatives.com/portfolio/alpha-health-farma",
    siteName: "Astha Creatives",
    images: [
      {
        url: "/images/brand-design/medical-equipment.jpg",
        width: 1200,
        height: 630,
        alt: "Alpha Health Farma Brand Architecture",
      },
    ],
    type: "article",
  },
};

export default function AhfPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Alpha Health Farma — Clinical Brand Architecture & Packaging System",
    headline: "Alpha Health Farma (AHF) Case Study",
    description:
      "Certified clinical brand architecture, pharmaceutical container packaging, and medical equipment system.",
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
      <AhfCaseStudyContent />
    </>
  );
}
