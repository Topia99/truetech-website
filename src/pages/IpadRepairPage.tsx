import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  PlugZap,
  ShieldCheck,
  Tablet,
  TestTubeDiagonal,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

const repairCategories = [
  {
    title: 'iPad screen repair',
    description:
      'Help for cracked glass, impact damage, broken front panels, and screen assemblies that need the right repair path for the model.',
    icon: Tablet,
    points: ['Cracked or shattered front glass', 'Visible damage after a drop', 'Screen replacement for supported models'],
  },
  {
    title: 'Battery-related issues',
    description:
      'Support for iPads that drain too quickly, struggle to hold charge, or no longer feel dependable through normal daily use.',
    icon: BatteryCharging,
    points: ['Battery draining faster than expected', 'Reduced battery life through the day', 'Battery repair guidance before replacing the device'],
  },
  {
    title: 'Charging and power issues',
    description:
      'Inspection and repair options when an iPad is not charging properly, only charges at certain angles, or has trouble powering on.',
    icon: PlugZap,
    points: ['iPad not charging consistently', 'Power button or startup concerns', 'Charging port and power-path troubleshooting'],
  },
  {
    title: 'Touch, display, and hardware concerns',
    description:
      'Coverage for touch response problems, display issues, and other general hardware concerns that make the iPad harder to use.',
    icon: MonitorSmartphone,
    points: ['Touch not responding correctly', 'Display lines, dark spots, or flicker', 'General iPad hardware repair questions'],
  },
];

const commonProblems = [
  'Cracked or shattered iPad screen',
  'Touch not responding in parts of the display',
  'Battery draining too fast during normal use',
  'iPad not charging properly or charging slowly',
  'Black spots, lines, flickering, or display discoloration',
  'Device not turning on or staying powered on',
  'Loose charging connection or port-related issues',
  'General wear that makes the iPad hard to rely on',
];

const serviceIncludes = [
  {
    title: 'Device inspection',
    description:
      'We start by understanding the model, the symptoms, and whether the issue looks screen-related, battery-related, charging-related, or something broader.',
    icon: ClipboardList,
  },
  {
    title: 'Repair recommendation',
    description:
      'Before repair begins, we explain the likely issue and the repair path that makes the most sense for that specific iPad problem.',
    icon: Wrench,
  },
  {
    title: 'Quote clarity',
    description:
      'You can get pricing and ask questions first so the next step feels clear before any repair work moves forward.',
    icon: CreditCard,
  },
  {
    title: 'Testing before return',
    description:
      'After the repair, key functions such as display response, charging behavior, or basic operation are checked before the iPad goes back to you.',
    icon: TestTubeDiagonal,
  },
];

const trustRows = [
  'Local Irvine service with a straightforward contact process',
  'Help across multiple common iPad issues, not just one symptom',
  'Quote provided before repair starts',
  'Same-day help when the repair and parts situation make it appropriate',
];

const ipadFaqs = [
  {
    question: 'What kinds of iPad problems do you repair?',
    answer:
      'We help with common iPad repair needs including cracked screens, battery concerns, charging issues, touch problems, display issues, and other general hardware-related problems.',
  },
  {
    question: 'Can you repair a cracked iPad screen?',
    answer:
      'Yes. If the screen is cracked or shattered, we can review the model and the damage to explain the repair options and the right next step.',
  },
  {
    question: 'Can you help if the iPad is not charging?',
    answer:
      'Yes. Charging issues are one of the common reasons customers reach out. We can help identify whether the problem appears related to the charging port, battery, power behavior, or another issue.',
  },
  {
    question: 'Do you provide a quote before repair?',
    answer:
      'Yes. The goal is to make pricing and repair scope clear before any work begins so you can decide comfortably.',
  },
  {
    question: 'How long does iPad repair usually take?',
    answer:
      'Timing depends on the iPad model, the issue, and parts availability, but many common repairs can be discussed quickly and may qualify for same-day service when appropriate.',
  },
  {
    question: 'Can I contact you first to explain the issue?',
    answer:
      'Absolutely. Calling, texting, or using the contact form is a good way to describe the problem first so we can point you toward the best next step.',
  },
];

