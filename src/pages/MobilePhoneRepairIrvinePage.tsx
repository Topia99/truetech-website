import {
  ArrowRight,
  BatteryCharging,
  CalendarClock,
  CheckCircle2,
  CircleHelp,
  Clock3,
  MapPin,
  MessageSquare,
  Phone,
  PlugZap,
  ShieldCheck,
  Smartphone,
  TimerReset,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { RepairGallery } from '../components/sections/RepairGallery';
import { siteConfig } from '../config/site';
import { mobileRepairGalleryImages } from '../data/mobileRepairGalleryImages';
import { Seo } from '../seo/Seo';

const mobileRepairSteps = [
  {
    step: '01',
    title: 'Tell us the model and the problem',
    description:
      'Call, text, or use the contact form with your phone model and a short description of what is going on, even if you are not fully sure what failed.',
  },
  {
    step: '02',
    title: 'We confirm whether mobile repair is a good fit',
    description:
      'Some repairs work well as a mobile visit, while others may need a different setup. We help you understand the most practical option before anything is scheduled.',
  },
  {
    step: '03',
    title: 'We coordinate the next step',
    description:
      'If mobile service makes sense, we coordinate timing, location, and what to expect so the repair process feels straightforward instead of rushed.',
  },
  {
    step: '04',
    title: 'Repair and testing are completed',
    description:
      'Once the repair is done, core functions are checked so the phone is ready to go back into normal use.',
  },
];

const serviceFitItems = [
  {
    title: 'Busy schedules and limited time',
    description:
      'Mobile repair can make sense when getting across town to a shop is the hardest part of the repair.',
    icon: CalendarClock,
  },
  {
    title: 'Common repairs that can be planned clearly',
    description:
      'If the issue sounds straightforward and mobile service is appropriate, an onsite visit can be the easiest path.',
    icon: Wrench,
  },
  {
    title: 'Local Irvine convenience',
    description:
      'Customers often reach out because they want a local repair option that fits work, school, or home schedules more easily.',
    icon: MapPin,
  },
  {
    title: 'Situations where you want to ask first',
    description:
      'Not every repair always qualifies for mobile service, which is why reaching out first is the best way to confirm the right fit.',
    icon: CircleHelp,
  },
];

const commonMobileIssues = [
  {
    title: 'Screen replacement questions',
    description:
      'Cracked screen repairs are one of the common reasons customers ask whether mobile phone repair in Irvine is available.',
    icon: Smartphone,
  },
  {
    title: 'Battery-related help',
    description:
      'If the phone battery is draining too fast or no longer lasting through the day, we can help you understand whether mobile service makes sense for that repair.',
    icon: BatteryCharging,
  },
  {
    title: 'Charging or power concerns',
    description:
      'Some customers reach out because the phone is not charging correctly, has inconsistent power behavior, or needs a clearer next step.',
    icon: PlugZap,
  },
  {
    title: 'General repair questions',
    description:
      'You do not need to diagnose the exact failed part first. Many customers begin by describing the symptoms and asking whether mobile repair is a good option.',
    icon: MessageSquare,
  },
];

const conveniencePoints = [
  'Less time spent driving across town for a repair appointment',
  'Easier scheduling around work, classes, or family obligations',
  'Direct communication about whether same-day mobile repair is realistic',
  'A simpler repair decision when convenience matters as much as the repair itself',
];

const mobileFaqs = [
  {
    question: 'Do you come to me in Irvine?',
    answer:
      'If mobile service is the right fit for the repair, yes. Contact us with your model and issue first so we can confirm whether an onsite repair makes sense.',
  },
  {
    question: 'What kinds of repairs can be handled through mobile service?',
    answer:
      'That depends on the phone model, the repair type, and the situation. Common issues like screen or battery-related repairs are often what customers ask about first, but it is best to confirm the fit directly.',
  },
  {
    question: 'Do I need to know exactly what is wrong first?',
    answer:
      'No. You can still reach out if you only know the symptoms. Sharing the model and what the phone is doing is usually enough to start the conversation.',
  },
  {
    question: 'Is same-day mobile repair available?',
    answer:
      'Same-day help may be available when the repair is a good fit, timing works, and parts are available. We can confirm that when you contact us.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'You can call, text, or use the contact page to describe the phone model and issue. From there, we can explain the likely next step and pricing.',
  },
  {
    question: 'What if I am not sure whether mobile repair is the right fit?',
    answer:
      'That is a common reason to reach out. We can help you figure out whether mobile repair is practical or whether a different service setup would make more sense.',
  },
];

export function MobilePhoneRepairIrvinePage() {
  return (
    <main>
      <Seo
        title="Mobile Phone Repair in Irvine | Same-Day Onsite Service | TrueTech Repair"
        description="Convenient mobile phone repair in Irvine with same-day help when appropriate. Contact TrueTech Repair to find out if onsite phone repair is the right fit for your device."
        canonical={`${siteConfig.siteUrl}/mobile-phone-repair-irvine`}
      />

      <section className="relative overflow-hidden bg-[linear-gradient(130deg,#082f49_0%,#0f766e_48%,#f4f9ff_100%)] py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_34%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-teal-100 uppercase">
              Local Mobile Repair Service
            </p>
            <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Mobile Phone Repair in Irvine
            </h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-100 sm:text-xl">
              TrueTech Repair offers mobile phone repair in Irvine for customers who want a more
              convenient next step. If same-day onsite help is a good fit for the repair, we can
              help coordinate it, and if you are not fully sure what repair is needed yet, you can
              still reach out to talk it through.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-lg transition hover:bg-slate-100"
              >
                <MessageSquare className="h-5 w-5" />
                Request Mobile Repair Help
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call for Onsite Repair
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-teal-700 uppercase">
              How Mobile Repair Works
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              A clear mobile repair process from first message to finished service
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              The mobile repair process should feel simple. The goal is to help you quickly figure
              out whether onsite phone repair in Irvine is a good fit and what the next step looks
              like before anything is scheduled.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {mobileRepairSteps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RepairGallery
        images={mobileRepairGalleryImages}
        eyebrow="Mobile Repair in Action"
        title="Mobile Repair in Action"
        description="These photos help show the service setup, repair workflow, and the kind of organized mobile repair process customers can expect when onsite service is the right fit."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl sm:p-10">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-teal-300 uppercase">
                When Mobile Repair Makes Sense
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Mobile repair is most helpful when convenience matters and the repair fits the service
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-300">
                Many customers ask about mobile repair because they want help without adding extra
                travel, waiting, or coordination to the day. That said, the best fit depends on
                the phone, the repair, and whether onsite service makes practical sense.
              </p>
              <p className="text-lg leading-relaxed text-slate-300">
                Reaching out first is the easiest way to confirm that fit and avoid guessing.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {serviceFitItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-teal-100 p-3 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-teal-700 uppercase">
                What Issues We Commonly Help With
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Common repair questions customers ask us about for mobile service
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                This page is about the service model, not just one repair type. Customers often
                reach out to ask whether mobile repair can help with a screen issue, battery
                concern, charging problem, or a phone that simply is not working the way it should.
              </p>
            </div>

            <div className="rounded-[2rem] border border-teal-100 bg-teal-50 p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Need a quick next step?</h3>
              <p className="mb-6 leading-relaxed text-gray-700">
                If you already know the repair you need, or just want to describe the symptoms,
                contact us first and we can help you figure out whether mobile service makes sense.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-between rounded-2xl border border-white bg-white px-5 py-4 font-semibold text-gray-900 transition hover:text-teal-700"
                >
                  Get a quote for mobile repair
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/faq"
                  className="flex items-center justify-between rounded-2xl border border-white bg-white px-5 py-4 font-semibold text-gray-900 transition hover:text-teal-700"
                >
                  Read repair FAQs
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            {commonMobileIssues.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:grid-cols-[56px_1fr]"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f0fdfa_0%,#ffffff_100%)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="rounded-[2rem] border border-teal-100 bg-white p-8 shadow-sm sm:p-10">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-teal-700 uppercase">
                Why Customers Choose Mobile Repair
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                The value is not just the repair, it is how much easier the day can feel
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Mobile repair is often about reducing friction. Instead of turning a repair into a
                bigger time commitment, the process can stay focused, local, and easier to fit into
                a normal day.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {conveniencePoints.map((point, index) => {
                const icons = [Clock3, TimerReset, ShieldCheck, CheckCircle2];
                const Icon = icons[index];

                return (
                  <div
                    key={point}
                    className="flex gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="leading-relaxed text-gray-700">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-teal-700 uppercase">
                Local Service Area
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Mobile phone repair for Irvine and nearby Orange County customers
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Because this page is focused on mobile service, local responsiveness matters. Many
                customers start with Irvine, but nearby Orange County customers can also reach out
                to see whether the same mobile repair process is a good fit.
              </p>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-teal-700" />
                <span>{siteConfig.address}</span>
              </div>
            </div>

            <div className="rounded-3xl border border-teal-100 bg-teal-50 p-6">
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-teal-700 uppercase">
                Helpful links
              </p>
              <div className="space-y-3">
                <Link
                  to="/iphone-screen-repair-irvine"
                  className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 font-semibold text-gray-900 transition hover:text-teal-700"
                >
                  iPhone screen repair
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/iphone-battery-replacement-irvine"
                  className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 font-semibold text-gray-900 transition hover:text-teal-700"
                >
                  iPhone battery replacement
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-teal-700 uppercase">
              Mobile Repair FAQ
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Questions about mobile phone repair in Irvine
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              These are some of the most common questions people ask when they want to know whether
              onsite repair is available and how the mobile process works.
            </p>
          </div>

          <div className="space-y-4">
            {mobileFaqs.map((faq) => (
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

      <section className="bg-teal-700 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-teal-100 uppercase">
              Need Mobile Repair in Irvine?
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Get a Quote for Mobile Phone Repair
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-teal-50">
              If you want a more convenient repair option, contact TrueTech Repair to see whether
              onsite service is the right fit for your phone, your issue, and your schedule.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-teal-800 shadow-lg transition hover:bg-slate-100"
              >
                <MessageSquare className="h-5 w-5" />
                Request Mobile Repair Help
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
