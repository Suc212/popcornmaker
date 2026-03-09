export function Features() {
  return (
    <>
      {/* Main Feature Section */}
      <section id="features" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left: Text */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Small machine.
                <br />
                Big personality.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fresh popcorn in about 3 minutes with no oil required. Built for compact kitchens, dorms, and offices across Ghana.
              </p>
              <a
                href="?qty=1#order"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition-colors"
              >
                <span>Order Now</span>
                <span>→</span>
              </a>
            </div>

            {/* Right: Feature Details Image */}
            <div className="flex items-center justify-center">
              <img 
                src="/images/product-features.jpg" 
                alt="Product features showing air duct design, non-stick liner, and simple operation"
                className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Why Buyers Keep Choosing PopMini
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-balance">
            Every detail designed for faster snacking and easier cleanup
          </p>

          {/* Image + Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left: Product Details Grid Image */}
            <div className="flex items-center justify-center lg:col-span-1">
              <img 
                src="/images/product-details-grid.webp" 
                alt="Detailed product components and quality"
                className="w-full h-auto max-w-[220px] sm:max-w-xs object-contain"
              />
            </div>

            {/* Right: Features */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-white rounded-lg border border-gray-200 hover:border-slate-300 transition-all hover:shadow-sm">
                  <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold">①</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Oil Needed</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hot-air popping keeps things lighter and lower-calorie while still giving you that crisp crunch, making it great for healthy diets.
                  </p>
                </div>

                <div className="p-10 bg-white rounded-lg border border-gray-200 hover:border-slate-300 transition-all hover:shadow-sm">
                  <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold">②</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready in 3 Minutes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pour kernels, switch on, and enjoy fresh popcorn fast without microwave bag smell.
                  </p>
                </div>

                <div className="p-10 bg-white rounded-lg border border-gray-200 hover:border-slate-300 transition-all hover:shadow-sm">
                  <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold">③</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Compact and Countertop Friendly</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fits into smaller kitchens and office corners without taking over your space.
                  </p>
                </div>

                <div className="p-10 bg-white rounded-lg border border-gray-200 hover:border-slate-300 transition-all hover:shadow-sm">
                  <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold">④</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy to Clean</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Removable parts and quick wipe-down cleanup mean less mess after every batch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
