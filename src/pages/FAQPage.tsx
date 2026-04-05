import { ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Seo } from '../seo/Seo';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqGroup = {
  id: string;
  title: string;
  description: string;
  items: readonly FaqItem[];
};

const faqGroups: readonly FaqGroup[] = [
  {
    id: 'quotes-pricing',
    title: 'Quotes & Pricing',
    description: 'Quick answers about quotes, pricing, and asking questions before you decide.',
    items: [
      {
        question: 'Can I get a quote before repair?',
        answer:
          'Yes. You can contact TrueTech Repair with the device model and the issue you are noticing so we can explain the likely next step and quote before repair begins.',
      },
      {
        question: 'Does the repair price depend on the device model?',
        answer:
          'Yes. Pricing can vary based on the phone or tablet model and the type of repair involved, which is why sharing the model first is helpful.',
      },
      {
        question: 'Can I ask questions before deciding?',
        answer:
          'Absolutely. Many customers reach out first because they want to understand the repair, the quote, or whether the service sounds like the right fit before moving forward.',
      },
    ],
  },
  {
    id: 'repair-time',
    title: 'Repair Time',
    description: 'What to expect around timing, same-day help, and urgent repair situations.',
    items: [
      {
        question: 'How long does repair usually take?',
        answer:
          'That depends on the device, the issue, and parts availability. Many common repairs can be handled the same day when the repair is straightforward and the needed parts are available.',
      },
      {
        question: 'Is same-day service available?',
        answer:
          'Same-day service may be available for certain repairs. The best way to confirm is to contact us with the device model and problem so we can tell you what is realistic.',
      },
      {
        question: 'What if I need help quickly?',
        answer:
          'Reach out as soon as you can by phone, text, or through the contact page. We can let you know the fastest practical option based on the repair and the current schedule.',
      },
    ],
  },
  {
    id: 'mobile-service',
    title: 'Mobile Service',
    description: 'Answers about onsite repair, convenience, and when mobile service makes sense.',
    items: [
      {
        question: 'Do you offer mobile repair in Irvine?',
        answer:
          'Yes, mobile repair may be available in Irvine when the repair and service situation are a good fit. You can review the [mobile repair page](/mobile-phone-repair-irvine) or contact us directly to confirm the best option.',
      },
      {
        question: 'What kinds of issues are a good fit for mobile repair?',
        answer:
          'Customers often ask about mobile service for common repairs like screen or battery-related issues, but not every repair always fits an onsite setup. The model and problem still need to be confirmed first.',
      },
      {
        question: 'Do I need to know exactly what is wrong first?',
        answer:
          'No. If you only know the symptoms, that is still enough to start. Sharing the model and what the device is doing is usually enough for us to help you figure out the next step.',
      },
    ],
  },
  {
    id: 'iphone-screen-repair',
    title: 'iPhone Screen Repair',
    description: 'Common questions about cracked glass, display issues, and touch response.',
    items: [
      {
        question: 'Can you help with a cracked screen?',
        answer:
          'Yes. If your iPhone screen is cracked or shattered, we can help you understand the repair options and what the process will likely involve. The [screen repair page](/iphone-screen-repair-irvine) has more detail if that is your main issue.',
      },
      {
        question: 'What if the screen still works but is damaged?',
        answer:
          'That is still worth checking. A screen can remain partly usable while cracks, impact damage, or display issues continue to get worse over time.',
      },
      {
        question: 'What if the touch does not respond correctly?',
        answer:
          'Touch problems can be a sign that the screen assembly is affected even if the phone still turns on. Describe what the phone is doing and we can help you figure out the likely repair path.',
      },
    ],
  },
  {
    id: 'battery-replacement',
    title: 'Battery Replacement',
    description: 'Practical answers about battery symptoms, performance, and when replacement may help.',
    items: [
      {
        question: 'How do I know if I need a battery replacement?',
        answer:
          'Fast battery drain, weak battery life, overheating during normal use, or unexpected shutdowns can all be signs that the battery is worth checking.',
      },
      {
        question: 'Will a new battery improve performance?',
        answer:
          'It can help when the current battery is contributing to poor day-to-day reliability, shorter battery life, or inconsistent performance. The [battery replacement page](/iphone-battery-replacement-irvine) explains that process in more detail.',
      },
      {
        question: 'What if the phone overheats or drains too fast?',
        answer:
          'Those are common reasons customers ask about battery replacement. Reach out with the phone model and symptoms so we can help you understand whether that sounds like the right next step.',
      },
    ],
  },
  {
    id: 'ipad-repair',
    title: 'iPad Repair',
    description: 'Answers for customers asking about broader iPad issues, not just one repair type.',
    items: [
      {
        question: 'What types of iPad problems do you handle?',
        answer:
          'We help with several common iPad issues including screen damage, battery concerns, charging problems, touch issues, display trouble, and broader repair questions. The [iPad repair page](/ipad-repair-irvine) covers that service more fully.',
      },
      {
        question: 'Can you help if the iPad is not charging?',
        answer:
          'Yes. Charging problems are one of the common reasons customers contact us about an iPad. Sharing the model and what the device is doing can help us narrow down the likely next step.',
      },
      {
        question: 'Can I contact you even if I am not sure what failed?',
        answer:
          'Yes. Many customers start by describing symptoms rather than the exact failed part. That is completely fine and often the best way to get clear guidance.',
      },
    ],
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'What to send, what to mention, and the easiest way to start the conversation.',
    items: [
      {
        question: 'What should I tell you when I contact you?',
        answer:
          'The most helpful details are the device model, the main issue, and any symptoms you have noticed such as cracked glass, charging trouble, fast battery drain, or touch problems.',
      },
      {
        question: 'Do I need the exact model?',
        answer:
          'It helps if you have it, but if you do not, you can still contact us and explain what device you have as best you can. We can usually guide the conversation from there.',
      },
      {
        question: 'What is the best way to get started?',
        answer:
          'The easiest next step is to use the [contact page](/contact), send a text, or call with the device and issue. That lets us help you quickly understand the repair path, quote, and timing.',
      },
    ],
  },
];

