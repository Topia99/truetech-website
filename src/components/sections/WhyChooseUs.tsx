import { Award, CheckCircle, Clock, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { cities, whyChooseUs } from '../../data/siteData';

const icons = [Award, ShieldCheck, Clock];

export function WhyChooseUs() {
  return (
    <>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Why Choose {siteConfig.businessName}
              </h2>
              <p className="mb-4 text-lg text-gray-600">
                We provide fast, affordable, and reliable phone repair services in Irvine.
              </p>
              <p className="mb-10 text-lg text-gray-600">
                Our goal is to get your device back to perfect condition as quickly as possible.
              </p>

              <div className="space-y-8">
                {whyChooseUs.map((item, idx) => {
                  const Icon = icons[idx];

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="mt-1 shrink-0">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-xl font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative w-full lg:w-1/2">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-slate-200 shadow-2xl">
                <div className="absolute inset-0 bg-blue-600/5" />
                <Smartphone className="h-48 w-48 text-blue-600/20" />
                <div className="absolute right-6 bottom-6 left-6 rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-3">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Repair Status</p>
                      <p className="text-lg font-bold text-gray-900">100% Guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Serving Irvine and Nearby Areas
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            We provide phone repair services across Irvine and Orange County, including:
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city) => (
              <div
                key={city}
                className="flex cursor-default items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-6 py-3 font-medium text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                <MapPin className="h-4 w-4 text-blue-500" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
