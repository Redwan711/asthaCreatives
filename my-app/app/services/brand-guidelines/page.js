import ServicePageTemplate from "@/components/ServicePageTemplate";
import brandGuidelines from "@/data/services/brand-guidelines";

export const metadata = {
  title: "Brand Guideline Development & Identity Standards | Astha Creatives",
  description:
    "Protect brand equity with authoritative corporate Brand Books and design systems. Complete typography, color theory, logo clear-space, and voice/tone governance.",
  openGraph: {
    title: "Brand Guideline Development | Astha Creatives",
    description:
      "Comprehensive corporate brand books, design tokens, and identity systems built for unshakeable consistency.",
    url: "https://www.asthacreatives.com/services/brand-guidelines",
    siteName: "Astha Creatives",
  },
};

export default function BrandGuidelinesPage() {
  return <ServicePageTemplate service={brandGuidelines} />;
}
