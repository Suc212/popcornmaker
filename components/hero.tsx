export function Hero() {
  return (
    <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-balance leading-tight">
              Enjoy The Perfect Leisure Time
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 text-balance leading-relaxed">
              No oil needed, Just put the corn and plug. 
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="?qty=1#order"
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded transition-colors text-lg text-center"
              >
                Buy Now
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded transition-colors text-lg text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <img 
              src="/images/hero-product.webp" 
              alt="Mini Popcorn Maker with fresh popcorn pouring out"
              className="w-full h-auto max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
