import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

export function PhoneRepairOrangeCountyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <Seo
        title="Phone Repair in Orange County | Same-Day Mobile Repair | TrueTech Repair"
        description="Phone repair in Orange County with same-day service for screen, battery, and device issues. Contact TrueTech Repair for a free quote."
        canonical={`${siteConfig.siteUrl}/phone-repair-orange-county`}
      />
      <h1 className="mb-4 text-4xl font-bold text-gray-900">
        Phone Repair in Irvine &amp; Orange County
      </h1>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
        This page is designed for broader service-area messaging, showing how TrueTech supports
        customers across Orange County with convenient local phone repair service.
      </p>
    </main>
  );
}
