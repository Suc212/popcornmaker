const OFFERS = [
  { quantity: '1', discounted: 600, original: 800 },
  { quantity: '2', discounted: 1100, original: 1600 },
  { quantity: '3', discounted: 1500, original: 2400 },
];

export function Pricing() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Choose Your Offer
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto text-balance">
            Pick a package and continue straight to checkout. Your selected quantity is automatically filled in the order form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {OFFERS.map((offer) => {
            const savings = offer.original - offer.discounted;

            return (
              <article
                key={offer.quantity}
                className="rounded-xl border border-slate-200 p-6 bg-white transition-all hover:border-slate-300"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-1">
                  {offer.quantity} Unit{offer.quantity === '1' ? '' : 's'}
                </p>
                <p className="text-3xl font-bold text-slate-900 mb-1">
                  {offer.discounted} GHC
                </p>
                <p className="text-slate-500 line-through mb-2">
                  {offer.original} GHC
                </p>
                <p className="text-sm text-green-700 font-medium mb-5">
                  Save {savings} GHC
                </p>

                <a
                  href={`?qty=${offer.quantity}#order`}
                  className="block w-full px-5 py-3 rounded-lg font-semibold transition-colors bg-amber-600 text-white hover:bg-amber-700 text-center"
                >
                  Buy Now
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
