import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { FAQ } from '../components/sections/FAQ';
import { ContactSection } from '../components/sections/ContactSection';
import { Hero } from '../components/sections/Hero';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Reviews } from '../components/sections/Reviews';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Reviews />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
