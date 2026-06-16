import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import CTABand from '@/components/CTABand';
import { REVIEWS, SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Reviews | Nick Bova Golf — What Students Say',
  description:
    'Read what golfers say about working with Nick Bova, PGA Director of Instruction at Hamilton Farm Golf Club — better swings, stronger minds, lower scores.',
  alternates: { canonical: `${SITE.url}/reviews` },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-16 md:pt-52 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-900 to-navy-950" />
        <div className="container-px">
          <Reveal>
            <p className="eyebrow">Reviews</p>
            <h1 className="h-display mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] text-bone">
              The proof is in the <span className="text-gold italic">progress.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/75">
              Real words from real students — on the swing changes, the mental gains and the
              results that follow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="container-px py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 2) * 0.08}>
                <figure
                  className={clsxFeatured(i)}
                >
                  <div className="mb-4 flex gap-1 text-champagne" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s}>★</span>
                    ))}
                  </div>
                  <blockquote className="font-display text-lg font-light leading-relaxed text-bone/90 md:text-xl">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm uppercase tracking-accent text-champagne">
                    {r.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

// First review spans full width for rhythm.
function clsxFeatured(i: number) {
  const base =
    'flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-champagne/30 md:p-10';
  return i === 0 ? `${base} md:col-span-2 bg-gradient-to-br from-champagne/[0.07] to-white/[0.02]` : base;
}
