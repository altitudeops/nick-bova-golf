import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Accordion from '@/components/Accordion';
import CTABand from '@/components/CTABand';
import { CAMPUS, CAMPUS_PAGE as P, SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'CAMPUS Academy | Nick Bova Golf — Junior Development & College Recruiting',
  description:
    'Nick Bova Golf is a designated CAMPUS Academy — elite junior golf development and college recruiting in New Jersey. A four-stage pathway preparing players for golf across the Northeast.',
  alternates: { canonical: `${SITE.url}/campus-academy` },
};

const gold = CAMPUS.accent;
const goldBtn = {
  backgroundColor: gold,
  boxShadow: '0 14px 40px -14px rgba(200,162,75,0.6)',
};

export default function CampusAcademyPage() {
  return (
    <>
      {/* HERO — CAMPUS dark co-brand, A mark off to the left */}
      <section className="relative overflow-hidden bg-[#0b0b0d] pt-40 pb-20 md:pt-48 md:pb-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[10%] top-1/2 h-[150%] -translate-x-1/4 -translate-y-1/2 opacity-[0.05]">
            <Image src="/brand/campus/campus-a-white.svg" alt="" width={820} height={820} className="h-full w-auto" />
          </div>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(70% 80% at 80% 45%, rgba(200,162,75,0.10), transparent 70%)' }} />
        </div>

        <div className="container-px relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: gold }} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: gold }}>
                {P.heroEyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 w-full max-w-xl">
              <Image src="/brand/campus/campus-nickbova.svg" alt="CAMPUS Academy — Nick Bova Golf" width={723} height={215} priority className="h-auto w-full" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-10 max-w-3xl font-body text-[clamp(2.1rem,4.8vw,3.6rem)] font-extrabold leading-[1.06] tracking-tight text-white">
              Where the Northeast’s next <span style={{ color: gold }}>collegiate golfers</span> are built.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 md:text-base">{P.heroSub}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-accent text-navy-950 transition-all duration-300 hover:brightness-110" style={goldBtn}>
                Apply for an Evaluation
              </a>
              <a href={SITE.phoneHref} className="btn-ghost">Speak with Nick</a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 pt-10 md:grid-cols-4">
              {P.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-none" style={{ color: gold }}>
                    {s.value}
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-wide text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERSHIP STATEMENT — light */}
      <section className="border-b border-line bg-white">
        <div className="container-px py-20 md:py-24">
          <Reveal>
            <p className="eyebrow-ink">Proud CAMPUS Academy Partner</p>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {CAMPUS.body.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-slate">{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* THESIS — cream */}
      <section className="border-b border-line bg-bone">
        <div className="container-px py-24 text-center md:py-28">
          <Reveal>
            <h2 className="h-display mx-auto max-w-4xl text-[clamp(2.2rem,5vw,4rem)] text-ink">{P.thesisTitle}</h2>
            <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-slate">{P.thesisBody}</p>
          </Reveal>
        </div>
      </section>

      {/* PROCESS — light */}
      <section className="bg-white">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <p className="eyebrow-ink">The pathway</p>
            <h2 className="h-display mt-5 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] text-ink">Four stages, one trajectory.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {P.stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full border border-line bg-bone p-8">
                  <span className="font-display text-5xl font-semibold" style={{ color: gold }}>{s.n}</span>
                  <h3 className="mt-4 font-display text-2xl text-ink">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT PLAYERS RECEIVE — cream */}
      <section className="border-y border-line bg-bone">
        <div className="container-px grid gap-12 py-24 md:grid-cols-[1fr_1.3fr] md:py-28">
          <Reveal>
            <p className="eyebrow-ink">Inside the program</p>
            <h2 className="h-display mt-5 text-[clamp(2rem,4vw,3.2rem)] text-ink">What every player receives.</h2>
            <p className="mt-6 leading-relaxed text-slate">A complete system — not a stack of lessons. Everything works together toward development and a real college pathway.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {P.receives.map((r) => (
                <li key={r} className="flex items-start gap-3 border border-line bg-white p-5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center text-[11px] font-bold text-navy-950" style={{ backgroundColor: gold }}>✓</span>
                  <span className="text-sm text-ink/85">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* COLLEGE WALL — light, color logos */}
      <section className="bg-white">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <p className="eyebrow-ink">Recruiting pathways</p>
            <h2 className="h-display mt-5 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] text-ink">{P.collegesTitle}</h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-slate">{P.collegesSub}</p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
            {P.colleges.map((c, i) => (
              <Reveal key={c.name} delay={(i % 8) * 0.04}>
                <div className="group flex aspect-square flex-col items-center justify-center gap-3 border border-line bg-bone p-4 transition-all duration-300 hover:border-champagne/50 hover:bg-white hover:shadow-[0_14px_34px_-22px_rgba(10,26,47,0.4)]">
                  <div className="relative h-14 w-14">
                    <Image src={c.src} alt={`${c.name} athletics logo`} fill className="object-contain" />
                  </div>
                  <span className="text-center text-[11px] font-medium leading-tight text-slate">{c.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-xs leading-relaxed text-slate/70">
              Logos shown represent prominent Northeast college golf programs and are used to illustrate the regional recruiting landscape. They do not imply endorsement or current player commitments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MODERN RECRUITING — cream */}
      <section className="border-y border-line bg-bone">
        <div className="container-px grid items-center gap-14 py-24 md:grid-cols-2 md:py-28">
          <Reveal>
            <p className="eyebrow-ink">The modern recruiting landscape</p>
            <h2 className="h-display mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">{P.recruitTitle}</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-slate">
              {P.recruitBody.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/coaching" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-accent text-navy-950 transition-all duration-300 hover:brightness-110" style={goldBtn}>
                See coaching programs
              </Link>
              <a href={CAMPUS.externalHref} target="_blank" rel="noopener noreferrer" className="btn-outline">CAMPUS Academy profile</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <Image src="/images/nick-coaching-1.jpg" alt="Nick Bova coaching a junior golfer at Hamilton Farm Golf Club" fill className="object-cover shadow-2xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ — light */}
      <section className="bg-white">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <p className="eyebrow-ink">Common questions</p>
            <h2 className="h-display mt-5 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] text-ink">Before you reach out.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <Accordion items={P.faqs} accent={gold} />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
