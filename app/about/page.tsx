import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import CTABand from '@/components/CTABand';
import { ABOUT, CREDENTIALS, SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Nick Bova | PGA Director of Instruction',
  description:
    'Nick Bova — Class A PGA Professional, 2022 NJ PGA Section Champion, 3× All-American and Golf Digest Best-in-State coach. Director of Instruction at Hamilton Farm Golf Club.',
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pt-44 pb-20 md:pt-52 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-900 to-navy-950" />
        <div className="container-px grid items-end gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="eyebrow">About Nick Bova</p>
            <h1 className="h-display mt-5 text-[clamp(2.4rem,6vw,4.5rem)] text-bone">
              Player first.<br />
              <span className="text-gold italic">Teacher always.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/75">{ABOUT.intro}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-champagne/25 to-transparent blur-2xl" />
              <Image
                src="/images/nick-coaching-2.jpg"
                alt="Nick Bova teaching on the range at Hamilton Farm"
                fill
                priority
                className="rounded-[1.5rem] object-cover shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-navy-950">
        <div className="container-px grid gap-14 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
          <Reveal>
            <div className="md:sticky md:top-28">
              <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-champagne/40">
                <Image src="/images/nick-headshot.jpg" alt="Nick Bova" fill className="object-cover" />
              </div>
              <p className="mt-6 font-display text-2xl text-bone">Nick Bova</p>
              <p className="text-sm uppercase tracking-accent text-champagne">PGA Director of Instruction</p>
              <p className="mt-4 text-sm leading-relaxed text-bone/60">{ABOUT.course}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-bone/75">
              {ABOUT.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Playing résumé timeline */}
      <section className="border-y border-white/10 bg-navy-900">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <p className="eyebrow">The playing résumé</p>
            <h2 className="h-display mt-5 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] text-bone">
              A coach who still goes low.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-px">
            {ABOUT.playing.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group grid grid-cols-[5rem_1fr] items-start gap-6 border-t border-white/10 py-7 transition-colors hover:bg-white/[0.02] md:grid-cols-[8rem_1fr] md:gap-10">
                  <span className="font-display text-xl text-gold md:text-2xl">{item.year}</span>
                  <p className="text-base leading-relaxed text-bone/75 md:text-lg">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials grid */}
      <section className="bg-navy-950">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <p className="eyebrow">Honors &amp; credentials</p>
            <h2 className="h-display mt-5 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] text-bone">
              Recognized among the best.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c} delay={i * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="mt-1 text-champagne">✦</span>
                  <p className="text-bone/80">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
