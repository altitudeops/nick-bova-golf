import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import ChatReviews from '@/components/ChatReviews';
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
      <PageHero
        eyebrow="Reviews"
        title={<>The proof is in the <span className="text-gold">progress.</span></>}
        subtitle="Real words from real students — on the swing changes, the mental gains and the results that follow."
        image="/images/hamilton-farm-aerial.jpg"
      />

      <section className="relative overflow-hidden bg-bone">
        <div className="stripes pointer-events-none absolute right-0 top-16 h-64 w-64" />
        <div className="container-px relative py-20 md:py-28">
          <ChatReviews reviews={REVIEWS} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
