import { ContactSection } from '../components/sections/ContactSection';
import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

export function ContactPage() {
  return (
    <main>
      <Seo
        title="Contact TrueTech Repair | Phone Repair Quote in Irvine"
        description="Contact TrueTech Repair for a free quote on iPhone, iPad, and phone repair in Irvine and Orange County. Call or message us today."
        canonical={`${siteConfig.siteUrl}/contact`}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact TrueTech Repair</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
            This page is dedicated to direct inquiries, quote requests, and customer follow-up so
            visitors can quickly reach the team for repair help.
          </p>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
