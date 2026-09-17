import heroImage from "@/images/other/why-choose-us.jpg";

const videoEditing = {
  slug: "video-editing",
  eyebrow: "Video Post-Production & Motion Graphics",
  heroImage,
  heroTitle: "Professional Video Editing & Kinetic Motion Graphics That Hook Audiences",
  heroDescription:
    "We transform raw footage into high-retention social reels, dynamic 2D/3D motion graphics, commercial brand films, and YouTube narratives optimized for watch-time and conversions.",
  stats: [
    { label: "Retention Rate Lift", value: "+85% Avg" },
    { label: "Color Grading", value: "Cinema DaVinci" },
    { label: "Turnaround", value: "24–48 Hrs" },
  ],

  strategicContext: {
    heading: "The Science of High-Retention Video: Hook, Pacing, and Visual Storytelling",
    paragraph1:
      "Video is the most dominant medium on the internet, but consumer attention spans are shorter than ever. If a video does not hook the viewer within the first 3 seconds and maintain kinetic momentum through rhythmic pacing, dynamic sound design, and on-screen motion graphics, drop-off rates exceed 70%.",
    paragraph2:
      "At Astha Creatives, our post-production editors and motion designers engineer video experiences tailored to modern viewer psychology. We handle the complete post-production workflow: surgical clip trimming, viral hook structuring, animated lower thirds, DaVinci Resolve color grading, custom sound effects (SFX), and energetic subtitles that maximize engagement across TikTok, Instagram Reels, YouTube, and corporate presentations.",
    keyPoints: [
      "Psychology-driven hook optimization designed to stop scroll drop-off",
      "Broadcast-grade color grading and Hollywood-inspired LUT mastering",
      "Layered spatial sound design including whooshes, risers, impacts, and Foley effects",
      "Dynamic kinetic subtitles with animated emoji integration for 85%+ sound-off viewers",
    ],
  },

  toolsStack: [
    {
      name: "Adobe Premiere Pro",
      purpose: "Multi-track non-linear editing, narrative pacing, multi-cam synchronization, and proxy workflows.",
      tag: "Master NLE",
    },
    {
      name: "Adobe After Effects",
      purpose: "Complex 2D/3D kinetic motion graphics, logo reveals, visual VFX compositing, and tracking.",
      tag: "Motion & VFX",
    },
    {
      name: "DaVinci Resolve Studio",
      purpose: "Industry-standard color grading, dynamic range balancing, and HDR color space transformation.",
      tag: "Color Grading",
    },
    {
      name: "Adobe Audition & Logic Pro",
      purpose: "Audio cleanup, noise reduction, vocal clarity enhancement, and spatial SFX sound design.",
      tag: "Audio Engineering",
    },
  ],

  methodology: [
    {
      step: "01",
      title: "Footage Ingestion & Narrative Pacing",
      description:
        "We log your raw footage, eliminate dead pauses, curate the most impactful takes, and assemble a tight narrative A-roll structure.",
      deliverables: ["Curated A-Roll Assembly", "Hook Selection", "Pacing Rhythm Blueprint"],
    },
    {
      step: "02",
      title: "Motion Graphics, B-Roll & Visual Accents",
      description:
        "We inject relevant B-roll clips, kinetic captions, animated UI callouts, zooms, pans, and motion graphics to constantly refresh visual stimuli.",
      deliverables: ["B-Roll Overlay Integration", "Animated Kinetic Subtitles", "Custom Motion Callouts"],
    },
    {
      step: "03",
      title: "Sound Design & Cinema Color Grade",
      description:
        "We apply spatial sound effects, mix background audio with ducking, and grade colors to achieve a rich, cinematic visual polish.",
      deliverables: ["Multi-Layered Sound FX Mix", "Custom DaVinci Color Grade", "Audio Loudness Normalization"],
    },
    {
      step: "04",
      title: "Export Optimization & Multi-Platform Formatting",
      description:
        "We render lossless 4K or 1080p master files optimized specifically for Instagram Reels (9:16), YouTube (16:9), and LinkedIn.",
      deliverables: ["Final Formatted Video Masters", "Thumbnail Still Frame Grab", "Full Master Project Archives"],
    },
  ],

  qualityStandards: [
    {
      title: "First 3-Second Hook Rigor",
      description: "Every short-form video is crafted with a high-contrast visual or audio pattern-interrupt in the first 1.5–3 seconds to slash drop-off.",
      metric: "75%+ 3s Retention Rate",
    },
    {
      title: "Audio Clarity & Loudness Balancing",
      description: "Speech is isolated, de-essed, and mastered with auto-ducked music to ensure clear vocal intelligibility on mobile speakers.",
      metric: "Crisp Dialogue Standard",
    },
    {
      title: "Frame-Accurate Subtitle Sync",
      description: "Captions are synced to the exact millisecond with highlighted keywords for effortless reading even on mute.",
      metric: "100% Timing Precision",
    },
  ],

  tiers: [
    {
      name: "Short-Form Creator Pack",
      badge: "High-Retention Reels",
      description: "Perfect for influencers, coaches, and founders wanting viral short-form video editing for TikTok, Reels, and Shorts.",
      features: [
        "Pack of 8 High-Retention Short-Form Videos (< 60s Each)",
        "Viral Hook Structuring & Dead Air Elimination",
        "Kinetic Subtitles with Highlight Animations",
        "Relevant B-Roll Overlay Footage & GIFs",
        "Layered Sound Effects (Pops, Swooshes, Hits)",
        "Color Correction & Contrast Enhancement",
        "Fast 48-Hour Turnaround per Video",
        "2 Revision Cycles Included",
      ],
      ctaLabel: "Get Short-Form Pack Quote",
      ctaHref: "/contact?service=video-editing&package=short-form",
    },
    {
      name: "Commercial & YouTube Suite",
      badge: "Most Popular",
      highlighted: true,
      description: "Complete post-production for long-form YouTube episodes, corporate brand films, webinars, and promotional commercials.",
      features: [
        "Up to 4 Long-Form Videos (Up to 15 Mins Each) OR 16 Short Reels",
        "Full Multi-Cam Synchronization & Audio Cleanup",
        "Custom 2D/3D Motion Graphics & Lower Thirds",
        "DaVinci Resolve Cinema Color Grading",
        "Full Hollywood-Grade Sound Design & SFX Mixing",
        "High-Clickthrough YouTube Thumbnail Design Included",
        "2 Short-Form Hook Cutdowns per Long-Form Video",
        "Unlimited Revisions during rough-cut phase",
        "Master 4K Video Exports & Project Files",
      ],
      ctaLabel: "Get Commercial Suite Quote",
      ctaHref: "/contact?service=video-editing&package=commercial-suite",
    },
    {
      name: "Dedicated Monthly Video Studio",
      badge: "Unlimited Scale",
      description: "For established media brands and agencies requiring an agile, full-time video editing and motion graphics department.",
      features: [
        "Unlimited Video Editing Requests & Revisions (Queued)",
        "Daily Video Turnaround (24–48 Hours)",
        "3D Logo Idents, Kinetic Typography & Explainer Animations",
        "Podcasts, Commercials, Course Modules & YouTube Shows",
        "Dedicated Senior Video Editor & Motion Lead",
        "Dedicated Slack Channel for Instant Feedback",
        "Full Cloud Storage Shared Project Workspace",
        "Source Premiere / After Effects Project Archive Delivery",
      ],
      ctaLabel: "Get Video Studio Quote",
      ctaHref: "/contact?service=video-editing&package=dedicated-studio",
    },
  ],

  comparison: {
    rows: [
      { feature: "Video Formats Covered", values: ["Reels / Shorts (9:16)", "YouTube & Commercials (16:9 + 9:16)", "All Video & Motion Formats"] },
      { feature: "Kinetic Subtitles & Styling", values: [true, true, true] },
      { feature: "Sound Design & Audio Mastering", values: ["Standard SFX", "Advanced Hollywood Mix", "Custom Sound Design"] },
      { feature: "Color Grading Quality", values: ["Color Balanced", "Cinema DaVinci LUTs", "High-End Custom Grade"] },
      { feature: "Custom Motion Graphics & 3D", values: [false, true, true] },
      { feature: "Custom Thumbnail Included", values: [false, true, true] },
      { feature: "Turnaround Time", values: ["48 Hours", "3–4 Days", "Daily 24-Hour Queue"] },
      { feature: "Revision Policy", values: ["2 Rounds", "Unlimited (Draft Phase)", "Unlimited Priority"] },
      { feature: "Master Project Files Included", values: [false, true, true] },
    ],
  },

  faqs: [
    {
      question: "How do we send our raw video footage to your team?",
      answer:
        "You can upload your raw footage directly to a dedicated Google Drive, Dropbox, or Frame.io folder that we provide upon project kickoff. We support all camera codecs (MP4, MOV, ProRes, Sony S-Log, BRAW, etc.).",
    },
    {
      question: "Can you create motion graphics for our logo and video intros?",
      answer:
        "Yes! Our motion designers build bespoke 2D/3D kinetic logo idents, intro stings, lower thirds, and animated explainer graphics tailored to your brand identity.",
    },
    {
      question: "What is the average turnaround time for an edited video?",
      answer:
        "For short-form reels and TikToks, turnaround is typically 24–48 hours. For long-form YouTube episodes and corporate commercials, the first cut is delivered within 3–5 business days.",
    },
    {
      question: "How do we provide revision notes on video cuts?",
      answer:
        "We utilize collaborative review tools like Frame.io where you can pause the video and click directly on the screen to leave timestamped notes, ensuring fast, frictionless revisions.",
    },
  ],

  closingCta: {
    heading: "Turn Raw Footage Into High-Performing Video Assets",
    text: "Captivate your audience with rhythmic editing, cinema color grading, and dynamic kinetic motion graphics.",
    linkText: "Send us a sample clip for a test edit.",
    linkHref: "/contact?subject=video-editing-inquiry",
    buttonLabel: "Get Video Editing Quote",
    buttonHref: "/contact?service=video-editing",
  },
};

export default videoEditing;
