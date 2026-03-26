import {
  ArrowRight,
  BatteryCharging,
  BatteryLow,
  CheckCircle2,
  CircleDollarSign,
  Gauge,
  MapPin,
  MessageSquare,
  Phone,
  Power,
  ShieldCheck,
  Thermometer,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

const batterySymptoms = [
  {
    title: 'Battery drains too quickly',
    description:
      'If your phone drops battery percentage much faster than it used to, the battery may no longer be holding a reliable charge.',
    icon: BatteryLow,
  },
  {
    title: 'Battery health is low',
    description:
      'A lower battery health reading can be a sign that the phone is no longer performing the way it should during normal daily use.',
    icon: Gauge,
  },
  {
    title: 'Phone gets hot during normal use or charging',
    description:
      'Overheating can make the phone uncomfortable to use and may point to a battery issue worth checking before it gets worse.',
    icon: Thermometer,
  },
  {
    title: 'Unexpected shutdowns or weak performance',
    description:
      'If the phone powers off early or feels inconsistent through the day, a worn battery may be affecting stability and performance.',
    icon: Power,
  },
];

const batteryBenefits = [
  'Better day-to-day battery life',
  'Fewer random shutdowns',
  'Less time spent looking for a charger',
  'A more usable phone without upgrading right away',
];

const batteryQualityAndPricing = [
  {
    title: 'Replacement battery options explained clearly',
    description:
      'We help you understand the battery replacement that fits your model and repair needs so the decision feels straightforward instead of rushed.',
    icon: BatteryCharging,
  },
  {
    title: 'A clear quote before repair starts',
    description:
      'Pricing is explained before the work begins, and you can ask questions first so there are no confusing surprises before you decide.',
    icon: CircleDollarSign,
  },
  {
    title: 'Testing and confirmation after replacement',
    description:
      'The process includes confirming the phone is charging and functioning normally after the battery replacement is complete.',
    icon: ShieldCheck,
  },
];

const repairSteps = [
  {
    title: 'Request a quote',
    description:
      'Call, text, or contact us online with your iPhone model and the battery symptoms you are noticing.',
  },
  {
    title: 'Confirm the battery issue',
    description:
      'We review the symptoms, talk through the repair, and make sure battery replacement sounds like the right next step.',
  },
  {
    title: 'Replace and test',
    description:
      'The battery is replaced and the phone is checked so charging and core battery behavior are working as expected.',
  },
  {
    title: 'Get your phone back ready to use',
    description:
      'Once the repair is done, you get a phone that is easier to rely on through the day again.',
  },
];

const batteryFaqs = [
  {
    question: 'How do I know if I need a new iPhone battery?',
    answer:
      'Fast battery drain, low battery health, unexpected shutdowns, or overheating during normal use can all be signs that it is worth checking.',
  },
  {
    question: 'Will a battery replacement improve performance?',
    answer:
      'It can help if the phone has been slowing down or shutting off because the battery is no longer performing reliably.',
  },
  {
    question: 'How long does iPhone battery replacement take?',
    answer:
      'Many battery replacements can be completed the same day, depending on the model and the condition of the phone.',
  },
  {
    question: 'Can I get a quote first?',
    answer:
      'Yes. You can contact us with your iPhone model and symptoms so we can give you a clear next step and quote before any repair begins.',
  },
];

export function IphoneBatteryReplacementPage() {
  return (
    <main>
      <Seo
        title="iPhone Battery Replacement in Irvine | Fast Battery Repair | TrueTech Repair"
        description="Professional iPhone battery replacement in Irvine for devices with fast drain, overheating, or poor battery health. Same-day service available."
        canonical={`${siteConfig.siteUrl}/iphone-battery-replacement-irvine`}
      />

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-emerald-300 uppercase">
                Battery Replacement Service
              </p>
              <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                iPhone Battery Replacement in Irvine
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
                If your iPhone battery drains too fast, health is low, the phone overheats, or it
                shuts off unexpectedly, TrueTech Repair offers a clear local path to battery
                replacement in Irvine with same-day help when the repair is a good fit.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
                >
                  <MessageSquare className="h-5 w-5" />
                  Request a Battery Quote
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <h2 className="mb-6 text-2xl font-bold text-white">Battery Symptoms We Check</h2>
              <div className="space-y-4">
                {batterySymptoms.slice(0, 4).map((symptom) => {
                  const Icon = symptom.icon;

                  return (
                    <div
                      key={symptom.title}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/20 p-4"
                    >
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="mb-1 font-semibold text-white">{symptom.title}</p>
                        <p className="text-sm leading-relaxed text-slate-300">
                          {symptom.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Signs It May Be Time for a Battery Replacement
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Battery problems usually build gradually. The phone may still work, but the daily
              experience becomes harder to trust because battery life and performance no longer feel
              normal.
            </p>
          </div>

          <div className="divide-y divide-gray-200 rounded-3xl border border-gray-200 bg-gray-50">
            {batterySymptoms.map((symptom) => {
              const Icon = symptom.icon;

              return (
                <div key={symptom.title} className="grid gap-4 p-6 md:grid-cols-[56px_1fr] md:p-8">
                  <div
                    aria-hidden="true"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{symptom.title}</h3>
                    <p className="max-w-3xl leading-relaxed text-gray-600">{symptom.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm sm:p-10">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-emerald-600 uppercase">
                Why It Helps
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Why Battery Replacement Can Help
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Replacing an aging battery can make the phone feel easier to rely on again,
                especially if the main problem is short battery life, random shutdowns, or needing
                to charge much more often than before.
              </p>
              <div className="space-y-4">
                {batteryBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="leading-relaxed text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-10">
              <h3 className="mb-4 text-2xl font-bold">A practical alternative to replacing the phone</h3>
              <p className="leading-relaxed text-slate-300">
                If the phone still does what you need and the main problem is battery life, a
                replacement can be a more reasonable next step than jumping into a full upgrade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-3xl bg-emerald-50 p-8 shadow-sm sm:p-10">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase">
                Battery Quality & Pricing
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Clear Battery Options, Clear Quote
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-gray-700">
                Battery replacement questions are usually straightforward: is the battery the real
                problem, what kind of replacement makes sense, and what will the repair cost before
                you commit?
              </p>
              <p className="leading-relaxed text-gray-700">
                We keep that conversation simple so you can understand the replacement and the
                price before deciding whether to move forward.
              </p>
            </div>

            <div className="space-y-5">
              {batteryQualityAndPricing.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
                  >
                    <div
                      aria-hidden="true"
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="leading-relaxed text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
              >
                Ask about battery replacement pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-emerald-600 uppercase">
              Simple Process
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              How the Battery Replacement Process Works
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Battery replacement decisions are easier when the process is clear from the start.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {repairSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="leading-relaxed text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Local Battery Replacement Help in Irvine and Nearby Orange County
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                This page is focused on Irvine because that is where many customers start their
                search when battery life becomes unreliable. If you are nearby in Orange County,
                the same quote process can still help you figure out whether battery replacement is
                the right next step.
              </p>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>{siteConfig.address}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/faq"
                className="flex items-center justify-between gap-4 rounded-2xl border border-white bg-white px-5 py-4 font-semibold text-gray-900 transition-colors hover:border-blue-200 hover:text-blue-700"
              >
                Read repair FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/iphone-screen-repair-irvine"
                className="flex items-center justify-between gap-4 rounded-2xl border border-white bg-white px-5 py-4 font-semibold text-gray-900 transition-colors hover:border-blue-200 hover:text-blue-700"
              >
                Looking for screen repair instead?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Battery Replacement Questions</h2>
            <p className="text-lg leading-relaxed text-slate-300">
              These are some of the most common questions people ask when they are trying to decide
              if a worn battery is the reason their iPhone no longer lasts through the day.
            </p>
          </div>

          <div className="space-y-4">
            {batteryFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-white">{faq.question}</h3>
                <p className="leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-20 text-slate-950">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-emerald-950 uppercase">
              Ready for a Better Battery?
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Get a Quote for iPhone Battery Replacement
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-emerald-950/80">
              If your iPhone battery life is no longer reliable, contact TrueTech Repair for the
              next step. We can help you understand whether battery replacement makes sense and
              what the repair will look like before you commit.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-slate-800"
              >
                <MessageSquare className="h-5 w-5" />
                Request a Quote
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-slate-950/20 bg-white px-8 py-4 text-lg font-bold text-slate-950 transition hover:bg-slate-100"
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
