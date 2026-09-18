import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { PricingSection } from "@/components/landing/pricing-section";
import { WhatToAsk } from "@/components/landing/what-to-ask";

export const LandingPage = () => {
    return (
        <div id="top" className="min-h-screen bg-background">
            <Header />
            <Hero />
            <HowItWorks />
            <WhatToAsk />
            <PricingSection />
            <CTA />
            <Footer />
        </div>
    );
};
