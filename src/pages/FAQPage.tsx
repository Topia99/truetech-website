import { FAQ } from '../components/sections/FAQ';
import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

export function FAQPage() {
  return (
    <main>
      <Seo
        title="Phone Repair FAQ | TrueTech Repair Irvine"
        description="Read common questions about phone repair, screen replacement, battery service, mobile repair, turnaround time, and appointments in Irvine."
        canonical={`${siteConfig.siteUrl}/faq`}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Frequently Asked Questions About Phone Repair
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
            This page gives customers quick answers about turnaround time, warranties, and repair
            expectations before they decide to book service.
          </p>
        </div>
      </section>
      <FAQ />
    </main>
  );
}
