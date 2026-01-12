"use client";

import {
  Header,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  CTASection,
  Footer,
} from "@/components/sections";

export default function HomeIndex() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
