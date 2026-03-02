export function Testimonials() {
  const faqs = [
    {
      question: 'Is oil really needed for popcorn?',
      answer: 'No! Our Mini Popcorn Maker uses advanced heating technology to pop kernels perfectly without any oil. It\'s completely healthy and delivers amazing flavor through proper heat distribution.',
    },
    {
      question: 'How long does it take to make popcorn?',
      answer: 'Just 2-3 minutes! Pour your kernels, press start, and enjoy fresh popcorn in moments. It\'s the perfect solution for quick, healthy snacking.',
    },
    {
      question: 'Is it easy to clean?',
      answer: 'Absolutely. The removable parts make cleanup effortless. Rinse, dry, and you\'re ready for your next leisure moment. No mess, no complicated parts.',
    },
    {
      question: 'Can I customize my popcorn?',
      answer: 'Yes! With no oil requirement, you control everything. Use your favorite kernels, add your preferred seasonings after—complete control for your perfect snack.',
    },
  ];

  const testimonials = [
    {
      name: 'Ama Owusu',
      role: 'Accra, Ghana',
      text: 'This popcorn maker is easy to use and works consistently. My family uses it on weekends, and cleanup is quick.',
      rating: 5,
    },
    {
      name: 'Kwame Boateng',
      role: 'Kumasi, Ghana',
      text: 'It makes popcorn in a few minutes and does not require oil. It has been a practical addition to our home.',
      rating: 5,
    },
    {
      name: 'Abena Mensah',
      role: 'Takoradi, Ghana',
      text: 'I bought it for family gatherings, and it has been reliable so far. The portion size is good for small groups.',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Testimonials */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Loved by Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-balance max-w-3xl">
            Real people sharing their leisure moments
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-slate-300 transition-all hover:shadow-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-slate-600 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Questions About Leisure
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-balance">
            Everything you need to know about your lifestyle upgrade
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-slate-300 bg-white group"
              >
                <summary className="w-full p-6 flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-slate-700">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 text-left">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-2xl text-gray-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