export function IpadRepairPage() {
  return (
    <main>
      <Seo
        title="iPad Repair in Irvine | Screen, Battery & Charging Help | TrueTech Repair"
        description="Trusted iPad repair in Irvine for screen damage, battery concerns, charging issues, touch problems, and general iPad hardware repair. Get a clear quote before repair begins."
        canonical={`${siteConfig.siteUrl}/ipad-repair-irvine`}
      />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#143b63_48%,#dff4ea_100%)] py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_38%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-white/5 blur-3xl lg:block" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-emerald-200 uppercase">
              Local iPad Service Coverage
            </p>
            <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              iPad Repair in Irvine
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl">
              TrueTech Repair helps with common iPad problems including cracked screens, charging
              issues, battery concerns, touch or display problems, and general repair needs when
              you want a clear next step.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-lg transition hover:bg-slate-100"
              >
                <MessageSquare className="h-5 w-5" />
                Get an iPad Repair Quote
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call for iPad Help
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">
              What We Repair on iPad
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What We Help With on iPad
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
              We help with several common iPad issues, including cracked screens, battery
              problems, charging issues, and touch or display concerns. Some customers already know
              they need iPad screen repair, while others only know the device is not charging, the
              battery is draining too fast, or the display is not responding normally.
            </p>
          </div>

          <div className="rounded-[2rem] border border-sky-100 bg-sky-50 p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">How to get started</h3>
            <p className="mb-6 leading-relaxed text-gray-700">
              If you are not sure whether the issue is the screen, battery, charging port, or
              something else, you can still reach out with the iPad model and the symptoms you are
              noticing. We can help you understand the most likely next step before repair begins.
            </p>
            <div className="space-y-4">
              <Link
                to="/contact"
                className="flex items-center justify-between rounded-2xl border border-sky-100 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-sky-300 hover:text-sky-700"
              >
                Contact us about your iPad
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/faq"
                className="flex items-center justify-between rounded-2xl border border-sky-100 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-sky-300 hover:text-sky-700"
              >
                Read repair FAQs
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {repairCategories.map((category, index) => {
              const Icon = category.icon;
              const isEmphasized = index % 2 === 0;

              return (
                <div
                  key={category.title}
                  className={`grid gap-6 rounded-[2rem] border p-7 shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:items-start ${
                    isEmphasized
                      ? 'border-slate-200 bg-slate-50'
                      : 'border-emerald-100 bg-emerald-50/70'
                  }`}
                >
                  <div>
                    <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-sky-700 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="max-w-2xl leading-relaxed text-gray-600">{category.description}</p>
                  </div>

                  <div className="rounded-3xl border border-white/70 bg-white/80 p-6">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase">
                      Common examples
                    </p>
                    <div className="space-y-3">
                      {category.points.map((point) => (
                        <div key={point} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                          <p className="leading-relaxed text-gray-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">
              Common iPad Problems We Help With
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Common issues customers bring in or contact us about
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Some problems are obvious right away, while others are easier to describe as a
              pattern. These are some of the common iPad repair concerns we hear most often.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
            {commonProblems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-3 border-b border-slate-100 py-3 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="mt-1 rounded-full bg-sky-100 p-2 text-sky-700">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <p className="leading-relaxed text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">
                What the Repair Service May Include
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                A practical repair process instead of guesswork
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                iPad issues can overlap. A cracked screen may come with touch problems. Charging
                trouble may also feel like a battery issue. This part of the process is about
                getting clarity before the repair moves ahead.
              </p>
            </div>

            <div className="relative rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <div className="absolute bottom-0 left-8 top-8 hidden w-px bg-slate-200 md:block" />
              <div className="space-y-6">
                {serviceIncludes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="relative grid gap-4 md:grid-cols-[56px_1fr]">
                      <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="rounded-3xl border border-white bg-white p-6 shadow-sm">
                        <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="leading-relaxed text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ecfeff_0%,#ffffff_100%)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl sm:p-10">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-emerald-300 uppercase">
                Why Customers Contact TrueTech
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                iPad service that stays clear from first message to finished repair
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                Many customers are not looking for a dramatic sales pitch. They want to know if
                their iPad problem is something worth bringing in, what the likely repair path is,
                and whether the quote will be clear before the work begins.
              </p>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-emerald-300" />
                  <p className="leading-relaxed text-slate-200">
                    The goal is simple: make it easy for Irvine customers to understand repair
                    coverage, ask questions, and decide on the right next step without confusion.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {trustRows.map((row) => (
                <div
                  key={row}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="leading-relaxed text-gray-700">{row}</p>
                </div>
              ))}

              <div className="rounded-3xl border border-sky-100 bg-sky-50 p-6 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase">
                  Related service links
                </p>
                <div className="mt-4 space-y-3">
                  <Link
                    to="/iphone-screen-repair-irvine"
                    className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 font-semibold text-gray-900 transition hover:text-sky-700"
                  >
                    iPhone screen repair
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/iphone-battery-replacement-irvine"
                    className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 font-semibold text-gray-900 transition hover:text-sky-700"
                  >
                    iPhone battery replacement
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">
                Local Service Area
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                iPad repair help for Irvine and nearby Orange County
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                This page is written for customers searching for iPad repair in Irvine, but the
                same service process can also help nearby Orange County customers who want a clear
                quote and a straightforward explanation of the repair scope.
              </p>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-sky-700" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">
              iPad FAQ
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Questions about iPad repair in Irvine
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              These are some of the most common questions people ask when they are trying to
              figure out whether their iPad problem is something they should bring in or contact us
              about first.
            </p>
          </div>

          <div className="space-y-4">
            {ipadFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-700 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-sky-100 uppercase">
              Need Help With Your iPad?
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Contact TrueTech Repair for iPad Service
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-sky-50">
              If your iPad has screen damage, battery trouble, charging issues, or a problem you
              want help identifying, reach out for a clear next step and a quote before repair
              begins.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-sky-800 shadow-lg transition hover:bg-slate-100"
              >
                <MessageSquare className="h-5 w-5" />
                Get a Quote for iPad Repair
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
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
