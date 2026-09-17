"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Layers } from "lucide-react";
import Button from "@/components/Button";

const OfferingCard = ({ offering }) => {
  const [selectedPkgIndex, setSelectedPkgIndex] = useState(0);

  const activePackage = offering.hasPackages
    ? offering.packages[selectedPkgIndex]
    : null;

  return (
    <article className="offering-card group relative flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brandnd/50 hover:shadow-xl md:p-8">
      <div>
        {/* Top meta: Number & Category */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span className="text-sm font-bold tracking-wider text-brandnd">
            {offering.number}
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            {offering.category}
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="mt-4 text-xl font-bold tracking-tight text-brand md:text-2xl group-hover:text-brandnd transition-colors">
          {offering.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
          {offering.summary}
        </p>

        {/* Package Tabs if Offering has multiple packages (e.g. Content Design, SEO, Analytics) */}
        {offering.hasPackages && offering.packages && (
          <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50/80 p-3">
            <div className="mb-2 flex items-center justify-between text-xs font-bold text-gray-700">
              <span className="flex items-center gap-1">
                <Layers size={14} className="text-brandnd" />
                Select Package:
              </span>
            </div>

            <div className="flex gap-2">
              {offering.packages.map((pkg, idx) => (
                <button
                  key={pkg.name}
                  type="button"
                  onClick={() => setSelectedPkgIndex(idx)}
                  className={`flex-1 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    selectedPkgIndex === idx
                      ? "bg-brandnd text-white shadow-sm"
                      : "bg-white text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {pkg.name}
                </button>
              ))}
            </div>

            {/* Active Package Specs */}
            {activePackage && (
              <div className="mt-3 pt-3 border-t border-gray-200/80">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-brandnd">
                  {activePackage.badge}
                </span>
                <ul className="mt-2 space-y-1.5">
                  {activePackage.specs.map((spec, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center gap-2 text-xs font-medium text-gray-700"
                    >
                      <Check size={14} className="text-brandnd shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Standard Deliverables list when no custom packages */}
        {!offering.hasPackages && offering.deliverables && (
          <div className="mt-5 border-t border-gray-100 pt-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              Key Inclusions
            </span>
            <ul className="mt-2 space-y-1.5">
              {offering.deliverables.map((item, dIdx) => (
                <li
                  key={dIdx}
                  className="flex items-center gap-2 text-xs font-medium text-gray-700"
                >
                  <Check size={14} className="text-brandnd shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action CTA Buttons */}
      <div className="mt-8 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
        {/* Get a Quote Button */}
        <Link
          href={
            offering.hasPackages && activePackage
              ? activePackage.ctaHref
              : offering.quoteHref
          }
          className="flex-1"
        >
          <Button variant="primary" size="sm" className="w-full">
            {offering.hasPackages && activePackage
              ? activePackage.ctaText
              : "Get A Quote"}
          </Button>
        </Link>

        {/* Learn More link */}
        {offering.learnMoreHref && (
          <Link
            href={offering.learnMoreHref}
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-700 transition-colors hover:text-brandnd px-3 py-2"
          >
            Learn More
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </article>
  );
};

export default OfferingCard;
