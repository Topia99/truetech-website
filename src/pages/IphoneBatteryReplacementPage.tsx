import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

export function IphoneBatteryReplacementPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <Seo
        title="iPhone Battery Replacement in Irvine | Fast Battery Repair | TrueTech Repair"
        description="Professional iPhone battery replacement in Irvine for devices with fast drain, overheating, or poor battery health. Same-day service available."
        canonical={`${siteConfig.siteUrl}/iphone-battery-replacement-irvine`}
      />
      <h1 className="mb-4 text-4xl font-bold text-gray-900">
        iPhone Battery Replacement in Irvine
      </h1>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
        This page is reserved for battery health concerns, short battery life, and replacement
        options for customers who want their iPhone lasting longer throughout the day.
      </p>
    </main>
  );
}
