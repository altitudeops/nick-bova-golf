import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import CTABand from '@/components/CTABand';
import { STATS, ABOUT, PROGRAMS, PARTNERS, REVIEWS, SITE } from '@/lib/content';

export default function Home() {
  const featured = PROGRAMS.filter((p) => ['private-adult', 'online', 'full-day'].includes(p.slug));
  const lead = REVIEWS[3]; // Marc Burstein — the memorable one

  return (
    <>
      <Hero />

      {/* STAT STRIP — the rockstar résumé, animated */}
      <section className="relative border-b border-white/10 bg-navy-950">
        <div className="container-px py-16 md:py-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center md:text-left">
                  <div className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-light text-gold">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-bone">{s.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-bone/50">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / ABOUT TEASER */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="container-px grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <Reveal className="order-2 md:order-1">
            <p className="eyebrow">Meet your coach</p>
            <h2 className="h-display mt-5 text-[clamp(2rem,4vw,3.2rem)] text-bone">
              A rare blend of{' '}
              <span className="text-gold italic">player and teacher.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-bone/70">{ABOUT.intro}</p>
            <p className="mt-4 leading-relaxed text-bone/70">{ABOUT.course}</p>
            <Link href="/about" className="btn-ghost mt-9">
              Read Nick’s story
            </Link>
          </Reveal>

          <Reveal className="order-1 md:order-2" delay={0.1}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-champagne/30 to-transparent blur-2xl" />
              <Image
                src="/images/nick-coaching-1.jpg"
                alt="Nick Bova coaching a student at Hamilton Farm Golf Club"
                fill
                className="rounded-[1.5rem] object-cover shadow-2xl"
              />
              <div className="card-glass absolute -bottom-6 -left-6 hidden p-5 md:block">
                <p className="font-display text-2xl text-gold">Director of Instruction</p>
                <p className="text-xs uppercase tracking-accent text-bone/60">Hamilton Farm · Hickory Course</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative bg-navy-900">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">How we work together</p>
                <h2 className="h-display mt-5 max-w-xl text-[clamp(2rem,4vw,3.2rem)] text-bone">
                  Coaching for every kind of player.
                </h2>
              </div>
              <Link href="/coaching" className="btn-ghost shrink-0">
                View all programs
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link
                  href="/coaching"
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-champagne/40 hover:bg-white/[0.05]"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl text-bone">{p.name}</h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-bone/60">{p.blurb}</p>
                  <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
                    <div>
                      <span className="font-display text-2xl text-gold">{p.price}</span>
                      <span className="ml-2 text-xs text-bone/50">{p.unit}</span>
                    </div>
                    <span className="text-champagne transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS / PARTNERS */}
      <section className="border-y border-white/10 bg-navy-950">
        <div className="container-px py-16">
          <Reveal>
            <p className="mb-10 text-center text-xs uppercase tracking-accent text-bone/40">
              Certified &amp; trusted by the industry’s best
            </p>
          </Reveal>
          <div className="grid grid-cols-2 items-center justify-items-center gap-10 md:grid-cols-4">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="relative h-16 w-40 grayscale transition-all duration-500 hover:grayscale-0">
                  <Image src={p.src} alt={p.name} fill className="object-contain" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="container-px py-24 text-center md:py-32">
          <Reveal>
            <div className="mx-auto mb-8 text-5xl text-champagne/40 font-display">“</div>
            <blockquote className="mx-auto max-w-3xl font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-light leading-snug text-bone">
              {lead.text}
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-accent text-champagne">— {lead.name}</p>
            <Link href="/reviews" className="btn-ghost mt-10">
              Read more reviews
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
