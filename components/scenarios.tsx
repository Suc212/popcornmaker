const SCENARIOS = [
  {
    icon: '🎬',
    title: 'Movie Night Upgrade',
    description:
      'Skip stale microwave bags. Pop a fresh batch while the opening credits roll.',
  },
  {
    icon: '🎮',
    title: 'Gaming Fuel',
    description:
      'Keep snacks ready between rounds with clean, hot popcorn in minutes.',
  },
  {
    icon: '👩‍💻',
    title: 'Work-From-Home Snack',
    description:
      'Perfect for that 3PM break when you need a quick, satisfying boost.',
  },
  {
    icon: '🎁',
    title: 'Gift That Wows',
    description:
      'A practical, fun gift for birthdays, housewarmings, and holidays.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Fun',
    description:
      'Let everyone watch kernels pop and enjoy a fresh shared snack together.',
  },
  {
    icon: '🌙',
    title: 'Late Night Cravings',
    description:
      'When cravings hit, you are only about 3 minutes away from fresh popcorn.',
  },
];

export function Scenarios() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-amber-50/60">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-semibold mb-3">
          Made for every moment
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-balance max-w-3xl">
          You Will Find a Reason to Use It Every Day
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCENARIOS.map((scenario) => (
            <article
              key={scenario.title}
              className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-4xl mb-3">{scenario.icon}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{scenario.title}</h3>
              <p className="text-slate-600 leading-relaxed">{scenario.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
