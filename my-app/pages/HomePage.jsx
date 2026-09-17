import React from "react";
import HeroSection from "@/components/HeroSection";
import DisciplineMarquee from "@/components/DisciplineMarquee";
import HeroStats from "@/components/HeroStats";
import DigitalOceanNeeds from "@/components/DigitalOceanNeeds";
import DigitalOceanProcess from "@/components/DigitalOceanProcess";
import OfferingsSection from "@/components/OfferingsSection";
import Portfolio from "@/components/Portfolio";
import Customers from "@/components/Customers";
import Team from "@/components/Team";
import Gcta from "@/components/Gcta";

const HomePage = () => {
  return (
    <main className="relative flex flex-col w-full overflow-hidden bg-[#080b14]">
      {/* 1. Hero Section: dark smoke bg */}
      <div data-theme="dark">
        <HeroSection />
      </div>

      {/* 1b. Infinite Discipline Ticker Ribbon */}
      <div data-theme="dark">
        <DisciplineMarquee />
      </div>

      {/* 1c. Stats: interactive bento grid */}
      <div data-theme="dark">
        <HeroStats />
      </div>

      {/* 2. Digital Ocean Needs: dark brand (seamless with stats) */}
      <div data-theme="dark">
        <DigitalOceanNeeds />
      </div>

      {/* 3. Digital Ocean Process: light mpure (first contrast shift) */}
      <div data-theme="light">
        <DigitalOceanProcess />
      </div>

      {/* 4. Offerings: white (subtle contrast from process) */}
      <div data-theme="light">
        <OfferingsSection />
      </div>

      {/* 5. Portfolio: dark (dramatic shift) */}
      <div data-theme="dark">
        <Portfolio />
      </div>

      {/* 6. Customers: light mpure */}
      <div data-theme="light">
        <Customers />
      </div>

      {/* 7. Team: white (subtle contrast from customers) */}
      <div data-theme="light">
        <Team />
      </div>

      {/* 8. Final CTA: accent brandnd */}
      <div data-theme="dark">
        <Gcta />
      </div>
    </main>
  );
};

export default HomePage;
