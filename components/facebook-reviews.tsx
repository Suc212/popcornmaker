import fs from 'node:fs';
import path from 'node:path';

import { FacebookReviewCarousel } from '@/components/facebook-review-carousel';

const reviewImageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function getReviewImages() {
  const reviewsDirectory = path.join(process.cwd(), 'public', 'images', 'reviews');

  if (!fs.existsSync(reviewsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(reviewsDirectory)
    .filter((fileName) => reviewImageExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((fileName, index) => ({
      src: `/images/reviews/${encodeURIComponent(fileName)}`,
      alt: `Facebook review screenshot ${index + 1}`,
    }));
}

export function FacebookReviews() {
  const images = getReviewImages();

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
            See on Facebook
          </p>
          <h2 className="text-4xl font-bold leading-tight text-slate-950 text-balance md:text-6xl">
            Facebook Had Thoughts. Mostly Crunchy Ones.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Real posts and reviews from people who tried the popcorn maker and came back with snack reports.
          </p>
        </div>

        <FacebookReviewCarousel images={images} />
      </div>
    </section>
  );
}
