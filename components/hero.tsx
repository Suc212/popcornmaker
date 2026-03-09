export function Hero() {
  return (
    <section className="bg-gradient-to-b from-amber-100 via-orange-50 to-amber-50">
      <div className="bg-red-600 text-white text-center text-xs sm:text-sm font-medium tracking-wide px-4 py-2">
        <span className="font-bold">FREE SHIPPING</span> on all orders today · Limited stock available
      </div>

      <div className="py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-10 items-center">
            <div className="text-slate-900 text-center">
              <p className="inline-flex items-center px-4 py-2 rounded-full bg-amber-200 text-slate-900 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-5">
                As Seen On Social Media
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-balance leading-tight">
                Movie Night Just Got
                <br />
                Way More Fun.
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
                Fresh, hot, crunchy popcorn in under 3 minutes. No oil needed for a lighter, lower-calorie snack that fits a healthy diet.
              </p>

              <div className="flex flex-col items-center gap-3 mb-8">
                <a
                  href="?qty=1#order"
                  className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full transition-colors text-lg text-center shadow-lg shadow-amber-700/25"
                >
                  Get Mine - Order Now
                </a>
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-600 font-medium">
                  <span>30-Day Money Back</span>
                  <span>Free Delivery</span>
                  <span>4.8/5 Stars</span>
                </div>
              </div>

              <div className="mb-4 flex items-center justify-center">
                <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-5 sm:p-6 border border-amber-100 shadow-xl shadow-amber-200/40">
                  <div className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border border-amber-300 bg-amber-50 mb-4">
                    4.8 Rating • 2,400+ Reviews
                  </div>
                  <img
                    src="/images/hero-product.webp"
                    alt="Mini Popcorn Maker with fresh popcorn pouring out"
                    className="w-full h-auto object-contain"
                  />
                  <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                    <span className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-100">Movie nights</span>
                    <span className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-100">Office snacking</span>
                    <span className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-100">Gaming sessions</span>
                    <span className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-100">Perfect gift</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl px-5 py-4 sm:px-8 sm:py-5 text-sm sm:text-base text-center">
              Join <span className="font-bold">12,000+ happy snackers in Ghana</span> who already own one — 94% say they use it every week.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
