import heroImage from "@/images/other/brand-creation.jpg";

const brandGuidelines = {
  slug: "brand-guidelines",
  eyebrow: "Brand Strategy & Identity Governance",
  heroImage,
  heroTitle: "Comprehensive Brand Guidelines That Ensure Unshakeable Consistency",
  heroDescription:
    "Define the visual, verbal, and structural rules of your brand. We build authoritative Brand Books and design systems that preserve your identity across every digital, print, and physical medium.",
  stats: [
    { label: "Standard Manual", value: "24–40 Pages" },
    { label: "Consistency Rate", value: "100% Unified" },
    { label: "Asset Handoff", value: "Figma + PDF" },
  ],

  strategicContext: {
    heading: "Why Clear Brand Governance is Essential for Market Leadership",
    paragraph1:
      "As companies scale, decentralized marketing teams, external agencies, and third-party vendors often dilute brand equity by using inconsistent colors, improper logo proportions, conflicting fonts, and mismatched messaging tones. Without strict governance, your brand loses recognizability and authority.",
    paragraph2:
      "A comprehensive Brand Guideline Manual serves as the authoritative single source of truth for your business. It bridges the gap between creative inspiration and flawless execution, giving your internal teams and external partners clear, actionable rules for logo clear-space, color breakdowns (Pantone, CMYK, RGB, HEX), typography hierarchies, photography art direction, and voice/tone frameworks.",
    keyPoints: [
      "Eliminate visual discrepancies across internal departments and external partners",
      "Exact color specifications for web, screen, and specialized industrial printing",
      "Clear voice, tone, and editorial principles for all copywriting and public messaging",
      "Standardized UI component token libraries ready for developer handoff",
    ],
  },

  toolsStack: [
    {
      name: "Figma Design Tokens",
      purpose: "Cloud-based digital style libraries, color variables, and interactive typography tokens.",
      tag: "Digital Systems",
    },
    {
      name: "Adobe InDesign",
      purpose: "Publication-grade editorial manual compilation and interactive corporate brand books.",
      tag: "Brand Books",
    },
    {
      name: "Pantone Color Bridge",
      purpose: "Precision spectral matching between screen RGB, process CMYK, and spot ink formulations.",
      tag: "Color Science",
    },
    {
      name: "Zeroheight / Notion",
      purpose: "Interactive, web-hosted living brand guidelines accessible to your entire team.",
      tag: "Living Hubs",
    },
  ],

  methodology: [
    {
      step: "01",
      title: "Brand Archetype & Positioning Audit",
      description:
        "We interview key stakeholders and audit existing touchpoints to codify your core brand personality, mission, values, target audience expectations, and competitive differentiation.",
      deliverables: ["Brand Core Matrix", "Personality Archetype Profile", "Stakeholder Alignment Summary"],
    },
    {
      step: "02",
      title: "Visual Asset Codification",
      description:
        "We mathematically specify all logo lockups, exclusion zones, minimum sizing restrictions, permitted backgrounds, color combinations, and unacceptable usage scenarios.",
      deliverables: ["Logo Usage Rules", "Clear-space Ratios", "Unacceptable Misuse Matrix"],
    },
    {
      step: "03",
      title: "Color, Typography & Art Direction",
      description:
        "We build complete palette systems (primary, secondary, semantic accents) with rigorous contrast tables, pairing rules for headings/body fonts, and guidelines for imagery selection.",
      deliverables: ["Full Color Formula Sheets", "Font Pairing & Scale Rules", "Photography Art Direction Guide"],
    },
    {
      step: "04",
      title: "Manual Assembly & Interactive Hub Delivery",
      description:
        "We assemble the high-resolution master Brand Guideline Manual in interactive PDF and cloud-hosted formats with downloadable asset packs for instant deployment.",
      deliverables: ["Master Brand Manual (PDF)", "Figma Style Library", "Packaged Vector Asset Repository"],
    },
  ],

  qualityStandards: [
    {
      title: "Cross-Media Color Calibration",
      description: "Every color token is laboratory-verified for seamless reproduction across OLED screens, matte papers, glossy collateral, and textile merchandise.",
      metric: "Delta-E < 2.0 Precision",
    },
    {
      title: "WCAG 2.1 Accessibility Benchmarking",
      description: "All font sizes and background-foreground color combinations meet AAA legibility standards for inclusive user experiences.",
      metric: "100% ADA & WCAG Compliant",
    },
    {
      title: "Zero-Ambiguity Documentation",
      description: "Rules are stated with explicit 'Do's and Don'ts' visual side-by-side examples to eliminate any risk of misinterpretation.",
      metric: "Full Misuse Prevention",
    },
  ],

  tiers: [
    {
      name: "Starter Brand Guide",
      badge: "Core Standards",
      description: "Essential governance for startups and growing businesses needing standardized logo, color, and font usage rules.",
      features: [
        "Core Brand Values & Mission Statement",
        "Primary & Secondary Logo Rules",
        "Minimum Sizing & Exclusion Zone Specifications",
        "Primary Color Palette (HEX, RGB, CMYK)",
        "Primary & Secondary Font Hierarchy",
        "Basic Imagery & Iconography Guidelines",
        "12–16 Page Master PDF Guide",
        "Packaged Master Logo Assets Archive",
      ],
      ctaLabel: "Get Starter Quote",
      ctaHref: "/contact?service=brand-guidelines&package=starter",
    },
    {
      name: "Comprehensive Brand Book",
      badge: "Most Popular",
      highlighted: true,
      description: "In-depth corporate guidelines covering full visual identity, voice and tone, stationery specs, and digital UI guidelines.",
      features: [
        "Everything in Starter Brand Guide",
        "Extended Secondary & Accent Color Palette (with Pantone)",
        "Complete Typography Hierarchy (Print, Web, Mobile)",
        "Voice, Tone & Editorial Copywriting Framework",
        "Social Media & Advertising Layout Templates",
        "Corporate Stationery & Merchandising Specs",
        "Full 'Do & Don't' Misuse Visual Matrix",
        "28–36 Page Interactive Master Brand Book",
        "Figma Cloud Style Library & Web Tokens",
        "30-Minute Team Training & Handoff Session",
      ],
      ctaLabel: "Get Comprehensive Quote",
      ctaHref: "/contact?service=brand-guidelines&package=comprehensive",
    },
    {
      name: "Enterprise Design System",
      badge: "Full Governance",
      description: "For established corporations and multi-brand portfolios requiring living cloud documentation and enterprise UI tokens.",
      features: [
        "Comprehensive 50+ Page Multi-Channel Manual",
        "Multi-Sub-brand Co-Branding & Architecture Rules",
        "Complete Web & Mobile UI Component System in Figma",
        "Living Web Hub (Zeroheight or Custom Notion Hub)",
        "3D Asset, Video Motion & Sound Branding Guidelines",
        "International Packaging & Global Print Production Specs",
        "Executive Strategy & Brand Positioning Blueprint",
        "Quarterly Guideline Update & Governance Reviews",
        "Full Commercial & Global Copyright Transfer",
      ],
      ctaLabel: "Get Enterprise Quote",
      ctaHref: "/contact?service=brand-guidelines&package=enterprise",
    },
  ],

  comparison: {
    rows: [
      { feature: "Guideline Manual Length", values: ["12–16 Pages", "28–36 Pages", "50+ Pages"] },
      { feature: "Logo Usage & Exclusion Rules", values: [true, true, true] },
      { feature: "Color Specifications", values: ["HEX, RGB, CMYK", "HEX, RGB, CMYK, Pantone", "Full Spectral + Material"] },
      { feature: "Typography Hierarchy", values: ["Basic Web/Print", "Extended Multi-Level", "Full Multi-Platform System"] },
      { feature: "Voice, Tone & Copywriting Rules", values: [false, true, true] },
      { feature: "Stationery & Packaging Specs", values: [false, true, true] },
      { feature: "Digital UI Tokens (Figma Library)", values: [false, true, true] },
      { feature: "Living Web-Hosted Hub (Zeroheight)", values: [false, false, true] },
      { feature: "Motion & Sound Identity Rules", values: [false, false, true] },
      { feature: "Team Handoff & Governance Session", values: [false, "30-Min Session", "Executive Workshop"] },
    ],
  },

  faqs: [
    {
      question: "Why does my business need a brand guideline document?",
      answer:
        "A brand guideline manual ensures that everyone who creates content, designs ads, or develops software for your business presents a unified, professional image. It prevents brand fragmentation, protects visual equity, and accelerates design turnaround times by up to 50%.",
    },
    {
      question: "Can you create brand guidelines if we already have a logo?",
      answer:
        "Yes! Many of our clients have an existing logo but lack systematic rules for color usage, typography hierarchy, voice/tone, and application templates. We reverse-engineer and expand your existing assets into a world-class brand manual.",
    },
    {
      question: "What is the difference between a PDF brand guide and a Figma design system?",
      answer:
        "A PDF brand guide is a comprehensive document for designers, marketers, and executives detailing all rules and philosophies. A Figma design system is an interactive component library containing actual reusable UI components, color variables, and typography styles for web and app developers.",
    },
    {
      question: "How long does it take to develop a comprehensive brand book?",
      answer:
        "Our Starter Brand Guide typically takes 5–7 business days, while our Comprehensive Brand Book takes 10–14 business days, including stakeholder review cycles.",
    },
  ],

  closingCta: {
    heading: "Build a Brand That Speaks With One Powerful Voice",
    text: "Protect your brand equity with authoritative identity guidelines built for scalable growth.",
    linkText: "Request a brand governance discovery call.",
    linkHref: "/contact?subject=brand-guidelines-inquiry",
    buttonLabel: "Get Brand Guidelines Quote",
    buttonHref: "/contact?service=brand-guidelines",
  },
};

export default brandGuidelines;
