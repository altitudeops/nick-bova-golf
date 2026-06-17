'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

type Item = { q: string; a: string };

export default function Accordion({ items, accent }: { items: Item[]; accent: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-bold text-ink">{it.q}</span>
              <span
                className={clsx(
                  'grid h-8 w-8 shrink-0 place-items-center border text-lg transition-all duration-300',
                  isOpen ? 'rotate-45 border-transparent text-navy-950' : 'border-ink/25 text-ink'
                )}
                style={isOpen ? { backgroundColor: accent } : undefined}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 leading-relaxed text-slate">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
