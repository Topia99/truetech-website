import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

export function IpadRepairPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <Seo
        title="iPad Repair in Irvine | Screen & Battery Service | TrueTech Repair"
        description="Trusted iPad repair in Irvine for screen damage, charging issues, and battery problems. Fast diagnostics and reliable repair service."
        canonical={`${siteConfig.siteUrl}/ipad-repair-irvine`}
      />
      <h1 className="mb-4 text-4xl font-bold text-gray-900">iPad Repair in Irvine</h1>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
        This page will cover iPad screen damage, charging problems, and diagnostics for families,
        students, and professionals who rely on their tablet every day.
      </p>
    </main>
  );
}