function AnswerContent({ answer }: { answer: string }) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: Array<{ type: 'text' | 'link'; value: string; href?: string }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(answer)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: answer.slice(lastIndex, match.index) });
    }

    parts.push({ type: 'link', value: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < answer.length) {
    parts.push({ type: 'text', value: answer.slice(lastIndex) });
  }

  return (
    <p className="leading-relaxed text-gray-600">
      {parts.map((part, index) =>
        part.type === 'link' ? (
          <Link
            key={`${part.value}-${index}`}
            to={part.href ?? '/'}
            className="font-medium text-blue-600 transition-colors hover:text-blue-700"
          >
            {part.value}
          </Link>
        ) : (
          <span key={`${part.value}-${index}`}>{part.value}</span>
        ),
      )}
    </p>
  );
}

export function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'quotes-pricing-0': true,
  });

  function toggleItem(groupId: string, index: number) {
    const key = `${groupId}-${index}`;
    setOpenItems((current) => ({
      ...current,
      [key]: !current[key],
    }));
  }

  return (
    <main>
      <Seo
        title="Phone Repair FAQ in Irvine | Quotes, Timing & Mobile Service | TrueTech Repair"
        description="Read grouped phone repair FAQs in Irvine about quotes, repair time, mobile service, screen repair, battery replacement, iPad repair, and how to get started."
        canonical={`${siteConfig.siteUrl}/faq`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
              Help & Answers
            </p>
            <h1 className="mb-5 text-4xl font-bold text-gray-900 sm:text-5xl">
              Phone Repair FAQ in Irvine
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
              Find quick answers about repair quotes, timing, mobile service, and common iPhone or
              iPad issues before you contact us.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Topic</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {faqGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                {group.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
              >
                <div className="mb-6 max-w-3xl">
                  <h2 className="mb-2 text-3xl font-bold text-gray-900">{group.title}</h2>
                  <p className="leading-relaxed text-gray-600">{group.description}</p>
                </div>

                <div className="space-y-4">
                  {group.items.map((item, index) => {
                    const itemKey = `${group.id}-${index}`;
                    const isOpen = Boolean(openItems[itemKey]);

                    return (
                      <div
                        key={item.question}
                        className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
                      >
                        <button
                          onClick={() => toggleItem(group.id, index)}
                          className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none sm:p-6"
                          aria-expanded={isOpen}
                        >
                          <span className="text-lg font-bold text-gray-900">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 shrink-0 text-blue-600" />
                          ) : (
                            <ChevronDown className="h-5 w-5 shrink-0 text-gray-400" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                            <AnswerContent answer={item.answer} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
              Still Have Questions?
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contact TrueTech Repair</h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-300">
              If you want a quote or just need help figuring out the next step, send us your
              device model and the issue you are noticing and we can help from there.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                <MessageSquare className="h-5 w-5" />
                Request a Quote
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
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
