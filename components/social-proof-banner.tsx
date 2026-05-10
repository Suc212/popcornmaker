'use client';

import { useEffect, useMemo, useState } from 'react';

const GHANA_TIME_ZONE = 'Africa/Accra';
const MIN_DAILY_ORDERS = 27;
const MAX_DAILY_ORDERS = 128;

function getGhanaDayKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: GHANA_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function seededNumber(input: string) {
  let hash = 2166136261;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function getDailyOrderCount(dayKey: string) {
  const span = MAX_DAILY_ORDERS - MIN_DAILY_ORDERS + 1;
  return MIN_DAILY_ORDERS + (seededNumber(dayKey) % span);
}

function getSessionBumpDelays(dayKey: string) {
  const firstDelay = 45000 + (seededNumber(`${dayKey}-first`) % 35000);
  const secondDelay = firstDelay + 75000 + (seededNumber(`${dayKey}-second`) % 45000);

  return [firstDelay, secondDelay];
}

export function SocialProofBanner() {
  const initialDayKey = useMemo(() => getGhanaDayKey(), []);
  const [dayKey, setDayKey] = useState(initialDayKey);
  const [deliveredCount, setDeliveredCount] = useState(() => getDailyOrderCount(initialDayKey));

  useEffect(() => {
    const currentDayKey = getGhanaDayKey();
    setDayKey(currentDayKey);
    setDeliveredCount(getDailyOrderCount(currentDayKey));
  }, []);

  useEffect(() => {
    const timers = getSessionBumpDelays(dayKey).map((delay) =>
      window.setTimeout(() => {
        const currentDayKey = getGhanaDayKey();

        if (currentDayKey !== dayKey) {
          setDayKey(currentDayKey);
          setDeliveredCount(getDailyOrderCount(currentDayKey));
          return;
        }

        setDeliveredCount((current) => Math.min(MAX_DAILY_ORDERS, current + 1));
      }, delay)
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [dayKey]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-3 rounded-full border border-amber-200 bg-white px-4 py-3 text-center shadow-sm shadow-blue-950/5 sm:gap-4 sm:px-6">
            <span className="hidden h-px w-10 bg-amber-200 sm:block" aria-hidden="true" />
            <span className="size-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <p className="text-sm font-semibold text-slate-700 sm:text-base">
              <span className="mr-1.5 align-middle text-2xl font-bold leading-none text-slate-950 sm:text-3xl">
                {deliveredCount}
              </span>
              orders delivered in the last 24 hours
            </p>
            <span className="hidden h-px w-10 bg-amber-200 sm:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
