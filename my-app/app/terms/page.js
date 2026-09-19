import React from "react";
import Link from "next/link";
import { CheckCircle2, Shield, FileCheck, ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Astha Creatives",
  description:
    "Review Astha Creatives standard terms of service, engagement agreements, and IP ownership policies.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#06080f] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brandnd/10 rounded-full blur-[160px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">
            <CheckCircle2 size={14} className="text-emerald-400" />
            Clear Client Engagements
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Terms of Service & Engagement
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Last updated: September 2026. Standard terms governing creative deliverables, web platform development, and service milestones.
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white font-bold text-lg mb-3">
              <Shield size={20} className="text-emerald-400" />
              <h2>1. 100% Intellectual Property Ownership</h2>
            </div>
            <p>
              Upon final project delivery and full settlement of invoices, all commercial copyrights, vector production files (AI, SVG, PDF), brand manuals, source code repositories, and customized visual assets transfer completely to the client. Astha Creatives retains the right to display non-confidential deliverables in our professional portfolio and case studies unless an exclusive white-label NDA is enacted.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white font-bold text-lg mb-3">
              <FileCheck size={20} className="text-cyan-400" />
              <h2>2. Project Milestones & Iteration Sprints</h2>
            </div>
            <p className="mb-3">
              Each engagement proceeds through defined iterative stages:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
              <li><strong>Discovery & Strategy:</strong> Alignment on brand positioning, wireframes, and project scope.</li>
              <li><strong>Design & Development:</strong> High-fidelity mockups, prototypes, and code implementations.</li>
              <li><strong>Client Review:</strong> Each milestone includes structured revision rounds as specified in your statement of work.</li>
              <li><strong>Deployment & Handover:</strong> Domain connection, source code deployment, and asset delivery.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white font-bold text-lg mb-3">
              <CheckCircle2 size={20} className="text-cyan-400" />
              <h2>3. Enterprise SLA & Support Guarantees</h2>
            </div>
            <p>
              Astha Creatives commits to rigorous sprint schedules. For active support retainers and production systems, we guarantee an initial inquiry response time within 2 business hours during regular studio hours (Sunday to Thursday, 9:00 AM – 7:00 PM GMT+6).
            </p>
          </section>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-brandnd/10 to-cyan-500/10 p-6">
            <div>
              <h3 className="font-bold text-white text-base">Have questions about our terms or custom contract requirements?</h3>
              <p className="text-xs text-gray-400 mt-1">Our team is happy to review custom enterprise master service agreements (MSAs).</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-2.5 text-xs font-bold text-black hover:bg-cyan-300 transition-all shrink-0"
            >
              <span>Contact Us</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
