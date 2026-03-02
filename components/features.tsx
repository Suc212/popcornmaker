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
                A Cleaner Lifestyle
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform the way you snack. Our Mini Popcorn Maker delivers pure, healthy popcorn without oils or additives—making every moment of leisure guilt-free.
              </p>
              <a
                href="?qty=1#order"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-black text-white font-semibold rounded transition-colors"
              >
                <span>Buy Now</span>
                <span>→</span>
              </a>
            </div>

            {/* Right: Feature Details Image */}
            <div className="hidden lg:flex items-center justify-center">
              <img 
                src="/images/product-features.jpg" 
                alt="Product features showing air duct design, non-stick liner, and simple operation"
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-balance">
            Every detail crafted for your leisure
          </p>

          {/* Image + Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left: Product Details Grid Image */}
            <div className="hidden lg:flex items-center justify-center lg:col-span-1">
              <img 
                src="/images/product-details-grid.webp" 
                alt="Detailed product components and quality"
                className="w-full h-auto max-w-xs object-contain"
              />
            </div>

            {/* Right: Features */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-white rounded-lg border border-gray-200 hover:border-amber-600 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold">①</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Oil</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Guilt-free snacking. No hidden oils, no unnecessary calories. Pure, clean leisure for your wellness journey.
                  </p>
                </div>

                <div className="p-10 bg-white rounded-lg border border-gray-200 hover:border-amber-600 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold">②</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Moments of Calm</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creates perfect moments of peace. Quiet, reliable, and always ready when you need those moments of leisure.
                  </p>
                </div>

                <div className="p-10 bg-white rounded-lg border border-gray-200 hover:border-amber-600 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold">③</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Control</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choose your ingredients. Control what goes into your snack. Make wellness choices that matter.
                  </p>
                </div>

                <div className="p-10 bg-white rounded-lg border border-gray-200 hover:border-amber-600 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold">④</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Effortless Living</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clean in seconds. More time to relax, less time cleaning. That's the leisure lifestyle.
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
