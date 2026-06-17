import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import CTABand from '@/components/CTABand';
import CampusPartner from '@/components/CampusPartner';
import { STATS, ABOUT, PARTNERS, REVIEWS } from '@/lib/content';

const SERVICES = [
  { n: '01', title: 'Private Coaching', copy: 'One-on-one instruction built around your game.', href: '/coaching', img: '/images/nick-coaching-1.jpg', pos: 'object-center' },
  { n: '02', title: 'Online Lessons', copy: 'Film your swing — get a frame-by-frame breakdown, from anywhere.', href: '/coaching', img: '/images/hero-golfer-skyline.jpg', pos: 'object-[72%_center]' },
  { n: '03', title: 'Junior Development', copy: 'The CAMPUS Academy pathway to college golf.', href: '/campus-academy', img: '/images/hamilton-farm-aerial.jpg', pos: 'object-center' },
];

export default function Home() {
  const lead = REVIEWS[3];

  return (
    <>
      <Hero />

      {/* PHOTO SERVICE CARDS */}
      <section className="bg-white">
        <div className="container-px py-16 md:py-20">
          <Reveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow-ink">How I can help</p>
                <h2 className="h-display mt-3 text-[clamp(1.9rem,4vw,3rem)] uppercase text-ink">
                  Find your path to better golf
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden"
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className={`object-cover ${s.pos} transition-transform duration-[1.3s] ease-out group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-navy-950/5" />
                  <div className="absolute right-5 top-5 font-display text-2xl font-semibold text-white/35">{s.n}</div>
                  <div className="relative z-10 p-7">
                    <h3 className="flex h-[2.1em] items-end font-display text-3xl font-semibold uppercase leading-[0.95] text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 h-[2.75rem] max-w-[28ch] text-sm leading-relaxed text-white/75">{s.copy}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-accent text-champagne">
                      Learn More
                      <span className="h-px w-6 bg-champagne transition-all duration-300 group-hover:w-10" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTRAIT + BIO */}
      <section className="relative overflow-hidden bg-bone">
        <div className="container-px grid items-center gap-12 py-24 md:grid-cols-2 md:gap-16 md:py-28">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              <div className="stripes absolute -bottom-5 -left-5 -z-0 h-40 w-40" />
              <div className="relative z-10 aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/nick-portrait.jpg"
                  alt="Nick Bova, PGA Director of Instruction"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-3 right-6 z-20 text-3xl font-light text-ink/30">+</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow-ink flex items-center gap-2">
                <span className="inline-block h-3 w-[3px] bg-champagne-deep" />
                PGA Professional
              </p>
              <h2 className="h-display mt-4 text-[clamp(2.4rem,5vw,4rem)] uppercase text-ink">Nick Bova</h2>
              <div className="mt-6 space-y-4 leading-relaxed text-slate">
                <p>{ABOUT.bio[0]}</p>
                <p>{ABOUT.course}</p>
              </div>
              <Link href="/about" className="btn-dark mt-9">
                Learn More
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STAT STRIP — premium dark band */}
      <section className="relative overflow-hidden bg-navy-950">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{ background: 'radial-gradient(60% 130% at 50% 0%, rgba(200,162,75,0.14), transparent 60%)' }}
        />
        <div className="stripes pointer-events-none absolute inset-0 opacity-[0.4]" style={{ filter: 'invert(1)' }} />
        <div className="container-px relative py-16 md:py-20">
          <Reveal>
            <p className="mb-12 text-center text-xs uppercase tracking-accent text-champagne">By the numbers</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:divide-x md:divide-white/10">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="px-2 text-center md:px-8">
                  <div className="font-display text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-none text-gold">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-bone">{s.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-bone/50">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS — clean on white */}
      <section className="border-b border-line bg-white">
        <div className="container-px py-16 md:py-20">
          <Reveal>
            <p className="mb-12 text-center text-xs uppercase tracking-accent text-slate">
              Certified &amp; trusted by the industry’s best
            </p>
          </Reveal>
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-12 md:grid-cols-4">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="relative h-16 w-44 opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
                  <Image src={p.src} alt={p.name} fill className="object-contain" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="relative overflow-hidden border-y border-line bg-white">
        <div className="container-px py-24 text-center md:py-32">
          <Reveal>
            <div className="mx-auto mb-4 font-display text-7xl leading-none text-champagne">“</div>
            <blockquote className="mx-auto max-w-3xl text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-[1.35] text-ink">
              {lead.text}
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-accent text-champagne-deep">— {lead.name}</p>
            <Link href="/reviews" className="btn-outline mt-10">
              Read more reviews
            </Link>
          </Reveal>
        </div>
      </section>

      <CampusPartner />

      <CTABand />
    </>
  );
}
