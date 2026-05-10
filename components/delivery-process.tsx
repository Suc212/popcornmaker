'use client';

import { useMemo } from 'react';
import { CheckCircle2, MessageCircle, ShoppingBag, Truck } from 'lucide-react';

const GHANA_TIME_ZONE = 'Africa/Accra';

function getGhanaDate(offsetDays = 0) {
  const now = new Date();
  const ghanaDateText = new Intl.DateTimeFormat('en-US', {
    timeZone: GHANA_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
  const [month, day, year] = ghanaDateText.split('/').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + offsetDays));

  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function DeliveryProcess() {
  const dates = useMemo(
    () => ({
      today: getGhanaDate(),
      delivery: getGhanaDate(1),
    }),
    []
  );

  const steps = [
    {
      title: 'Place order',
      date: `Today, ${dates.today}`,
      text: 'Choose your bundle and submit your delivery details.',
      icon: ShoppingBag,
    },
    {
      title: 'We confirm',
      date: `Today, ${dates.today}`,
      text: 'Our team reaches out by WhatsApp or call to verify the order.',
      icon: MessageCircle,
    },
    {
      title: 'We deliver',
      date: dates.delivery,
      text: 'Your PopMini is dispatched after confirmation.',
      icon: Truck,
    },
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-amber-700 font-semibold mb-3">
              Delivery timeline
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-balance">
              Order today. Confirm today. Delivery follows.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-balance">
              We confirm every order before dispatch so your PopMini goes to the right address and delivery is not delayed.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article key={step.title} className="relative rounded-2xl bg-white p-5 border border-amber-100 shadow-sm">
                    {index < steps.length - 1 ? (
                      <div className="hidden md:block absolute left-[calc(100%-0.25rem)] top-10 h-0.5 w-4 bg-amber-300" aria-hidden="true" />
                    ) : null}
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="flex size-11 items-center justify-center rounded-full bg-amber-700 text-white">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                        {step.date}
                      </span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-emerald-700" aria-hidden="true" />
                <h3 className="text-lg font-bold text-slate-900">Payment by location</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">Within Accra:</span> payment on delivery after we confirm your order details.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Outside Accra:</span> payment is made after order confirmation, before dispatch. This helps reserve your item, confirm the address, and avoid failed long-distance deliveries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
