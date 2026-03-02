export function Hero() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center">
          {/* Mobile-first hero content */}
          <div className="text-slate-900">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-balance leading-tight">
              Enjoy The Perfect Leisure Time
            </h1>

            {/* Image directly under heading */}
            <div className="mb-5 flex items-center justify-center">
              <img
                src="/images/hero-product.webp"
                alt="Mini Popcorn Maker with fresh popcorn pouring out"
                className="w-full h-auto max-w-sm sm:max-w-md object-contain"
              />
            </div>
            <p className="text-center text-sm sm:text-base font-semibold uppercase tracking-wide text-slate-700 mb-4">
              Mini Popcorn Maker
            </p>

            <p className="text-lg md:text-xl text-slate-600 mb-6 text-balance leading-relaxed">
              Your laid-back snack time starts here. No oil needed, just add the corn and plug it in.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="?qty=1#order"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded transition-colors text-lg text-center"
              >
                Buy Now
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold rounded transition-colors text-lg text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
