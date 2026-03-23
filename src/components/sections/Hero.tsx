import { Calendar, CheckCircle, MessageSquare, Phone } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { trustPoints } from '../../data/siteData';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 py-20 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent opacity-10" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Same-Day Phone Repair <br className="hidden sm:block" />
            <span className="text-blue-400">in Irvine</span>
          </h1>

          <p className="mb-4 text-lg font-light text-blue-100 sm:text-xl">
            Fast and reliable iPhone screen repair, battery replacement, and charging port fixes.
          </p>

          <p className="mb-10 text-base text-gray-300 sm:text-lg">
            Serving Irvine and Orange County with same-day service and warranty.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.ctaLabels.callNow}
            </a>

            <a
              href={siteConfig.smsHref}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-lg transition-all hover:bg-gray-100 sm:w-auto"
            >
              <MessageSquare className="h-5 w-5" />
              {siteConfig.ctaLabels.textForQuote}
            </a>

            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              <Calendar className="h-5 w-5" />
              {siteConfig.ctaLabels.bookRepair}
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 text-sm font-medium text-blue-200 sm:flex-row sm:gap-8 sm:text-base">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
