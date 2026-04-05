import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/sections/ContactSection';
import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

const primaryActions = [
  {
    title: 'Call Now',
    description:
      'Best if you want a quick answer about pricing, timing, or whether the repair sounds straightforward.',
    href: siteConfig.phoneHref,
    icon: Phone,
    tone: 'primary',
  },
  {
    title: 'Text for a Quote',
    description:
      'A simple option if you want to send the device model, issue, or a quick photo before deciding.',
    href: siteConfig.smsHref,
    icon: MessageSquare,
    tone: 'secondary',
  },
  {
    title: 'Request a Repair Quote',
    description:
      'Use the contact form if you want to send your details and the repair issue in one place.',
    href: '#quote',
    icon: Send,
    tone: 'light',
  },
];

const whatToSend = [
  'Your device model if you know it',
  'What issue is happening, such as screen damage, battery trouble, charging problems, or iPad repair needs',
  'What the device is doing or what changed',
  'A photo if it helps explain the problem more clearly',
];

const responsePoints = [
  'Call or text during business hours for the fastest response',
  'Quote requests are reviewed as quickly as possible',
  'After-hours messages are still welcome and can be answered when available',
  'Same-day help may be available depending on the repair and schedule',
];

export function ContactPage() {
  return (
    <main>
      <Seo
        title="Contact TrueTech Repair | Phone Repair Quote in Irvine"
        description="Contact TrueTech Repair for a repair quote in Irvine and nearby Orange County. Call, text, or send your device issue to get the next step."
        canonical={`${siteConfig.siteUrl}/contact`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
              Quotes, Questions, and Repair Help
            </p>
            <h1 className="mb-5 text-4xl font-bold text-gray-900 sm:text-5xl">
              Contact TrueTech Repair
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
              Call, text, or request a quote for screen damage, battery issues, iPad repair, or
              mobile repair help in Irvine and nearby Orange County. If you are not sure exactly
              what failed, you can still reach out with the model and symptoms.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Choose the easiest way to reach us</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              The goal is to make the next step simple, whether you want an immediate answer or a
              quote request you can send in a few minutes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {primaryActions.map((action) => {
              const Icon = action.icon;
              const isPrimary = action.tone === 'primary';
              const isSecondary = action.tone === 'secondary';

              return (
                <a
                  key={action.title}
                  href={action.href}
                  className={`rounded-[2rem] border p-7 shadow-sm transition ${
                    isPrimary
                      ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                      : isSecondary
                        ? 'border-slate-900 bg-slate-900 text-white hover:bg-slate-800'
                        : 'border-slate-200 bg-white text-gray-900 hover:border-blue-300'
                  }`}
                >
                  <div
                    className={`mb-5 inline-flex rounded-2xl p-3 ${
                      isPrimary
                        ? 'bg-white/15 text-white'
                        : isSecondary
                          ? 'bg-white/10 text-blue-200'
                          : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{action.title}</h3>
                  <p
                    className={`mb-5 leading-relaxed ${
                      isPrimary || isSecondary ? 'text-white/85' : 'text-gray-600'
                    }`}
                  >
                    {action.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-semibold">
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
                What to Send Us
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                A few details can help us give you a faster next step
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                You do not need to diagnose the exact failed part before contacting us. If you can
                tell us the model and what the device is doing, that is usually enough to start.
              </p>
              <div className="space-y-4">
                {whatToSend.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="leading-relaxed text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-8 shadow-sm">
                <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-700 uppercase">
                  Local Contact Context
                </p>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  Local help for Irvine and nearby Orange County
                </h3>
                <p className="mb-4 leading-relaxed text-gray-700">
                  The contact process is built for local customers who want a clear quote, a quick
                  answer, or help figuring out whether mobile repair is available for the job.
                </p>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-700" />
                  <span>{siteConfig.address}</span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
                  Helpful Links
                </p>
                <div className="space-y-3">
                  <Link
                    to="/faq"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-gray-900 transition hover:border-blue-300 hover:text-blue-700"
                  >
                    Read common repair questions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/mobile-phone-repair-irvine"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-gray-900 transition hover:border-blue-300 hover:text-blue-700"
                  >
                    Learn about mobile repair
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/ipad-repair-irvine"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-gray-900 transition hover:border-blue-300 hover:text-blue-700"
                  >
                    Review iPad repair help
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
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl sm:p-10">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
                Response & Availability
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Clear expectations help the process move faster
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                Some customers want an immediate answer, while others want to send the details and
                wait for the right next step. Either way, we try to keep the process clear and practical.
              </p>
              <div className="space-y-4">
                {responsePoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <p className="leading-relaxed text-slate-200">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
                Best First Message
              </p>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Keep it simple: model, problem, and what the device is doing
              </h3>
              <p className="mb-5 leading-relaxed text-gray-600">
                You do not need perfect repair language. A short message like “iPhone 14 battery
                drains fast” or “iPad not charging after cable is plugged in” is enough to get the
                conversation moving.
              </p>
              <p className="leading-relaxed text-gray-600">
                If you already know you need <Link to="/iphone-screen-repair-irvine" className="font-medium text-blue-600 hover:text-blue-700">screen repair</Link> or{' '}
                <Link to="/iphone-battery-replacement-irvine" className="font-medium text-blue-600 hover:text-blue-700">battery replacement</Link>,
                you can mention that too, but it is not required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        eyebrow="Request a Repair Quote"
        title="Send Your Device and Issue"
        description="Use the form if you want to send your contact information, device model, and repair details in one place. We can review it and point you to the best next step."
        submitLabel="Request a Repair Quote"
        issuePlaceholder="Example: iPhone 13 screen is cracked, or iPad is not charging and I want to know the next step."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
            Not Sure What Repair You Need Yet?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Start with the model and symptoms
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            If you are unsure whether the problem is the screen, battery, charging port, or
            something else, you can still call, text, or request a quote and we can help you sort
            out the next step.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.smsHref}
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <MessageSquare className="h-5 w-5" />
              Text for a Quote
            </a>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-lg font-bold text-gray-900 transition hover:border-blue-300 hover:text-blue-700"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
