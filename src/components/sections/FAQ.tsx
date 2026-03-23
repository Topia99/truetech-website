import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../../data/siteData';

export function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-gray-400" />
                  )}
                </button>

                <div className={`px-6 pb-6 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
