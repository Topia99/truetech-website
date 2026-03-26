import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Hand,
  MessageSquare,
  Monitor,
  Phone,
  ShieldCheck,
  Smartphone,
  TriangleAlert,
  Waves,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { RepairGallery } from '../components/sections/RepairGallery';
import { siteConfig } from '../config/site';
import { repairGalleryImages } from '../data/repairGalleryImages';
import { Seo } from '../seo/Seo';

const screenProblems = [
  {
    title: 'Cracked or shattered glass',
    description:
      'A cracked iPhone screen can spread quickly and make everyday use frustrating, even if the phone still turns on.',
    icon: Smartphone,
  },
  {
    title: 'Touch not responding correctly',
    description:
      'If taps, swipes, or typing feel unreliable, screen damage may be affecting the touch layer and making the phone harder to use.',
    icon: Hand,
  },
  {
    title: 'Lines, black spots, or flickering',
    description:
      'Display issues after a drop often show up as discoloration, flashing, or dead areas that make the screen difficult to read.',
    icon: Monitor,
  },
  {
    title: 'Visible damage getting worse',
    description:
      'A screen that still works today can become more unstable over time, especially when cracks expose the display to more wear.',
    icon: TriangleAlert,
  },
];

const serviceIncludes = [
  'A replacement screen for damaged front glass and display-related issues',
  'A quick inspection of the device before starting the repair',
  'Touch and display testing after installation',
  'A final function check so basic screen use is working as expected',
];

const screenQualityAndPricing = [
  {
    title: 'High-quality replacement screen options',
    description:
      'Different customers have different priorities, so we can walk through screen options based on the model, the repair goal, and the kind of replacement that makes the most sense.',
    icon: Smartphone,
  },
  {
    title: 'OLED availability where appropriate',
    description:
      'For supported iPhone models, OLED options may be available. If that applies to your device, we can explain the option clearly before any repair work begins.',
    icon: Waves,
  },
  {
    title: 'Straightforward pricing before repair',
    description:
      'You can get a clear quote first, ask questions, and understand the price before deciding. The goal is a simple quote process without confusing surprises.',
    icon: CircleDollarSign,
  },
];

const trustPoints = [
  {
    title: 'Focused on common screen damage',
    description:
      'This page is built specifically for cracked, shattered, or malfunctioning iPhone screens, so the next step is clear right away.',
    icon: Smartphone,
  },
  {
    title: 'Convenient same-day help',
    description:
      'When the repair is straightforward, same-day service can be the fastest way to get your phone back into daily use.',
    icon: CheckCircle2,
  },
  {
    title: 'Responsive local communication',
    description:
      'Customers in Irvine often just need a fast answer, a quote, and a realistic repair plan without a lot of back and forth.',
    icon: MessageSquare,
  },
];

const faqs = [
  {
    question: 'How long does iPhone screen repair take?',
    answer:
      'Many screen repairs can be completed the same day, depending on the model and the condition of the device.',
  },
  {
    question: 'Do I need an appointment?',
    answer:
      'It helps to contact us first so we can confirm the issue, give you a quote, and coordinate the quickest repair option.',
  },
  {
    question: 'Can you come to me in Irvine?',
    answer:
      'If mobile service is the right fit for your repair, we can discuss a convenient option for customers in Irvine.',
  },
  {
    question: 'What if the screen is cracked but the phone still works?',
    answer:
      'That is still worth checking. A phone can remain usable for a while even when the screen is damaged, but the display or touch response can get worse over time.',
  },
];

