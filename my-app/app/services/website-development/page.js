import ServicePageTemplate from "@/components/ServicePageTemplate";
import websiteDevelopment from "@/data/services/website-development";

export const metadata = {
  title: "Custom Website Design, WordPress & Headless Next.js Development | Astha Creatives",
  description:
    "We build custom business websites, digital portfolios, visual WordPress/Elementor builds, and enterprise Headless WordPress web applications with Next.js. Sub-50ms speeds, 100% Core Web Vitals, and search dominance.",
  keywords: [
    "headless wordpress",
    "headless wordpress next js",
    "custom website design",
    "wordpress web development",
    "elementor website design",
    "digital portfolio websites",
    "headless wordpress development agency",
    "wordpress and next js combo",
    "elementor to nextjs migration",
    "wpgraphql next js",
    "custom nextjs web development",
    "headless woocommerce nextjs",
  ],
  alternates: {
    canonical: "https://www.asthacreatives.com/services/website-development",
  },
  openGraph: {
    title: "Custom Website Design, WordPress & Headless Next.js Development | Astha Creatives",
    description:
      "From custom business websites and Elementor builds to enterprise Headless WordPress & Next.js architectures. Sub-50ms speeds and 100% Core Web Vitals.",
    url: "https://www.asthacreatives.com/services/website-development",
    siteName: "Astha Creatives",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Design, WordPress & Headless Next.js Development | Astha Creatives",
    description:
      "From custom business websites and Elementor builds to enterprise Headless WordPress & Next.js architectures. Sub-50ms speeds and 100% Core Web Vitals.",
  },
};

export default function WebsiteDevelopmentPage() {
  return <ServicePageTemplate service={websiteDevelopment} />;
}
