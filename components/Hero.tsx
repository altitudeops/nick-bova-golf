'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SITE } from '@/lib/content';
import MagneticButton from './MagneticButton';
import WatchVideoButton from './WatchVideoButton';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Full-bleed hero — golfer with the New York skyline */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-golfer-skyline.jpg"
          alt="Nick Bova taking a swing with the New York City skyline behind"
          fill
          priority
          className="object-cover object-[60%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-navy-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/85 via-navy-950/30 to-transparent" />

      <motion.div style={{ opacity: fade }} className="container-px min-w-0 pt-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne"
          >
            <span className="inline-block h-3 w-[3px] bg-champagne" />
            Nick Bova Golf
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 text-[clamp(3rem,8.5vw,7rem)] font-semibold uppercase leading-[0.88] tracking-[0.01em] text-white"
          >
            Taking your golf game to the <span className="text-gold">next level</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-bone/85"
          >
            Class A member of the PGA of America and one of Golf Digest’s Best Coaches in State
            for the state of New Jersey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={SITE.bookingUrl} external className="btn-gold">
              Book Now
            </MagneticButton>
            <WatchVideoButton videoId={SITE.videoId} className="btn-dark-outline" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
