import { MessageSquare, Phone, Smartphone } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Footer() {
  return (
    <>
      <section id="contact" className="bg-blue-600 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
            Need Phone Repair in Irvine?
          </h2>
          <p className="mb-10 text-xl text-blue-100">
            Contact us today for fast and reliable service.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg transition-all hover:bg-gray-100"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.ctaLabels.callNow}
            </a>

            <a
              href={siteConfig.smsHref}
              className="flex items-center justify-center gap-2 rounded-full border border-blue-700 bg-blue-800 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-900"
            >
              <MessageSquare className="h-5 w-5" />
              {siteConfig.ctaLabels.getQuote}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center gap-2 md:mb-0">
              <Smartphone className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">{siteConfig.businessName}</span>
            </div>
            <div className="text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
