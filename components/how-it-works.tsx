export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            From kernels to crunch in 3 easy steps
          </h2>
          <p className="text-xl text-slate-600 text-balance max-w-3xl">
            Dead simple flow: fill, switch on, and enjoy. Perfect for movie nights, work breaks, and family hangouts.
          </p>
        </div>

        {/* Step-by-step Image + Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Instruction Image */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/how-to-use.webp" 
              alt="Step-by-step instructions for using the popcorn maker"
              className="w-full h-auto max-w-sm sm:max-w-md object-contain"
            />
          </div>

          {/* Right: Text Steps */}
          <div className="grid grid-cols-1 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col">
              <div className="w-20 h-20 rounded-full bg-amber-700 flex items-center justify-center text-4xl text-white font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Fill the Chamber</h3>
              <p className="text-slate-600 leading-relaxed">
                Add your popcorn kernels. A small scoop is enough for a personal-to-sharing-sized batch.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col">
              <div className="w-20 h-20 rounded-full bg-amber-700 flex items-center justify-center text-4xl text-white font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Switch It On</h3>
              <p className="text-slate-600 leading-relaxed">
                Plug in, flip the switch, and let the hot-air system pop your batch in around 3 minutes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="w-20 h-20 rounded-full bg-amber-700 flex items-center justify-center text-4xl text-white font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Season and Enjoy</h3>
              <p className="text-slate-600 leading-relaxed">
                Catch it in your bowl, add your favorite toppings, and enjoy a fresh snack on demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
