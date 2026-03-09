const OFFERS = [
  { quantity: '1', discounted: 600, original: 800, badge: 'Starter Pack' },
  { quantity: '2', discounted: 1100, original: 1600, badge: 'Most Popular' },
  { quantity: '3', discounted: 1500, original: 2400, badge: 'Best Value' },
];

export function Pricing() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Choose Your Offer
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto text-balance">
            Pick a bundle and continue to checkout. Limited-time pricing with free shipping included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {OFFERS.map((offer) => {
            const savings = offer.original - offer.discounted;
            const isPopular = offer.quantity === '2';

            return (
              <article
                key={offer.quantity}
                className={`rounded-2xl border p-6 bg-white transition-all hover:border-slate-300 ${
                  isPopular ? 'border-amber-500 shadow-lg shadow-amber-200/40' : 'border-slate-200'
                }`}
              >
                <p
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    isPopular ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {offer.badge}
                </p>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-1">
                  {offer.quantity} Unit{offer.quantity === '1' ? '' : 's'}
                </p>
                <p className="text-3xl font-bold text-slate-900 mb-1">
                  ₵{offer.discounted.toLocaleString('en-US')}
                </p>
                <p className="text-slate-500 line-through mb-2">
                  ₵{offer.original.toLocaleString('en-US')}
                </p>
                <p className="text-sm text-green-700 font-medium mb-5">
                  Save ₵{savings.toLocaleString('en-US')}
                </p>

                <a
                  href={`?qty=${offer.quantity}#order`}
                  className={`block w-full px-5 py-3 rounded-lg font-semibold transition-colors text-center ${
                    isPopular ? 'bg-amber-700 hover:bg-amber-800 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Order Now
                </a>
              </article>
            );
          })}
        </div>
        <p className="text-center text-sm text-slate-600 mt-5">
          30-Day Money-Back Guarantee · Secure Checkout · Ships Fast
        </p>
      </div>
    </section>
  );
}
