import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import ChatReviews from '@/components/ChatReviews';
import Reveal from '@/components/Reveal';
import { REVIEWS, SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Reviews | Nick Bova Golf — What Students Say',
  description:
    'Read what golfers say about working with Nick Bova, PGA Director of Instruction at Hamilton Farm Golf Club — better swings, stronger minds, lower scores.',
  alternates: { canonical: `${SITE.url}/reviews` },
};

const HIGHLIGHTS = [
  { v: '5.0', l: 'Average rating' },
  { v: '100%', l: 'Five-star reviews' },
  { v: 'Class A', l: 'PGA instruction' },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title={<>The proof is in the <span className="text-gold">progress.</span></>}
        subtitle="Real words from real students — on the swing changes, the mental gains and the results that follow."
        image="/images/nick-coaching-2.jpg"
        imagePosition="object-[center_38%]"
      />

      {/* Credibility band */}
      <section className="border-b border-line bg-white">
        <div className="container-px py-14 md:py-16">
          <div className="grid grid-cols-3 divide-x divide-line">
            {HIGHLIGHTS.map((h) => (
              <Reveal key={h.l}>
                <div className="px-2 text-center">
                  <div className="font-display text-[clamp(2.2rem,4vw,3.25rem)] font-semibold leading-none text-gold">{h.v}</div>
                  <p className="mt-2 text-xs uppercase tracking-accent text-slate">{h.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chat-bubble reviews */}
      <section className="relative overflow-hidden bg-bone">
        <div className="stripes pointer-events-none absolute right-0 top-16 h-64 w-64" />
        <div className="container-px relative py-20 md:py-28">
          <Reveal>
            <div className="mb-14 text-center">
              <p className="eyebrow-ink">In their words</p>
              <h2 className="h-display mt-3 text-[clamp(1.9rem,4vw,3rem)] uppercase text-ink">Straight from the range</h2>
            </div>
          </Reveal>
          <ChatReviews reviews={REVIEWS} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
