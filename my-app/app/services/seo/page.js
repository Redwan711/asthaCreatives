import ServicePageTemplate from "@/components/ServicePageTemplate";
import seo from "@/data/services/seo";

export const metadata = {
  title: "Search Engine Optimization (SEO) Services | Astha Creatives",
  description:
    "Dominate Google rankings with data-driven on-page, technical, and authority SEO. Foundation and Growth packages designed to drive high-intent customer revenue.",
  openGraph: {
    title: "Search Engine Optimization (SEO) | Astha Creatives",
    description:
      "Strategic SEO packages engineered to rank commercial search terms and generate organic revenue.",
    url: "https://www.asthacreatives.com/services/seo",
    siteName: "Astha Creatives",
  },
};

export default function SeoPage() {
  return <ServicePageTemplate service={seo} />;
}
