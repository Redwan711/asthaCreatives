import React from "react";
import HeroSection from "@/components/HeroSection";
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
    <main className="relative flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section — dark smoke bg */}
      <HeroSection />

      {/* 1b. Stats — dark brand (seamless with hero) */}
      <HeroStats />

      {/* 2. Digital Ocean Needs — dark brand (seamless with stats) */}
      <DigitalOceanNeeds />

      {/* 3. Digital Ocean Process — light mpure (first contrast shift) */}
      <DigitalOceanProcess />

      {/* 4. Offerings — white (subtle contrast from process) */}
      <OfferingsSection />

      {/* 5. Portfolio — dark (dramatic shift) */}
      <Portfolio />

      {/* 6. Customers — light mpure */}
      <Customers />

      {/* 7. Team — white (subtle contrast from customers) */}
      <Team />

      {/* 8. Final CTA — accent brandnd */}
      <Gcta />
    </main>
  );
};

export default HomePage;
