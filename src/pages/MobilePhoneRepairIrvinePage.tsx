import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

export function MobilePhoneRepairIrvinePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <Seo
        title="Mobile Phone Repair in Irvine | We Come to You | TrueTech Repair"
        description="Convenient mobile phone repair in Irvine. We come to you for screen replacement, battery repair, and same-day phone service."
        canonical={`${siteConfig.siteUrl}/mobile-phone-repair-irvine`}
      />
      <h1 className="mb-4 text-4xl font-bold text-gray-900">Mobile Phone Repair in Irvine</h1>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
        This page will speak to customers who want repair help at home, at work, or on a busy
        schedule and need a convenient mobile service option in Irvine.
      </p>
    </main>
  );
}
