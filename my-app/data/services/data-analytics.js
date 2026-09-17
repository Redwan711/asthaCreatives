import heroImage from "@/images/other/data.jpg";

const dataAnalytics = {
  slug: "data-analytics",
  eyebrow: "Business Intelligence & Performance Analytics",
  heroImage,
  heroTitle: "Business Data Analytics & Custom Dashboards That Unlock Revenue",
  heroDescription:
    "We transform fragmented marketing, sales, and operational data into crystal-clear executive BI dashboards and deep-dive analytical intelligence reports that drive profitable decisions.",
  hasPackages: true,
  stats: [
    { label: "Reporting Clarity", value: "Real-Time BI" },
    { label: "Data Pipeline", value: "Automated ETL" },
    { label: "Revenue Leakage Fix", value: "Immediate" },
  ],

  strategicContext: {
    heading: "Navigating By Data: Replacing Guesswork With Actionable Intelligence",
    paragraph1:
      "Modern businesses generate millions of data points across website visits, social ad spend, CRM pipelines, and e-commerce transactions. However, when this data is trapped in isolated silos and clunky spreadsheets, leadership cannot see what is actually working. Guesswork leads to wasted ad spend, missed customer retention opportunities, and undetected revenue leakage.",
    paragraph2:
      "At Astha Creatives, our Business Data Analytics service bridges the gap between raw data and executive decision-making. We build unified, interactive Business Intelligence (BI) dashboards and perform forensic deep-dive analytical audits. By integrating Google Analytics 4, Meta Ads Manager, Google Ads, Stripe, and your CRM, we give you immediate visibility into customer acquisition cost (CAC), lifetime value (LTV), funnel drop-offs, and high-ROI channels.",
    keyPoints: [
      "Real-time interactive BI dashboards integrating marketing, sales, and operational data",
      "Automated ETL data connectors eliminating hundreds of hours of manual spreadsheet reporting",
      "Forensic finding reports identifying hidden conversion bottlenecks and ad-spend waste",
      "Action-oriented executive summaries translating complex analytics into clear strategic steps",
    ],
  },

  deepDivePillars: {
    badge: "Business Intelligence",
    heading: "The Architecture of Modern Revenue Analytics",
    subheading:
      "Data is only valuable when it produces clarity, eliminates wasted capital, and points directly to the next revenue breakthrough.",
    pillars: [
      {
        tag: "Attribution Modeling",
        title: "Multi-Touch Marketing Attribution",
        description:
          "Traditional 'last-click' attribution gives all credit to the final search or ad, hiding the top-of-funnel touchpoints that originally sparked the sale. We implement data-driven multi-touch attribution models that reveal the true customer journey across Meta, Google, Organic, and Email.",
        keyTakeaways: [
          "Accurate blended ROAS and true Customer Acquisition Cost (CAC) calculations",
          "Reallocation of ad spend from bleeding campaigns into high-converting channels",
          "Elimination of double-counting between Meta and Google ad pixel conversions",
        ],
        stat: { label: "Ad Spend Efficiency", value: "Up to 30% Waste Eliminated" },
      },
      {
        tag: "Automated Data",
        title: "Automated ETL Pipelines & Zero-Spreadsheet Reporting",
        description:
          "Stop paying analysts to copy-paste numbers from 10 different dashboards into fragile Excel files. We build automated Extract-Transform-Load (ETL) pipelines using Google BigQuery, Fivetran, and Looker Studio that refresh your financial, marketing, and sales numbers automatically every morning.",
        keyTakeaways: [
          "Single pane of glass dashboard accessible on desktop, tablet, and mobile",
          "Zero human error in manual spreadsheet data compilation and formula bugs",
          "Saves your leadership team 15+ hours of manual reporting every single week",
        ],
        stat: { label: "Time Savings", value: "15+ Hours Saved Weekly" },
      },
      {
        tag: "Customer Economics",
        title: "Cohort Retention & Customer LTV Modeling",
        description:
          "Sustainable profit comes from customer repeat purchases and long retention. We run deep cohort analyses tracking 30, 60, 90, and 365-day retention curves, pinpointing exactly where customers drop off and which acquisition cohorts deliver the highest lifetime customer value (LTV).",
        keyTakeaways: [
          "Identification of high-churn triggers across product categories and onboarding steps",
          "Accurate predictive payback period calculations for aggressive scaling",
          "Granular customer segmentation for targeted VIP retention marketing",
        ],
        stat: { label: "LTV Optimization", value: "+22% Customer Retention" },
      },
      {
        tag: "Actionable Insights",
        title: "Forensic Findings & Executive Action Blueprints",
        description:
          "Dashboards tell you what happened; our findings reports tell you why it happened and what to do next. Included in our analytics packages, our senior strategists analyze anomalies, spot emerging growth opportunities, and provide a clear prioritized executive action checklist.",
        keyTakeaways: [
          "Direct answers to 'Which product line should we double down on next month?'",
          "Detection of hidden checkout drop-offs, mobile UI bugs, and conversion leaks",
          "Quarterly strategic reviews aligning analytical data with board-level goals",
        ],
        stat: { label: "Executive Clarity", value: "100% Action-Oriented" },
      },
    ],
  },

  industryUseCases: {
    badge: "Analytics Impact",
    heading: "Where Business Intelligence Drives Measurable Profit",
    subheading:
      "Discover how real-time BI dashboards and forensic analytical audits unlock hidden revenue across sectors.",
    cases: [
      {
        industry: "E-Commerce & DTC",
        title: "Omnichannel Profit & Inventory Dashboard",
        solution: "Combined Shopify, Stripe, Meta Ads, and Google Ads into one live dashboard calculating net profit after ad spend and COGS.",
        impact: "Discovered $18,000/Month in Unprofitable Ad Spend on Dead SKUs",
      },
      {
        industry: "Subscription SaaS",
        title: "Cohort Churn & MRR Analytics",
        solution: "Segmented customer churn by acquisition channel, plan type, and feature usage milestones in Power BI.",
        impact: "Cut Monthly Churn from 4.8% to 2.9% Within 90 Days",
      },
      {
        industry: "B2B Sales Organizations",
        title: "Pipeline Velocity & Deal Bottleneck Tracking",
        solution: "Mapped sales rep activities, stage conversion rates, and sales cycle velocity from HubSpot CRM.",
        impact: "Shortened Average Deal Closing Cycle by 14 Business Days",
      },
      {
        industry: "Multi-Location Franchises",
        title: "Branch Performance Benchmarking",
        solution: "Consolidated POS and labor cost data across 25 regional outlets into a comparative ranking dashboard.",
        impact: "Standardized Top-Performing Store Practices, Boosting Low-Tier Revenue by 24%",
      },
    ],
  },

  toolsStack: [
    {
      name: "Microsoft Power BI & Tableau",
      purpose: "Enterprise-grade interactive visualization dashboards, DAX calculations, and executive reporting.",
      tag: "Enterprise BI",
    },
    {
      name: "Google Looker Studio",
      purpose: "Real-time cloud marketing dashboards connecting GA4, Meta Ads, Google Ads, and BigQuery.",
      tag: "Marketing Dashboards",
    },
    {
      name: "Google Analytics 4 & BigQuery",
      purpose: "Advanced event tracking, server-side attribution modeling, and raw data warehousing.",
      tag: "Web Analytics",
    },
    {
      name: "Python & SQL",
      purpose: "Custom statistical modeling, cohort retention analysis, customer lifetime value prediction, and ETL.",
      tag: "Data Science",
    },
  ],

  methodology: [
    {
      step: "01",
      title: "Data Silo & Infrastructure Audit",
      description:
        "We audit all your current tracking tags, data pipelines, advertising accounts, and databases to verify tracking accuracy and identify data gaps.",
      deliverables: ["Tracking & Pipeline Audit Report", "KPI Definition Matrix", "Data Schema Architecture"],
    },
    {
      step: "02",
      title: "Pipeline Integration & ETL Automation",
      description:
        "We connect all your disparate data sources into a unified data model, configuring automated daily refreshes and server-side conversion tracking.",
      deliverables: ["Automated Data Pipelines", "Unified Data Model", "Server-Side Conversion Tracking"],
    },
    {
      step: "03",
      title: "Custom BI Dashboard Engineering",
      description:
        "We design clean, intuitive, interactive visual dashboards with filter controls, calculated metric fields, and automated alerts for key KPI anomalies.",
      deliverables: ["Interactive BI Dashboard (PowerBI/Looker)", "Mobile-Optimized Executive View", "Custom KPI Cards"],
    },
    {
      step: "04",
      title: "Executive Findings Report & Strategy Training",
      description:
        "We deliver an in-depth analytical report highlighting specific opportunities, perform a live walkthrough, and train your team on utilizing the dashboard.",
      deliverables: ["Executive Findings & Recommendation Report", "Team Training Session Recording", "Monthly Ongoing Maintenance"],
    },
  ],

  qualityStandards: [
    {
      title: "100% Data Accuracy & Integrity",
      description: "Every automated pipeline is stress-tested and cross-reconciled against raw source logs to guarantee zero discrepant or double-counted numbers.",
      metric: "Zero Discrepancy Standard",
    },
    {
      title: "Real-Time Automated Syncing",
      description: "Dashboards update automatically on scheduled intervals, ensuring leadership always views up-to-the-minute operational performance.",
      metric: "Live Automated Refresh",
    },
    {
      title: "Intuitive Executive UX",
      description: "Visualizations are designed for immediate clarity, allowing non-technical stakeholders to understand key business health indicators in seconds.",
      metric: "5-Second Executive Clarity",
    },
  ],

  tiers: [
    {
      name: "Dashboard Creation",
      badge: "Real-Time Tracking",
      description: "Setup and configuration of custom, real-time Business Intelligence dashboards to visualize marketing and operational performance.",
      features: [
        "Interactive BI Dashboard Setup (Looker Studio or Power BI)",
        "Data Source Integration (GA4, Meta Ads, Google Ads, CRM)",
        "Custom KPI Cards & Live Conversion Metrics",
        "Automated Scheduled Data Refreshes",
        "Filtering by Date Range, Channels, and Regions",
        "Team Walkthrough & Training Session Recording",
      ],
      ctaLabel: "Get Quote",
      ctaHref: "/contact?service=data-analytics&package=dashboard",
    },
    {
      name: "Findings & Reporting",
      badge: "Strategic Intelligence (Recommended)",
      highlighted: true,
      description: "Deep-dive analytical audit and specific findings report revealing exact conversion bottlenecks and growth opportunities.",
      features: [
        "Deep-Dive Performance & Conversion Funnel Audit",
        "Specific Findings & Anomaly Detection Report",
        "Ad-Spend ROI & Customer Acquisition Analysis",
        "Comprehensive Executive Action-Item Report",
        "Strategic Growth Recommendations & Roadmap",
        "Strategic Consultation & Presentation Session",
      ],
      ctaLabel: "Get Quote",
      ctaHref: "/contact?service=data-analytics&package=reporting",
    },
  ],

  comparison: {
    rows: [
      { feature: "Interactive BI Dashboard Setup", values: [true, true] },
      { feature: "Data Source Integration (GA4, Ads, CRM)", values: [true, true] },
      { feature: "Automated Data Refreshes", values: [true, true] },
      { feature: "Deep-Dive Performance & Funnel Audit", values: [false, true] },
      { feature: "Specific Findings & Anomaly Report", values: [false, true] },
      { feature: "Executive Strategic Recommendations", values: [false, true] },
      { feature: "Team Walkthrough & Training", values: [true, true] },
    ],
  },

  faqs: [
    {
      question: "Which data platforms can you connect into our dashboard?",
      answer:
        "We connect all major advertising and analytics platforms: Google Analytics 4, Meta Ads Manager, Google Ads, TikTok Ads, LinkedIn Ads, Shopify, WooCommerce, Stripe, HubSpot, Salesforce, PostgreSQL, BigQuery, and custom REST API endpoints.",
    },
    {
      question: "What is the difference between Dashboard Creation and Findings & Reporting?",
      answer:
        "Dashboard Creation gives you an automated, interactive visual tool to track your live data continuously. Findings & Reporting is our forensic analytical service where we evaluate your data to identify revenue bottlenecks, ad waste, and concrete growth opportunities.",
    },
    {
      question: "Is our business data kept confidential and secure?",
      answer:
        "100%. We operate under strict Non-Disclosure Agreements (NDA), configure role-based access control (RBAC), and never store your raw proprietary data on unauthorized external servers.",
    },
  ],

  closingCta: {
    heading: "Unlock Hidden Profits With Decision-Ready Business Intelligence",
    text: "Stop flying blind with disjointed spreadsheets. Let's build a unified dashboard that turns data into clear revenue.",
    linkText: "Request a sample dashboard demonstration.",
    linkHref: "/contact?subject=data-analytics-demo",
    buttonLabel: "Get Data Analytics Quote",
    buttonHref: "/contact?service=data-analytics",
  },
};

export default dataAnalytics;
