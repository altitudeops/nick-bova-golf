import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { CAMPUS } from '@/lib/content';

/**
 * "Proud CAMPUS Academy Partner" co-brand block.
 * Dark CAMPUS-brand band with Nick's gold partner accent. The faint A mark sits
 * off to the left, behind the lockup — not behind the copy.
 */
export default function CampusPartner() {
  const gold = CAMPUS.accent;
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#0b0b0d]">
      {/* Giant faint A watermark — anchored to the far left, behind the lockup */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[8%] top-1/2 h-[150%] -translate-x-1/4 -translate-y-1/2 opacity-[0.05]">
          <Image src="/brand/campus/campus-a-white.svg" alt="" width={820} height={820} className="h-full w-auto" />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(75% 90% at 85% 50%, rgba(0,0,0,0.55), transparent 70%)' }}
        />
      </div>

      <div className="container-px relative grid items-center gap-14 py-24 md:grid-cols-2 md:py-28">
        {/* Lockup */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-xl md:mx-0">
            <Image
              src="/brand/campus/campus-nickbova.svg"
              alt="CAMPUS Academy — Nick Bova Golf"
              width={723}
              height={215}
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        {/* Partner messaging */}
        <Reveal delay={0.1}>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: gold }} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: gold }}>
                {CAMPUS.eyebrow}
              </span>
            </div>

            <h2 className="mt-5 font-body text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              Proud <span style={{ color: gold }}>CAMPUS Academy</span> Partner.
            </h2>

            <span className="mt-5 block h-[3px] w-12 rounded-full" style={{ backgroundColor: gold }} />

            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-white/60">
              {CAMPUS.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <Link
              href={CAMPUS.href}
              className="group mt-9 inline-flex items-center gap-2 rounded-none px-7 py-3.5 text-sm font-semibold uppercase tracking-accent text-navy-950 transition-all duration-300 hover:brightness-110"
              style={{ backgroundColor: gold, boxShadow: '0 14px 40px -12px rgba(200,162,75,0.6)' }}
            >
              Explore CAMPUS Academy
              <span className="transition-transform duration-300 group-hover:translate-x-1">›</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
