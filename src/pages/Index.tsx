
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturedUniversities } from "@/components/FeaturedUniversities";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Resources } from "@/components/Resources";
import { TrustBadges } from "@/components/TrustBadges";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedUniversities />
      <WhyChooseUs />
      <Testimonials />
      <Resources />
      <TrustBadges />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
