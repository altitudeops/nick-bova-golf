import type { Metadata } from 'next';
import Image from 'next/image';
import clsx from 'clsx';
import Reveal from '@/components/Reveal';
import CTABand from '@/components/CTABand';
import MagneticButton from '@/components/MagneticButton';
import { PROGRAMS, SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Coaching Programs | Nick Bova Golf — Private, Junior & Online Lessons',
  description:
    'Private adult and junior lessons, online video coaching, and half- and full-day intensives with TrackMan and video analysis. Golf instruction at Hamilton Farm Golf Club, NJ.',
  alternates: { canonical: `${SITE.url}/coaching` },
};

const PROCESS = [
  { n: '01', t: 'Assess', d: 'We start with where your game is today — swing, data and goals captured on video and TrackMan.' },
  { n: '02', t: 'Build', d: 'Clear priorities, the right drills and a practice plan you can actually repeat between sessions.' },
  { n: '03', t: 'Apply', d: 'On-course gamification turns range gains into lower scores when it counts.' },
];

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-44 pb-20 md:pt-52 md:pb-24">
        <Image
          src="/images/nick-coaching-1.jpg"
          alt=""
          fill
          className="-z-10 object-cover object-top opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/80 via-navy-950/90 to-navy-950" />
        <div className="container-px">
          <Reveal>
            <p className="eyebrow">Coaching Programs</p>
            <h1 className="h-display mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] text-bone">
              Find the program that fits your <span className="text-gold italic">game.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/75">
              From a single tune-up to a full day of immersion, every session is private,
              personalized and built to move your scores in the right direction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Programs grid */}
      <section className="bg-navy-950">
        <div className="container-px py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <div
                  className={clsx(
                    'flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1',
                    p.featured
                      ? 'border-champagne/40 bg-gradient-to-b from-champagne/[0.08] to-white/[0.02]'
                      : 'border-white/10 bg-white/[0.03] hover:border-champagne/30'
                  )}
                >
                  {p.featured && (
                    <span className="mb-4 w-fit rounded-full border border-champagne/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-accent text-champagne">
                      Intensive
                    </span>
                  )}
                  <h3 className="font-display text-2xl text-bone">{p.name}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-3xl text-gold">{p.price}</span>
                    <span className="text-xs text-bone/50">{p.unit}</span>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-bone/60">{p.blurb}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-bone/75">
                        <span className="text-champagne">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx('mt-8', p.featured ? 'btn-gold' : 'btn-ghost')}
                  >
                    Book This
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-sm text-bone/50">
              Online lessons: send your swing videos to{' '}
              <a href={`mailto:${SITE.onlineEmail}`} className="text-champagne hover:underline">
                {SITE.onlineEmail}
              </a>{' '}
              and receive a detailed breakdown within days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 bg-navy-900">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <p className="eyebrow">The method</p>
            <h2 className="h-display mt-5 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] text-bone">
              Data in. Confidence out.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {PROCESS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-display text-6xl font-light text-champagne/25">{s.n}</span>
                  <h3 className="mt-3 font-display text-2xl text-bone">{s.t}</h3>
                  <p className="mt-3 leading-relaxed text-bone/65">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech callout */}
      <section className="bg-navy-950">
        <div className="container-px py-20 text-center md:py-24">
          <Reveal>
            <p className="eyebrow">Tools of the trade</p>
            <h2 className="h-display mx-auto mt-5 max-w-3xl text-[clamp(1.8rem,3.6vw,2.8rem)] text-bone">
              TrackMan launch data, frame-by-frame video and on-course gamification —{' '}
              <span className="text-gold">so every change is measured, not guessed.</span>
            </h2>
            <div className="mt-9 flex justify-center">
              <MagneticButton href={SITE.bookingUrl} external className="btn-gold">
                Reserve Your Session
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
