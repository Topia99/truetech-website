import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle,
  Smartphone,
  Battery,
  Zap,
  Search,
  Award,
  ShieldCheck,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Star,
  Menu,
  X,
} from 'lucide-react';

export default function App() {
  useEffect(() => {
    document.title =
      'Phone Repair in Irvine | iPhone Screen & Battery Replacement | TrueTech';

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    metaDescription.content =
      'Fast and affordable phone repair in Irvine. We fix iPhone screens, batteries, and charging issues with same-day service and warranty.';
  }, []);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      title: 'iPhone Screen Repair',
      desc: 'Cracked or broken screen? We offer fast iPhone screen replacement in Irvine using high-quality parts.',
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Battery Replacement',
      desc: 'Battery draining too fast? Get your phone running like new with a same-day battery replacement.',
      icon: <Battery className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Charging Port Repair',
      desc: 'Phone not charging properly? We fix charging port issues quickly and reliably.',
      icon: <Zap className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Diagnostic Service',
      desc: "Not sure what's wrong? We provide fast diagnostics to identify and fix the issue.",
      icon: <Search className="w-8 h-8 text-blue-600" />,
    },
  ];

  const steps = [
    { step: '1', title: 'Contact Us', desc: 'Call or text us with your phone issue.' },
    { step: '2', title: 'Get a Quote', desc: 'We provide a quick and transparent price estimate.' },
    { step: '3', title: 'Repair', desc: 'Drop off your device or schedule a mobile repair.' },
    { step: '4', title: 'Done', desc: 'Get your phone back fully repaired, often the same day.' },
  ];

  const cities = ['Irvine', 'Tustin', 'Santa Ana', 'Costa Mesa', 'Lake Forest', 'Newport Beach'];

  const faqs = [
    {
      q: 'How long does phone repair take?',
      a: 'Most repairs are completed within the same day.',
    },
    {
      q: 'Do you offer a warranty?',
      a: 'Yes, all repairs come with a warranty depending on the service.',
    },
    {
      q: 'How much does iPhone screen repair cost?',
      a: 'Prices vary by model. Contact us for a quick quote.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-200">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">
                TrueTech <span className="text-blue-600">Repair</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                How It Works
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                FAQ
              </a>
              <a
                href="tel:+"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              How It Works
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              FAQ
            </a>
            <a
              href="tel:+"
              className="mt-4 w-full bg-blue-600 text-white px-3 py-3 rounded-md font-semibold flex justify-center items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        )}
      </nav>

      <main>
        <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Same-Day Phone Repair <br className="hidden sm:block" />
                <span className="text-blue-400">in Irvine</span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 mb-4 font-light">
                Fast and reliable iPhone screen repair, battery replacement, and charging port fixes.
              </p>

              <p className="text-base sm:text-lg text-gray-300 mb-10">
                Serving Irvine and Orange County with same-day service and warranty.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                <a
                  href="tel:+"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>

                <a
                  href="sms:+"
                  className="w-full sm:w-auto bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  Text for Quote
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  Book Repair
                </a>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-sm sm:text-base font-medium text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Same-day service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Warranty included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Serving Irvine &amp; OC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Phone Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From cracked screens to battery issues, we fix all major smartphone problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100 hover:border-blue-100 group"
                >
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose TrueTech Repair
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  We provide fast, affordable, and reliable phone repair services in Irvine.
                </p>
                <p className="text-lg text-gray-600 mb-10">
                  Our goal is to get your device back to perfect condition as quickly as possible.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">Premium Parts</h4>
                      <p className="text-gray-600">
                        We use high-quality replacement parts for every repair.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <ShieldCheck className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">Warranty Included</h4>
                      <p className="text-gray-600">
                        All repairs come with a warranty for your peace of mind.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">Fast Turnaround</h4>
                      <p className="text-gray-600">Most repairs are completed the same day.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-slate-200 rounded-3xl overflow-hidden shadow-2xl relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-600/5"></div>
                  <Smartphone className="w-48 h-48 text-blue-600/20" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Repair Status</p>
                        <p className="text-lg font-bold text-gray-900">100% Guaranteed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

              {steps.map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-600/30 ring-4 ring-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Trusted by Customers in Irvine
            </h2>

            <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl shadow-blue-900/5">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed mb-8">
                “Quick and professional service. My iPhone screen was fixed in less than an
                hour.”
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  JS
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">John S.</p>
                  <p className="text-sm text-gray-500">Irvine Resident</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving Irvine and Nearby Areas
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              We provide phone repair services across Irvine and Orange County, including:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {cities.map((city, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-6 py-3 rounded-full text-gray-700 font-medium hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default"
                >
                  <MapPin className="w-4 h-4 text-blue-500" />
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
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

        <section id="contact" className="py-24 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Need Phone Repair in Irvine?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Contact us today for fast and reliable service.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <a
                href="sms:+"
                className="bg-blue-800 text-white hover:bg-blue-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg border border-blue-700"
              >
                <MessageSquare className="w-5 h-5" />
                Get a Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Smartphone className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-xl text-white">
                TrueTech <span className="text-blue-500">Repair</span>
              </span>
            </div>
            <div className="text-sm">
              &copy; {new Date().getFullYear()} TrueTech Repair. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}