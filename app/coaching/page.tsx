import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
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
  { n: '01', t: 'Assess', d: 'A true baseline — swing, data and goals captured on video and TrackMan, with an honest read on where the game can go.' },
  { n: '02', t: 'Build', d: 'Clear priorities, the right drills and a practice plan you can actually repeat between sessions.' },
  { n: '03', t: 'Apply', d: 'On-course gamification turns range gains into lower scores — when it counts, where it counts.' },
];

const lessons = PROGRAMS.filter((p) => ['private-adult', 'private-junior', 'online'].includes(p.slug));
const intensives = PROGRAMS.filter((p) => ['half-day', 'full-day'].includes(p.slug));

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching Programs"
        title={<>Get <span className="text-gold">Started</span></>}
        subtitle="From a single tune-up to a full day of immersion, every session is private, personalized and built to move your scores in the right direction."
        image="/images/hamilton-farm-aerial.jpg"
      />

      {/* PRICING */}
      <section className="relative overflow-hidden border-b border-line bg-bone">
        <div className="stripes pointer-events-none absolute left-0 top-20 h-56 w-56" />
        <div className="container-px relative py-20 md:py-24">
          <Reveal>
            <div className="mb-14 text-center">
              <p className="eyebrow-ink">Coaching Programs</p>
              <h2 className="h-display mt-4 text-[clamp(2rem,4.5vw,3.4rem)] uppercase text-ink">
                Flexible Coaching Options
              </h2>
            </div>
          </Reveal>

          {/* Lessons */}
          <div className="grid gap-6 md:grid-cols-3">
            {lessons.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <div className="flex h-full flex-col border border-line bg-white p-8">
                  <h3 className="text-base font-bold uppercase tracking-wide text-ink">{p.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2 border-b border-line pb-5">
                    <span className="font-display text-5xl font-semibold text-gold">{p.price}</span>
                    <span className="text-xs text-slate">{p.unit}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-ink/80">
                        <span className="text-champagne-deep">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Intensives — premium dark band */}
          <Reveal>
            <div className="mt-6 grid gap-px overflow-hidden border border-navy-800 bg-navy-800 md:grid-cols-2">
              {intensives.map((p) => (
                <div key={p.slug} className="bg-navy-950 p-8 md:p-10">
                  <span className="text-[10px] font-semibold uppercase tracking-accent text-champagne">Intensive</span>
                  <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-lg font-bold uppercase tracking-wide text-bone">{p.name}</h3>
                    <span className="font-display text-4xl font-semibold text-gold">
                      {p.price} <span className="font-body text-sm font-normal text-bone/50">{p.unit}</span>
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-bone/60">{p.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-bone/75">
                        <span className="text-champagne">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ONE CTA */}
          <Reveal>
            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <MagneticButton href={SITE.bookingUrl} external className="btn-gold">
                Book Your Lesson
              </MagneticButton>
              <p className="text-sm text-slate">
                Online lessons: send your swing videos to{' '}
                <a href={`mailto:${SITE.onlineEmail}`} className="text-champagne-deep underline-offset-2 hover:underline">
                  {SITE.onlineEmail}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE METHOD — connected process */}
      <section className="bg-white">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow-ink">The method</p>
              <h2 className="h-display mt-4 text-[clamp(2rem,4.5vw,3.4rem)] uppercase text-ink">
                Data in. Confidence out.
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-16">
            {/* connecting line */}
            <div className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent md:block" />
            <div className="grid gap-12 md:grid-cols-3">
              {PROCESS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.12}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 grid h-14 w-14 place-items-center border border-champagne bg-white font-display text-2xl font-semibold text-gold">
                      {s.n}
                    </div>
                    <h3 className="mt-6 font-display text-2xl uppercase text-ink">{s.t}</h3>
                    <p className="mt-3 max-w-xs leading-relaxed text-slate">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech callout — dark band */}
      <section className="relative overflow-hidden bg-navy-950">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(70% 120% at 50% 0%, rgba(200,162,75,0.16), transparent 60%)' }}
        />
        <div className="container-px relative py-20 text-center md:py-24">
          <Reveal>
            <p className="eyebrow">Tools of the trade</p>
            <h2 className="h-display mx-auto mt-5 max-w-3xl text-[clamp(1.8rem,3.6vw,2.8rem)] text-bone">
              TrackMan launch data, frame-by-frame video and on-course gamification —{' '}
              <span className="text-gold">so every change is measured, not guessed.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
