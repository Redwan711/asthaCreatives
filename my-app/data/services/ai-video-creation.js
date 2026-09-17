import heroImage from "@/images/other/why-choose-us.jpg";

const aiVideoCreation = {
  slug: "ai-video-creation",
  eyebrow: "Generative AI Video Production",
  heroImage,
  heroTitle: "Cinematic Generative AI Video Production for Next-Gen Brands",
  heroDescription:
    "We harness state-of-the-art generative video models, synthetic voiceovers, and photorealistic virtual avatars to produce cinematic commercials, product teasers, and futuristic storytelling at unmatched speed.",
  stats: [
    { label: "Production Speed", value: "3x Faster" },
    { label: "Cost Efficiency", value: "Up to 70% Less" },
    { label: "Resolution", value: "4K UHD Export" },
  ],

  strategicContext: {
    heading: "The Future of Video: Unleashing Infinite Imagination Through Generative AI",
    paragraph1:
      "Traditional video commercial shoots require location scouting, expensive camera equipment, actors, lighting crews, and weeks of scheduling. For most modern campaigns, this legacy model is too slow and cost-prohibitive. Generative AI video transforms this paradigm by enabling hyper-realistic visuals, impossible camera movements, and futuristic scenes that can be produced in days instead of months.",
    paragraph2:
      "At Astha Creatives, our AI video studio combines advanced neural prompt engineering, consistent seed management, and post-production cinema grading. We use world-class models like Midjourney, Runway Gen-2, Pika, and ElevenLabs to create thumb-stopping product teasers, surreal brand commercials, localized multi-language avatars, and dynamic social ads that command extraordinary engagement.",
    keyPoints: [
      "Photorealistic AI visuals with zero physical studio production overhead",
      "Multilingual synthetic voiceover generation and human-like speech cadence",
      "Multi-aspect ratio exports ready for 9:16 TikTok/Reels, 16:9 YouTube, and 1:1 feeds",
      "Full post-production color grade, SFX sound design, and kinetic typography overlays",
    ],
  },

  toolsStack: [
    {
      name: "Midjourney v6 & DALL-E 3",
      purpose: "Precision keyframe generation, concept styling, and cinematic visual staging.",
      tag: "Concept & Staging",
    },
    {
      name: "Runway Gen-2 & Kling AI",
      purpose: "Temporal consistency video synthesis, camera motion control, and hyper-realistic physics.",
      tag: "Video Synthesis",
    },
    {
      name: "ElevenLabs AI Audio",
      purpose: "Human-grade neural voice synthesis, emotion tuning, voice cloning, and multilingual localization.",
      tag: "Voice & Audio",
    },
    {
      name: "Premiere Pro & After Effects",
      purpose: "Editorial pacing, motion tracking, audio mastering, and composite visual polish.",
      tag: "Cinema Post-Production",
    },
  ],

  methodology: [
    {
      step: "01",
      title: "Scriptwriting & Visual Storyboarding",
      description:
        "We draft an engaging narrative script, define the visual aesthetic moodboard, and design keyframe storyboards for each scene.",
      deliverables: ["Commercial Narrative Script", "Style Moodboard", "Keyframe Storyboard Deck"],
    },
    {
      step: "02",
      title: "Generative Generation & Seed Iteration",
      description:
        "Our prompt engineers generate hundreds of high-resolution video variations, controlling camera pans, focal lengths, and character consistency.",
      deliverables: ["Raw AI Scene Generative Clips", "Neural Voiceover Audio Track", "Pacing Rough-Cut"],
    },
    {
      step: "03",
      title: "Post-Production, Sound Design & Color Grading",
      description:
        "We take the best AI generations into Premiere and After Effects to composite text overlays, cinematic LUTs, foley sound effects, and background scores.",
      deliverables: ["Composited Master Video", "Spatial Sound Design & Mix", "Motion Graphics Overlays"],
    },
    {
      step: "04",
      title: "4K Upscaling & Multi-Format Delivery",
      description:
        "We upscale all footage using AI super-resolution algorithms to crisp 4K UHD and export in vertical (9:16), horizontal (16:9), and square (1:1) formats.",
      deliverables: ["4K Master Commercial (MP4/ProRes)", "Social Cutdowns (Reels/Shorts)", "Full Commercial Rights Release"],
    },
  ],

  qualityStandards: [
    {
      title: "Temporal Coherence Benchmark",
      description: "Every AI scene is inspected frame-by-frame to eliminate morphing artifacts, flickering, or uncanny anatomical distortions.",
      metric: "Artifact-Free Quality",
    },
    {
      title: "Broadcast Audio Mastering",
      description: "Voice tracks and musical scores are balanced to -14 LUFS standard with crisp frequency equalization and zero synthetic distortion.",
      metric: "-14 LUFS Broadcast Standard",
    },
    {
      title: "AI Super-Resolution 4K Upscaling",
      description: "Footage is enhanced with neural super-sampling to deliver razor-sharp clarity on retina screens and large 4K displays.",
      metric: "True 4K UHD 60fps",
    },
  ],

  tiers: [
    {
      name: "AI Concept Teaser",
      badge: "Fast Turnaround",
      description: "Ideal for product teasers, startup announcements, and high-impact social media hook videos.",
      features: [
        "1 Custom AI Video Commercial (15–30 Seconds)",
        "Scriptwriting & Storyboard Concepting",
        "Generative Photorealistic AI Visuals",
        "Studio-Quality Neural AI Voiceover",
        "Licensed Background Score & Sound Effects",
        "Kinetic Subtitles & Brand Logo Outro",
        "2 Revision Rounds Included",
        "Delivered in 9:16 (Reels) or 16:9 (YouTube)",
      ],
      ctaLabel: "Get Teaser Quote",
      ctaHref: "/contact?service=ai-video-creation&package=teaser",
    },
    {
      name: "Cinematic Brand Commercial",
      badge: "Most Popular",
      highlighted: true,
      description: "Our flagship generative video package delivering cinematic storytelling, custom avatars, and multi-format distribution assets.",
      features: [
        "1 Full Cinematic Commercial (30–60 Seconds)",
        "3 Short-Form Hook Cutdowns (10–15s Each for Ads)",
        "Advanced Character & Environment Consistency",
        "Multilingual Voiceover Options (2 Languages)",
        "Advanced Motion Graphics & 3D Typography",
        "Custom Sound Design & Foley Mixing",
        "Multi-Format Master Deliverables (9:16, 16:9, 1:1)",
        "Unlimited Concept Iterations during storyboard phase",
        "Master 4K UHD ProRes & MP4 Video Files",
      ],
      ctaLabel: "Get Cinematic Commercial Quote",
      ctaHref: "/contact?service=ai-video-creation&package=cinematic",
    },
    {
      name: "Enterprise AI Content Suite",
      badge: "Full Campaign",
      description: "For corporate brands requiring a full monthly campaign of generative video ads, recurring avatar explainers, and localized variations.",
      features: [
        "4 Full-Length AI Commercials per Month",
        "12 High-Converting Short-Form Video Ad Variations",
        "Custom Digital Human Avatar Cloned to Your Brand",
        "Localization into 5+ Global Languages with Lip-Sync",
        "Dedicated Prompt Director & Post-Production Lead",
        "Full Paid Ad Performance Hook Testing Variants",
        "24-Hour Express Emergency Turnaround Option",
        "Full Global Commercial & Broadcast Licensing",
      ],
      ctaLabel: "Get Enterprise Suite Quote",
      ctaHref: "/contact?service=ai-video-creation&package=enterprise-suite",
    },
  ],

  comparison: {
    rows: [
      { feature: "Video Duration", values: ["15–30 Seconds", "30–60 Seconds", "Up to 4 Videos/Mo"] },
      { feature: "Ad Cutdown Variations", values: [false, "3 Hook Cutdowns", "12 Ad Variants"] },
      { feature: "Character & Seed Consistency", values: ["Standard", "High Precision", "Custom Cloned Avatar"] },
      { feature: "Multilingual Voiceover", values: ["1 Language", "2 Languages", "5+ Languages with Lip-Sync"] },
      { feature: "Multi-Format Aspect Ratios (9:16, 16:9)", values: ["1 Format", "All Formats (9:16, 16:9, 1:1)", "All Formats + Raw Clips"] },
      { feature: "4K Super-Resolution Upscale", values: [true, true, true] },
      { feature: "Sound Design & Licensed Music", values: [true, true, true] },
      { feature: "Turnaround Time", values: ["3–5 Days", "5–7 Days", "Dedicated Weekly Cadence"] },
      { feature: "Commercial Broadcast Rights", values: [true, true, true] },
    ],
  },

  faqs: [
    {
      question: "How realistic do generative AI videos look?",
      answer:
        "With our state-of-the-art workflow combining Midjourney v6, Runway Gen-2, and custom neural post-processing, the visuals are cinematic, fluid, and photorealistic. We carefully curate and filter out any synthetic distortions before delivering your final assets.",
    },
    {
      question: "Can you create a custom AI avatar or spokesperson for our brand?",
      answer:
        "Yes! In our Cinematic and Enterprise tiers, we can generate hyper-realistic digital brand avatars or clone your company founder's voice and likeness for consistent recurring video updates.",
    },
    {
      question: "Can AI video commercials be used for paid advertising on Meta and YouTube?",
      answer:
        "Yes, absolutely. AI video ads frequently outperform standard static creatives by 200–400% in click-through rates due to their surreal, thumb-stopping visual hooks.",
    },
    {
      question: "Do I have full commercial ownership to use the videos anywhere?",
      answer:
        "100%. All videos produced by Astha Creatives include full commercial copyright release for social media, YouTube, television broadcast, trade shows, and paid advertising campaigns.",
    },
  ],

  closingCta: {
    heading: "Bring Impossible Visual Ideas to Life With Generative AI",
    text: "Experience the speed and cinematic power of modern AI video production for your next product launch.",
    linkText: "Explore our AI video showcase on a quick consultation.",
    linkHref: "/contact?subject=ai-video-inquiry",
    buttonLabel: "Get AI Video Production Quote",
    buttonHref: "/contact?service=ai-video-creation",
  },
};

export default aiVideoCreation;
