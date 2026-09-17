import heroImage from "@/images/other/data.jpg";

const dataAnalytics = {
  slug: "data-analytics",
  eyebrow: "Business Intelligence & Performance Analytics",
  heroImage,
  heroTitle: "Business Data Analytics & Custom Dashboards That Unlock Revenue",
  heroDescription:
    "We transform fragmented marketing, sales, and operational data into crystal-clear executive BI dashboards and deep-dive analytical intelligence reports that drive profitable decisions.",
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
      name: "Dashboard Creation Package",
      badge: "Real-Time Tracking",
      description: "Designed for businesses needing custom, real-time Business Intelligence dashboards to visualize marketing and sales performance.",
      features: [
        "Setup of 1 Unified Interactive BI Dashboard (Looker Studio or Power BI)",
        "Integration of up to 4 Core Data Sources (e.g. GA4, Meta Ads, Google Ads, CRM)",
        "Custom KPI Cards (CAC, ROAS, Revenue, Conversion Rates)",
        "Automated Scheduled Daily Data Refreshes",
        "Mobile-Friendly Executive Summary View",
        "Filtering by Date Range, Campaign, and Region",
        "45-Minute Live Team Walkthrough & Training Session",
        "14 Days of Post-Setup Data Calibration Support",
      ],
      ctaLabel: "Get Dashboard Quote",
      ctaHref: "/contact?service=data-analytics&package=dashboard-creation",
    },
    {
      name: "Findings & Reporting Package",
      badge: "Deep Intelligence (Recommended)",
      highlighted: true,
      description: "For companies requiring deep-dive forensic audits, revenue bottleneck detection, and recurring strategic intelligence reports.",
      features: [
        "Everything in Dashboard Creation Package",
        "In-Depth Forensic Performance & Funnel Drop-off Audit",
        "Customer Lifetime Value (LTV) & Cohort Retention Analysis",
        "Marketing Attribution & Multi-Touch ROI Breakdown",
        "Specific Anomaly Detection & Ad-Waste Identification",
        "Comprehensive 15-Page Executive Action-Item Report",
        "Concrete Strategic Recommendations for Revenue Growth",
        "Monthly Retainer Maintenance & Data Pipeline Monitoring",
        "Dedicated Data Analytics Consultant Lead",
      ],
      ctaLabel: "Get Findings & Reporting Quote",
      ctaHref: "/contact?service=data-analytics&package=findings-reporting",
    },
    {
      name: "Enterprise BI & Data Warehousing",
      badge: "Full Custom Data Stack",
      description: "For established corporations and multi-brand platforms requiring custom BigQuery / Snowflake data warehousing and predictive AI models.",
      features: [
        "Custom Cloud Data Warehouse Setup (BigQuery / Snowflake)",
        "Unlimited Data Source Connectors & Custom Python/SQL ETL",
        "Multi-Department Executive Dashboard Suite (Finance, Ops, Sales)",
        "Predictive Machine Learning Models (Churn Prediction, LTV)",
        "Automated Anomaly & Threshold Alerts via Slack/Email",
        "Server-Side Tagging & Advanced First-Party Tracking",
        "Weekly Executive Analytical Briefings",
        "Dedicated Senior Analytics Engineer & 24/7 Pipeline SLA",
      ],
      ctaLabel: "Get Enterprise Data Quote",
      ctaHref: "/contact?service=data-analytics&package=enterprise-bi",
    },
  ],

  comparison: {
    rows: [
      { feature: "Interactive BI Dashboard Setup", values: [true, true, true] },
      { feature: "Connected Data Sources", values: ["Up to 4 Sources", "Up to 8 Sources", "Unlimited Enterprise Sources"] },
      { feature: "Automated Data Refreshes", values: ["Daily Automated", "Hourly / Real-Time", "Continuous Real-Time ETL"] },
      { feature: "Deep-Dive Forensic Findings Report", values: [false, true, true] },
      { feature: "Cohort & LTV Retention Analysis", values: [false, true, true] },
      { feature: "Ad-Spend Waste Identification", values: [false, true, true] },
      { feature: "Cloud Data Warehouse (BigQuery)", values: [false, "Optional Add-on", true] },
      { feature: "Custom SQL / Python Modeling", values: [false, false, true] },
      { feature: "Team Training & Handoff", values: ["45-Min Session", "Full Workshop", "Ongoing Dedicated Training"] },
      { feature: "Ongoing Pipeline Monitoring", values: ["14 Days", "Monthly Retainer", "Dedicated 24/7 SLA"] },
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
        "Dashboard Creation provides you with the interactive tool and automated pipeline to view your data continuously in real time. Findings & Reporting adds our expert human data analysis on top: we dive deep into your historical data to uncover hidden revenue leaks, identify exact audience segments generating the highest profit, and deliver an executive roadmap of strategic actions.",
    },
    {
      question: "Will our team know how to use the dashboard after launch?",
      answer:
        "Yes! Every analytics package includes a dedicated live training session and a recorded video walkthrough so your team can confidently filter, export, and utilize the dashboard on day one.",
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
