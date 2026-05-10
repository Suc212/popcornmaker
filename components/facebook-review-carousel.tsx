'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

type ReviewImage = {
  src: string;
  alt: string;
};

type FacebookReviewCarouselProps = {
  images: ReviewImage[];
};

export function FacebookReviewCarousel({ images }: FacebookReviewCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api || images.length < 2) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api, images.length]);

  useEffect(() => {
    if (!api || images.length < 2) return;

    const interval = window.setInterval(() => {
      api.scrollPrev();
    }, 4200);

    return () => window.clearInterval(interval);
  }, [api, images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ align: 'center', loop: images.length > 1 }}
        className="mx-auto max-w-xl"
      >
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={image.src} className="pl-0">
              <div className="px-2 sm:px-4">
                <div className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-xl shadow-blue-900/10">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block aspect-[0.865/1] w-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            className="absolute left-0 top-1/2 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-lg transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:flex"
            aria-label="Previous Facebook review"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            className="absolute right-0 top-1/2 hidden size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-lg transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:flex"
            aria-label="Next Facebook review"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  selectedIndex === index ? 'w-8 bg-blue-700' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Show Facebook review ${index + 1}`}
                aria-current={selectedIndex === index}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
