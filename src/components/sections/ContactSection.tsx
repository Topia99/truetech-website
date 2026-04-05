import { MessageSquareText, PhoneCall, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { siteConfig } from '../../config/site';

type ContactFormValues = {
  name: string;
  phoneNumber: string;
  deviceModel: string;
  issue: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

type ContactSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  issuePlaceholder?: string;
};

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meerykdk';

const initialValues: ContactFormValues = {
  name: '',
  phoneNumber: '',
  deviceModel: '',
  issue: '',
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = 'Please enter your phone number.';
  }

  if (!values.issue.trim()) {
    errors.issue = 'Please tell us what is wrong with your device.';
  }

  return errors;
}

export function ContactSection({
  eyebrow = 'Ready to Start?',
  title = 'Get a Free Quote',
  description = "Tell us what is happening with your device and how to reach you. We'll help you figure out the best next step as quickly as possible.",
  submitLabel = 'Request a Quote',
  issuePlaceholder = 'Example: iPhone screen is cracked and the touch is not responding.',
}: ContactSectionProps) {
  const [formValues, setFormValues] = useState<ContactFormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  async function submitQuoteRequest(values: ContactFormValues) {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        phone: values.phoneNumber,
        deviceModel: values.deviceModel,
        issue: values.issue,
      }),
    });

    if (!response.ok) {
      throw new Error('Formspree request failed');
    }
  }

  function handleFieldChange(field: keyof ContactFormValues, value: string) {
    setFormValues((current) => ({ ...current, [field]: value }));
    setFormErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError(null);
    setIsSuccess(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validate(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setIsSuccess(false);

    try {
      await submitQuoteRequest(formValues);
      setIsSuccess(true);
      setFormErrors({});
      setFormValues(initialValues);
    } catch {
      setSubmitError('Something went wrong. Please try again or contact us directly.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="quote" className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10 sm:p-10">
            <div className="mb-8 max-w-xl">
              <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
                {eyebrow}
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
              <p className="text-lg leading-relaxed text-slate-300">{description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <PhoneCall className="mb-3 h-6 w-6 text-blue-300" />
                <p className="mb-1 text-sm font-semibold text-white">Call Us</p>
                <a href={siteConfig.phoneHref} className="text-sm text-slate-300 hover:text-white">
                  {siteConfig.phoneNumber}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <MessageSquareText className="mb-3 h-6 w-6 text-blue-300" />
                <p className="mb-1 text-sm font-semibold text-white">Text Us</p>
                <a href={siteConfig.smsHref} className="text-sm text-slate-300 hover:text-white">
                  {siteConfig.smsNumber}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <ShieldCheck className="mb-3 h-6 w-6 text-blue-300" />
                <p className="mb-1 text-sm font-semibold text-white">Need More Info?</p>
                <Link to="/faq" className="text-sm text-slate-300 hover:text-white">
                  Review common repair questions
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 sm:p-10">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-gray-900">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formValues.name}
                  onChange={(event) => handleFieldChange('name', event.target.value)}
                  aria-invalid={Boolean(formErrors.name)}
                  aria-describedby={formErrors.name ? 'contact-name-error' : undefined}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="Your name"
                />
                {formErrors.name && (
                  <p id="contact-name-error" className="mt-2 text-sm text-red-600">
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  value={formValues.phoneNumber}
                  onChange={(event) => handleFieldChange('phoneNumber', event.target.value)}
                  aria-invalid={Boolean(formErrors.phoneNumber)}
                  aria-describedby={formErrors.phoneNumber ? 'contact-phone-error' : undefined}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder={siteConfig.phoneNumber}
                />
                {formErrors.phoneNumber && (
                  <p id="contact-phone-error" className="mt-2 text-sm text-red-600">
                    {formErrors.phoneNumber}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-device-model"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Device Model
                </label>
                <input
                  id="contact-device-model"
                  name="deviceModel"
                  type="text"
                  value={formValues.deviceModel}
                  onChange={(event) => handleFieldChange('deviceModel', event.target.value)}
                  aria-invalid={Boolean(formErrors.deviceModel)}
                  aria-describedby={
                    formErrors.deviceModel ? 'contact-device-model-error' : undefined
                  }
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="Example: iPhone 14 Pro or iPad Air"
                />
                {formErrors.deviceModel && (
                  <p id="contact-device-model-error" className="mt-2 text-sm text-red-600">
                    {formErrors.deviceModel}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-issue" className="mb-2 block text-sm font-semibold text-gray-900">
                  Issue
                </label>
                <textarea
                  id="contact-issue"
                  name="issue"
                  rows={6}
                  value={formValues.issue}
                  onChange={(event) => handleFieldChange('issue', event.target.value)}
                  aria-invalid={Boolean(formErrors.issue)}
                  aria-describedby={formErrors.issue ? 'contact-issue-error' : undefined}
                  className="min-h-36 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder={issuePlaceholder}
                />
                {formErrors.issue && (
                  <p id="contact-issue-error" className="mt-2 text-sm text-red-600">
                    {formErrors.issue}
                  </p>
                )}
              </div>

              {submitError && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}

              {isSuccess && (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  Thanks! We got your request and will reach out shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
              >
                {isSubmitting ? 'Submitting...' : submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
