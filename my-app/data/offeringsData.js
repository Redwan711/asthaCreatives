export const offeringsData = [
  {
    id: "creative-design",
    number: "01",
    title: "Creative Design",
    category: "Design & Identity",
    summary:
      "Individual designs including custom logos, banners, social media posts, and brand marketing materials.",
    details:
      "Transform your ideas into visually stunning designs that captivate your audience and communicate your core value proposition across both digital and physical touchpoints.",
    deliverables: [
      "Custom Logo & Mark Design",
      "Digital & Print Banners",
      "Social Media Post Designs",
      "Marketing & Brand Materials",
    ],
    hasPackages: false,
    learnMoreHref: "/services/creative-design",
    quoteHref: "/contact?service=creative-design",
  },
  {
    id: "brand-guideline",
    number: "02",
    title: "Brand Guideline Development",
    category: "Design & Identity",
    summary:
      "Complete visual identity standards including typography, color palette, logo usage, and brand voice rules.",
    details:
      "Ensure consistent representation everywhere your brand appears. We define the clear rules and visual governance needed to build lasting brand authority and recognition.",
    deliverables: [
      "Color Palette & Color Codes",
      "Typography & Hierarchy",
      "Logo Clear-space & Variations",
      "Brand Voice & Imagery Style",
    ],
    hasPackages: false,
    learnMoreHref: "/services/brand-guidelines",
    quoteHref: "/contact?service=brand-guidelines",
  },
  {
    id: "website-design",
    number: "03",
    title: "Website Design & Portfolios",
    category: "Web & Digital Ports",
    summary:
      "High-converting modern websites, portfolio showcases, and company profile sites tailored to your market.",
    details:
      "Your website is your brand's digital headquarters. We design responsive, fast, and SEO-optimized web experiences that build trust and convert visitors into loyal clients.",
    deliverables: [
      "Custom Business Websites",
      "Digital Portfolios & Showcases",
      "Company Profile Websites",
      "Conversion-Optimized Landing Pages",
    ],
    hasPackages: false,
    learnMoreHref: "/services/website-development",
    quoteHref: "/contact?service=website-design",
  },
  {
    id: "social-account-creation",
    number: "04",
    title: "Social Media Account Creation",
    category: "Social & Presence",
    summary:
      "Professional setup and full optimization of brand channels across Facebook, Instagram, LinkedIn, and more.",
    details:
      "Launch your brand with a verified, cohesive foundation. We handle complete account configuration, SEO bio optimization, vanity handles, and branded banners across all major platforms.",
    deliverables: [
      "Multi-Platform Profile Setup",
      "High-Res Profile & Cover Assets",
      "Keyword-Optimized Bios & Links",
      "Security & Verification Settings",
    ],
    hasPackages: false,
    learnMoreHref: "/services/social-media-management",
    quoteHref: "/contact?service=social-account-creation",
  },
  {
    id: "content-design",
    number: "05",
    title: "Content Design",
    category: "Content & Strategy",
    summary:
      "Curated monthly content production tiers blending high-impact static designs, motion reels, and persuasive copy.",
    details:
      "Keep your audience engaged every single week with predictable, high-caliber creative assets built specifically to drive reach, saves, and shares.",
    hasPackages: true,
    packages: [
      {
        name: "Standard",
        badge: "Essential Reach",
        specs: [
          "13 Static Designs",
          "2 Motion Graphics / Reels",
          "15 Engaging Captions & Hashtags",
          "Content Calendar Mapping",
        ],
        ctaText: "Check Packages",
        ctaHref: "/contact?service=content-design&package=standard",
      },
      {
        name: "Growth",
        badge: "High Velocity",
        specs: [
          "25 Static Designs",
          "4 Motion Graphics / Reels",
          "30 Strategic Captions & Copy",
          "Dedicated Content Scheduling",
        ],
        ctaText: "Check Packages",
        ctaHref: "/contact?service=content-design&package=growth",
      },
    ],
    learnMoreHref: "/services/content-design",
    quoteHref: "/contact?service=content-design",
  },
  {
    id: "ai-video-creation",
    number: "06",
    title: "AI Video Creation",
    category: "Video & Motion",
    summary:
      "Next-generation AI-assisted video generation for commercials, explainers, concept teasers, and rapid storytelling.",
    details:
      "Harness cutting-edge generative AI video workflows to produce cinematic visuals, dynamic avatars, and futuristic concepts at a fraction of traditional production timelines.",
    deliverables: [
      "AI Concept Visuals & Commercials",
      "Synthetic Voiceover & Translation",
      "Multi-Format Aspect Ratios (9:16, 16:9)",
      "Dynamic AI Motion Storytelling",
    ],
    hasPackages: false,
    learnMoreHref: "/services/ai-video-creation",
    quoteHref: "/contact?service=ai-video-creation",
  },
  {
    id: "motion-graphics",
    number: "07",
    title: "Motion Graphics Design",
    category: "Video & Motion",
    summary:
      "Engaging 2D/3D motion graphics, logo idents, promotional animations, and animated UI illustrations.",
    details:
      "Breathe life into complex concepts. We produce smooth, kinetic animations that capture immediate user attention on social feeds, pitch decks, and digital ads.",
    deliverables: [
      "Logo Idents & Title Animations",
      "Explainer & Infographic Motion",
      "Product Demonstration Animations",
      "Social Promo & Story Hooks",
    ],
    hasPackages: false,
    learnMoreHref: "/services/video-editing",
    quoteHref: "/contact?service=motion-graphics",
  },
  {
    id: "video-editing",
    number: "08",
    title: "Professional Video Editing",
    category: "Video & Motion",
    summary:
      "Full-cycle post-production: pacing, color grading, sound design, subtitles, and viral hook optimization.",
    details:
      "Turn raw footage into polished, broadcast-grade narratives that retain viewer watch time and inspire action across YouTube, TikTok, Reels, and corporate channels.",
    deliverables: [
      "Short-Form Reels & Shorts Editing",
      "Long-Form Corporate & YouTube Videos",
      "Color Grading & Audio Mastering",
      "Dynamic Captions & Motion Lower Thirds",
    ],
    hasPackages: false,
    learnMoreHref: "/services/video-editing",
    quoteHref: "/contact?service=video-editing",
  },
  {
    id: "seo",
    number: "09",
    title: "Search Engine Optimization (SEO)",
    category: "Growth & Visibility",
    summary:
      "Strategic on-page, technical, and authority optimization to rank your business for high-intent search terms.",
    details:
      "Dominate Google search results and attract high-converting organic visitors ready to purchase your products or retain your services.",
    hasPackages: true,
    packages: [
      {
        name: "Foundation SEO",
        badge: "Local & Technical",
        specs: [
          "Technical Site Audit & Fixes",
          "Keyword Research (15 Core Terms)",
          "On-Page Title & Meta Optimization",
          "Google Business Profile Setup",
        ],
        ctaText: "Check Packages",
        ctaHref: "/contact?service=seo&package=foundation",
      },
      {
        name: "Growth SEO",
        badge: "National & Ranking",
        specs: [
          "Comprehensive Content Strategy",
          "High-Authority Backlink Acquisition",
          "Advanced Schema & Speed Optimization",
          "Monthly Ranking & Traffic Reports",
        ],
        ctaText: "Check Packages",
        ctaHref: "/contact?service=seo&package=growth",
      },
    ],
    learnMoreHref: "/services/seo",
    quoteHref: "/contact?service=seo",
  },
  {
    id: "social-media-management",
    number: "10",
    title: "Social Media Management",
    category: "Social & Presence",
    summary:
      "End-to-end community building, publishing schedules, active engagement, and algorithm-informed growth.",
    details:
      "Consistent presence is the key to digital authority. We operate your social media channels end-to-end so you can focus on running your core business.",
    hasPackages: true,
    packages: [
      {
        name: "Standard Retainer",
        badge: "Consistent Presence",
        specs: [
          "3 Platforms Managed",
          "15 Posts Monthly Scheduling",
          "Community Moderation (Inbox & Comments)",
          "Monthly Performance Insights",
        ],
        ctaText: "Check Packages",
        ctaHref: "/contact?service=social-management&package=standard",
      },
      {
        name: "Full-Scale Retainer",
        badge: "Omnichannel Growth",
        specs: [
          "All Primary Channels Managed",
          "Daily Posting & Story Updates",
          "Active Engagement & Outreach",
          "Trend Jacking & Dedicated Growth Lead",
        ],
        ctaText: "Check Packages",
        ctaHref: "/contact?service=social-management&package=full-scale",
      },
    ],
    learnMoreHref: "/services/social-media-management",
    quoteHref: "/contact?service=social-media-management",
  },
  {
    id: "business-data-analytics",
    number: "11",
    title: "Business Data Analytics",
    category: "Growth & Visibility",
    summary:
      "Custom business dashboards and deep-dive analytical reports that reveal exact revenue opportunities.",
    details:
      "Transform messy operational data and marketing metrics into clear, actionable visual dashboards and decision-ready intelligence reports.",
    hasPackages: true,
    packages: [
      {
        name: "Dashboard Creation",
        badge: "Real-Time Tracking",
        specs: [
          "Interactive BI Dashboard Setup",
          "Data Source Integration (CRM, Ads, Web)",
          "Automated Data Refreshes",
          "Team Walkthrough & Training",
        ],
        ctaText: "Check Packages",
        ctaHref: "/contact?service=data-analytics&package=dashboard",
      },
      {
        name: "Findings & Reporting",
        badge: "Strategic Intelligence",
        specs: [
          "Deep-Dive Performance Audit",
          "Specific Findings & Anomaly Detection",
          "Executive Action-Item Report",
          "Strategic Growth Recommendations",
        ],
        ctaText: "Check Packages",
        ctaHref: "/contact?service=data-analytics&package=reporting",
      },
    ],
    learnMoreHref: "/services/data-analytics",
    quoteHref: "/contact?service=data-analytics",
  },
];
