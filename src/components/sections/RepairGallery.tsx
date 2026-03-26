type RepairGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type RepairGalleryProps = {
  images: readonly RepairGalleryImage[];
};

export function RepairGallery({ images }: RepairGalleryProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Repair Photo Gallery
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            A few examples of the kinds of cracked-screen conditions and repair stages customers
            commonly ask us about.
          </p>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex gap-6 snap-x snap-mandatory">
            {images.map((image) => (
              <figure
                key={image.caption ?? image.alt}
                className="min-w-[280px] snap-start overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-sm md:min-w-[360px]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                {image.caption && (
                  <figcaption className="px-5 py-4 text-sm font-medium text-gray-700">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
