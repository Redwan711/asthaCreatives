import ServicePageTemplate from "@/components/ServicePageTemplate";
import contentDesign from "@/data/services/content-design";

export const metadata = {
  title: "Content Design & Monthly Social Media Production | Astha Creatives",
  description:
    "Predictable monthly content production: 13+2+15 and 25+4+30 static visuals, motion reels, and viral copywriting packages engineered for engagement.",
  openGraph: {
    title: "Content Design Packages | Astha Creatives",
    description:
      "High-velocity monthly social content production tiers combining static graphics, video reels, and persuasive copy.",
    url: "https://www.asthacreatives.com/services/content-design",
    siteName: "Astha Creatives",
  },
};

export default function ContentDesignPage() {
  return <ServicePageTemplate service={contentDesign} />;
}
