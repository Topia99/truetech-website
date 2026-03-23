import { Star } from 'lucide-react';
import { review } from '../../data/siteData';

export function Reviews() {
  return (
    <section id="reviews" className="bg-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
          Trusted by Customers in Irvine
        </h2>

        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl shadow-blue-900/5">
          <div className="mb-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <blockquote className="mb-8 text-xl leading-relaxed font-medium text-gray-700 italic md:text-2xl">
            "{review.quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-500">
              {review.initials}
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">{review.author}</p>
              <p className="text-sm text-gray-500">{review.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