export function IphoneScreenRepairPage() {
  return (
    <main>
      <Seo
        title="iPhone Screen Repair in Irvine | Same-Day Screen Replacement | TrueTech Repair"
        description="Fast and reliable iPhone screen repair in Irvine. Same-day cracked screen replacement with quality parts and mobile service available. Get a free quote today."
        canonical={`${siteConfig.siteUrl}/iphone-screen-repair-irvine`}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent opacity-10" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
                Local Screen Repair Service
              </p>
              <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                iPhone Screen Repair in Irvine
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
                If your iPhone screen is cracked, unresponsive, flickering, or hard to use after a
                drop, TrueTech Repair offers a clear local path to same-day screen repair in
                Irvine, with mobile service available when it fits the job.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500"
                >
                  <Phone className="h-5 w-5" />
                  Call for Screen Repair
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-lg transition-all hover:bg-gray-100"
                >
                  <MessageSquare className="h-5 w-5" />
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <h2 className="mb-6 text-2xl font-bold text-white">What We Help With</h2>
              <div className="space-y-4">
                {screenProblems.slice(0, 3).map((problem) => (
                  <div
                    key={problem.title}
                    className="rounded-2xl border border-white/10 bg-slate-950/20 p-5"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <div
                        aria-hidden="true"
                        className="inline-flex rounded-xl bg-white/10 p-2 text-blue-200"
                      >
                        <problem.icon className="h-4 w-4" />
                      </div>
                      <p className="font-semibold text-white">{problem.title}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-blue-100">{problem.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Common iPhone Screen Problems We See
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Not every damaged screen looks the same. Some phones have obvious shattered glass,
              while others still power on but become frustrating to use because the display no
              longer behaves normally.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {screenProblems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-600"
                  >
                    <problem.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                </div>
                <p className="leading-relaxed text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                What the Screen Repair Service Includes
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Screen repair is more than swapping one broken part for another. The goal is to
                make sure the display looks right, the touch response feels normal, and the phone
                is checked carefully before it goes back into daily use.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="space-y-5">
                {serviceIncludes.map((item) => (
                  <div key={item} className="flex gap-4">
                    <div className="mt-1 rounded-full bg-blue-100 p-2 text-blue-600">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <p className="leading-relaxed text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
                Before You Decide
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Quality Screen Options, Straightforward Pricing
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-gray-600">
                Screen repair decisions are usually about two things: what kind of replacement
                screen makes sense for your phone, and what the repair will cost before you agree
                to move forward.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                We keep that part simple by explaining the relevant options clearly, answering
                questions up front, and helping you understand the quote before any repair begins.
              </p>
            </div>

            <div className="space-y-5">
              {screenQualityAndPricing.map((item, index) => {
                const Icon = item.icon;
                const isPrimary = index === 0;

                return (
                  <div
                    key={item.title}
                    className={`rounded-3xl border shadow-sm ${
                      isPrimary
                        ? 'border-blue-100 bg-blue-50 p-8'
                        : 'border-gray-100 bg-gray-50 p-6'
                    }`}
                  >
                    <div className="flex gap-4">
                      <div
                        aria-hidden="true"
                        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                          isPrimary ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="leading-relaxed text-gray-600">{item.description}</p>
                        {item.title === 'Straightforward pricing before repair' && (
                          <Link
                            to="/contact"
                            className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
                          >
                            Request a Quote
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <RepairGallery images={repairGalleryImages} />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
              Why Customers Choose Us
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Irvine Customers Choose TrueTech Repair for Screen Damage
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              When your screen breaks, speed matters, but so does communication. Customers usually
              want to know how fast they can get help, whether mobile repair is possible, and what
              the quote process looks like.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trustPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-slate-100 p-3 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{point.title}</h3>
                  <p className="leading-relaxed text-gray-600">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Screen Repair Service for Irvine and Nearby Orange County Customers
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-gray-600">
                This page is focused on Irvine because that is where many customers search first
                when they need cracked iPhone screen help fast. If you are nearby in Orange County,
                the same quick quote and local service process can still be a fit.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                If screen damage is not the only issue you are dealing with, you can also review
                our general FAQ or reach out directly so we can point you to the right service.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Helpful Next Steps</h3>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-between rounded-2xl border border-gray-200 px-5 py-4 font-semibold text-gray-900 transition-colors hover:border-blue-300 hover:text-blue-700"
                >
                  Request a screen repair quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/faq"
                  className="flex items-center justify-between rounded-2xl border border-gray-200 px-5 py-4 font-semibold text-gray-900 transition-colors hover:border-blue-300 hover:text-blue-700"
                >
                  Read repair FAQs
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/iphone-battery-replacement-irvine"
                  className="flex items-center justify-between rounded-2xl border border-gray-200 px-5 py-4 font-semibold text-gray-900 transition-colors hover:border-blue-300 hover:text-blue-700"
                >
                  Looking for battery help instead?
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              iPhone Screen Repair Questions
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              These are some of the most common questions people ask before deciding whether to fix
              a cracked iPhone screen right away.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
              Need Help Now?
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Get a Quote for iPhone Screen Repair
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-300">
              If your iPhone screen is cracked, flickering, or hard to use, contact TrueTech
              Repair for the fastest next step. A quick call, message, or quote request can help
              you decide what to do next.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phoneNumber}
              </a>
              <a
                href={siteConfig.smsHref}
                className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-lg transition hover:bg-gray-100"
              >
                <MessageSquare className="h-5 w-5" />
                Text for Screen Repair Help
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
              >
                <ShieldCheck className="h-5 w-5" />
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
