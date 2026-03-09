import { Suspense } from 'react';
import { Hero } from '@/components/hero';
import { Scenarios } from '@/components/scenarios';
import { Features } from '@/components/features';
import { HowItWorks } from '@/components/how-it-works';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { OrderForm } from '@/components/order-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-amber-50 via-orange-50/40 to-slate-100 pb-20 md:pb-0">
      <Hero />
      <Scenarios />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      
      {/* Order Section */}
      <section id="order" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-100/60 to-amber-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center text-balance">
            Your Snack Game Is About to Change
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 text-balance">
            Join buyers across Ghana enjoying fresh popcorn at home. Select your quantity and place your order below.
          </p>
          <Suspense fallback={<div className="text-center text-sm text-gray-600">Loading order form...</div>}>
            <OrderForm />
          </Suspense>
          <p className="text-center text-sm text-slate-600 mt-6">
            30-Day Money-Back Guarantee · Secure Checkout · Fast Delivery
          </p>
        </div>
      </section>

      <Footer />

      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-amber-200 shadow-[0_-8px_24px_rgba(0,0,0,0.12)] px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <div>
            <p className="text-base font-bold text-slate-900">₵600</p>
            <p className="text-xs text-slate-500 line-through">₵800</p>
          </div>
          <a
            href="?qty=1#order"
            className="px-5 py-2.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>
    </main>
  );
}
