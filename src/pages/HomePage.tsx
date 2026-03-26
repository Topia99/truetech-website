import { FAQ } from '../components/sections/FAQ';
import { ContactSection } from '../components/sections/ContactSection';
import { Hero } from '../components/sections/Hero';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Reviews } from '../components/sections/Reviews';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

export function HomePage() {
  return (
    <main>
      <Seo
        title="TrueTech Repair | Same-Day Phone Repair in Irvine & Orange County"
        description="Same-day iPhone, iPad, and phone repair in Irvine and Orange County. Screen replacement, battery repair, and mobile service available. Get a free quote today."
        canonical={`${siteConfig.siteUrl}/`}
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Reviews />
      <FAQ limit={4} showAllLink />
      <ContactSection />
    </main>
  );
}
