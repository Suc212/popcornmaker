export function Testimonials() {
  const faqs = [
    {
      question: 'Is it really worth it for just popcorn?',
      answer: 'If you snack often, it pays for itself quickly. Most buyers say it becomes part of their weekly routine after the first few uses.',
    },
    {
      question: 'How big are the batches?',
      answer: 'It pops a personal-to-sharing-sized batch in about 3 minutes, ideal for 1-3 people. You can pop another batch immediately.',
    },
    {
      question: 'Is it loud?',
      answer: 'The popping sound is part of the fun. The machine runs around the level of a hair dryer and finishes quickly.',
    },
    {
      question: 'What if I do not like it?',
      answer: 'No stress. You are covered by a 30-day money-back guarantee.',
    },
    {
      question: 'How long does delivery take in Ghana?',
      answer: 'Most deliveries arrive in 2-5 business days. You will receive confirmation and shipping updates after your order.',
    },
  ];

  const testimonials = [
    {
      name: 'Ama Owusu',
      role: 'Accra, Ghana',
      text: 'I bought this for movie nights and now we use it almost every evening. Fast, easy, and way better than microwave popcorn.',
      rating: 5,
    },
    {
      name: 'Kwame Boateng',
      role: 'Kumasi, Ghana',
      text: 'I was skeptical at first, but the 3-minute pop time is real. It has become our go-to snack maker at home.',
      rating: 5,
    },
    {
      name: 'Abena Mensah',
      role: 'Takoradi, Ghana',
      text: 'I keep mine on my kitchen counter and everyone asks about it. Cleanup is quick and the taste is consistently great.',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Testimonials */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            They Bought It Skeptical.
            <br />
            Now They Cannot Stop.
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-balance max-w-3xl">
            Real reviews from buyers across Ghana
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
            Got Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-balance">
            We have heard them all.
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
