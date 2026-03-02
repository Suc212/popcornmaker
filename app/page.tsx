import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { HowItWorks } from '@/components/how-it-works';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { OrderForm } from '@/components/order-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-amber-50 via-orange-50/40 to-slate-100">
      <Hero />
      <Pricing />
      <Features />
      <HowItWorks />
      <Testimonials />
      
      {/* Order Section */}
      <section id="order" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-100/60 to-amber-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center text-balance">
            Ready to Order?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 text-balance">
            Fill out the form below and we'll get your Mini Popcorn Maker to you soon.
          </p>
          <OrderForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
