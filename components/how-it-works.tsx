export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Your Leisure Simplified
          </h2>
          <p className="text-xl text-slate-600 text-balance max-w-3xl">
            Three simple steps to warm, fresh popcorn and a more relaxed evening. No complexity. Just leisure.
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
              <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-4xl text-white font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Add Kernels</h3>
              <p className="text-slate-600 leading-relaxed">
                Measure 2/3 cup of popcorn kernels and pour into the container. Use only high-quality kernels for best results.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col">
              <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-4xl text-white font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Place Measuring Cup & Start</h3>
              <p className="text-slate-600 leading-relaxed">
                Place the measuring cup on top of the lid, butter side up. Press the button and let the magic happen for about 3 minutes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-4xl text-white font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Enjoy Your Leisure</h3>
              <p className="text-slate-600 leading-relaxed">
                Fresh popcorn ready in minutes. Your moment of calm awaits. No oils, just pure enjoyment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
