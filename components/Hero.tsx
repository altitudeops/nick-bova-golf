'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HERO, SITE } from '@/lib/content';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Parallax aerial of Hamilton Farm at sunset */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image
          src="/images/hamilton-farm-aerial.jpg"
          alt="Hamilton Farm Golf Club at sunset"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      {/* Tonal wash for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/80 to-transparent" />

      <motion.div style={{ opacity: fade }} className="container-px min-w-0 pt-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-display mt-6 text-[clamp(2.1rem,7vw,5.25rem)] text-bone"
          >
            Taking your golf game to the{' '}
            <span className="text-gold italic">next level.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-bone/75"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={SITE.bookingUrl} external className="btn-gold">
              Book a Lesson
            </MagneticButton>
            <MagneticButton href={SITE.videoUrl} external className="btn-ghost">
              <span className="grid h-5 w-5 place-items-center rounded-full border border-current">
                <span className="ml-[2px] h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-current" />
              </span>
              Watch Nick
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Quiet scroll affordance: a breathing line, no instructional text */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px overflow-hidden bg-white/15">
          <div className="h-1/2 w-full animate-[slow-zoom_2s_ease-in-out_infinite] bg-champagne" />
        </div>
      </div>
    </section>
  );
}
