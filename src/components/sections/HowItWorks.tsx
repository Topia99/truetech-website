import { steps } from '../../data/siteData';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-16 text-3xl font-bold text-gray-900 md:text-4xl">How It Works</h2>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="absolute top-1/2 left-0 z-0 hidden h-0.5 w-full -translate-y-1/2 bg-gray-100 md:block" />

          {steps.map((item) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/30 ring-4 ring-white">
                {item.step}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
