import Header from "@/components/layout/Header";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import WhatAvniDoes from "@/components/sections/WhatAvniDoes";
import ImpactStories from "@/components/sections/ImpactStories";
import WhyChooseAvni from "@/components/sections/WhyChooseAvni";
import Solutions from "@/components/sections/Solutions";
import Transparency from "@/components/sections/Transparency";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <AnnouncementBanner />
      <main>
        <Hero />
        <TrustedBy />
        <WhatAvniDoes />
        <ImpactStories />
        <WhyChooseAvni />
        <Solutions />
        <Transparency />
        <Testimonials />
        <CTASection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
