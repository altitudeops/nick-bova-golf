'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

type Review = { name: string; text: string };

function initials(name: string) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}

export default function ChatReviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-7">
      {reviews.map((r, i) => {
        const right = i % 2 === 1;
        return (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, x: right ? 48 : -48, y: 14 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={clsx('flex w-full', right ? 'justify-end' : 'justify-start')}
          >
            <div className={clsx('flex max-w-[88%] items-end gap-3', right && 'flex-row-reverse')}>
              {/* Avatar */}
              <div
                className={clsx(
                  'grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-sm font-semibold',
                  right ? 'bg-champagne text-navy-950' : 'bg-navy-900 text-bone'
                )}
              >
                {initials(r.name)}
              </div>

              {/* Bubble */}
              <div
                className={clsx(
                  'rounded-2xl px-6 py-5 shadow-[0_10px_30px_-18px_rgba(10,26,47,0.4)]',
                  right
                    ? 'rounded-br-sm bg-champagne/[0.16] border border-champagne/30'
                    : 'rounded-bl-sm border border-line bg-white'
                )}
              >
                <div className={clsx('mb-2 flex gap-0.5 text-champagne', right && 'justify-end')} aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-xs">★</span>
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-ink/90">{r.text}</p>
                <p className={clsx('mt-3 text-xs font-semibold uppercase tracking-accent text-champagne-deep', right && 'text-right')}>
                  {r.name}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
