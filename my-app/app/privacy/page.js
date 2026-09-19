import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Astha Creatives",
  description:
    "Learn how Astha Creatives protects your confidential data, intellectual property, and privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#06080f] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[160px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-4">
            <ShieldCheck size={14} className="text-cyan-400" />
            Client Confidentiality & Trust
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Privacy Policy & Data Security
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Last updated: September 2026. How we safeguard your brand assets, sensitive project data, and communications.
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white font-bold text-lg mb-3">
              <Lock size={20} className="text-cyan-400" />
              <h2>1. Non-Disclosure & Intellectual Property Safeguards</h2>
            </div>
            <p>
              At Astha Creatives, your proprietary project briefs, trade secrets, vector raw assets, and technical architectures are strictly confidential. We execute mutual Non-Disclosure Agreements (NDAs) before discovery discussions upon request. All client assets are stored in encrypted, isolated environments.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white font-bold text-lg mb-3">
              <Eye size={20} className="text-cyan-400" />
              <h2>2. Information We Collect</h2>
            </div>
            <p className="mb-3">
              We collect information that you directly provide when inquiring about services, booking consultations, or collaborating during creative sprints:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
              <li>Full name, corporate email address, and phone number.</li>
              <li>Company name, project scope, budget indications, and business requirements.</li>
              <li>Brand guidelines, vector assets, and marketing collateral shared for project execution.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white font-bold text-lg mb-3">
              <FileText size={20} className="text-cyan-400" />
              <h2>3. How We Use Project Data</h2>
            </div>
            <p className="mb-3">
              Collected information is solely utilized to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
              <li>Deliver tailored creative design, web development, and digital marketing services.</li>
              <li>Communicate milestone reviews, sprint deliverables, and deployment schedules.</li>
              <li>Issue invoices, contracts, and legal transfer documents.</li>
              <li>Astha Creatives does NOT sell, rent, or monetize client contact details or proprietary materials.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white font-bold text-lg mb-3">
              <ShieldCheck size={20} className="text-cyan-400" />
              <h2>4. Direct Inquiries & Data Rights</h2>
            </div>
            <p>
              You maintain the absolute right to request deletion or export of your project data from our working archives at any time. For questions regarding our data protection policies, contact us directly at{" "}
              <a href="mailto:contact@redmun.com" className="text-cyan-400 underline hover:text-cyan-300">
                contact@redmun.com
              </a>{" "}
              or{" "}
              <a href="mailto:info@asthacreatives.com" className="text-cyan-400 underline hover:text-cyan-300">
                info@asthacreatives.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
