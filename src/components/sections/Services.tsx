import { Battery, Search, Smartphone, Zap } from 'lucide-react';
import { services } from '../../data/siteData';

const icons = [Smartphone, Battery, Zap, Search];

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Phone Repair Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            From cracked screens to battery issues, we fix all major smartphone problems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = icons[idx];

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-shadow hover:border-blue-100 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
