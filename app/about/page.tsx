import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import { ABOUT, CRED_LOGOS, SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Nick Bova | PGA Director of Instruction',
  description:
    'Nick Bova — Class A PGA Professional, 2022 NJ PGA Section Champion, 3× All-American and Golf Digest Best-in-State coach. Director of Instruction at Hamilton Farm Golf Club.',
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nick Bova"
        title={<>Player first. <span className="text-gold">Teacher always.</span></>}
        subtitle={ABOUT.intro}
        image="/images/hamilton-farm-aerial.jpg"
      />

      {/* Bio — big image + story */}
      <section className="bg-white">
        <div className="container-px grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <Reveal>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="stripes pointer-events-none absolute -bottom-5 -left-5 h-44 w-44" />
              <div className="relative z-10 aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/nick-coaching-2.jpg"
                  alt="Nick Bova coaching on the range at Hamilton Farm Golf Club"
                  fill
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow-ink flex items-center gap-2">
                <span className="inline-block h-3 w-[3px] bg-champagne-deep" />
                PGA Director of Instruction
              </p>
              <h2 className="h-display mt-4 text-[clamp(2.4rem,5vw,4rem)] uppercase text-ink">Nick Bova</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate">
                {ABOUT.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Playing résumé timeline — cream */}
      <section className="border-y border-line bg-bone">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <p className="eyebrow-ink">The playing résumé</p>
            <h2 className="h-display mt-5 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] text-ink">
              A coach who still goes low.
            </h2>
          </Reveal>

          <div className="mt-14">
            {ABOUT.playing.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group grid grid-cols-[5rem_1fr] items-start gap-6 border-t border-line py-7 transition-colors hover:bg-white md:grid-cols-[8rem_1fr] md:gap-10">
                  <span className="font-display text-xl text-gold md:text-2xl">{item.year}</span>
                  <p className="text-base leading-relaxed text-slate md:text-lg">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials — real org logos */}
      <section className="bg-white">
        <div className="container-px py-24 md:py-28">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow-ink">Honors &amp; credentials</p>
              <h2 className="h-display mt-4 text-[clamp(2rem,4.5vw,3.4rem)] uppercase text-ink">
                Recognized among the best
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
            {CRED_LOGOS.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center justify-center gap-5 bg-white p-8 text-center md:p-10">
                  <div className="relative h-16 w-full">
                    <Image src={c.src} alt={c.name} fill className="object-contain" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-accent text-champagne-deep">{c.honor}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-sm text-slate">
              Also: 2020 New Jersey PGA Teacher / Coach of the Year · Member, Proponent Group ·
              Class A Member, PGA of America
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
