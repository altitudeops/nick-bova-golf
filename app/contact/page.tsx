import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import MagneticButton from '@/components/MagneticButton';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact & Booking | Nick Bova Golf',
  description:
    'Book a golf lesson with Nick Bova at Hamilton Farm Golf Club, Gladstone, NJ. Call, email or reserve online for private, junior and online instruction.',
  alternates: { canonical: `${SITE.url}/contact` },
};

const mapQuery = encodeURIComponent(
  `${SITE.address.venue}, ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`
);

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Booking"
        title={<>Let’s get you on the <span className="text-gold">tee sheet.</span></>}
        subtitle="The fastest way to book is online. Prefer to talk it through first? Call or email Nick directly — he’ll help you choose the right program."
        image="/images/hamilton-farm-aerial.jpg"
        imagePosition="object-[center_70%]"
      >
        <MagneticButton href={SITE.bookingUrl} external className="btn-gold">
          Book Online Now
        </MagneticButton>
      </PageHero>

      <section className="bg-bone">
        <div className="container-px py-20 md:py-28">
          <div className="grid overflow-hidden border border-line shadow-[0_30px_80px_-50px_rgba(10,26,47,0.6)] lg:grid-cols-[1fr_1.1fr]">
            {/* Contact card — dark premium */}
            <Reveal>
              <div className="relative overflow-hidden bg-navy-950 p-10 md:p-12">
                <div className="stripes pointer-events-none absolute -right-6 -top-6 h-44 w-44 opacity-50" />
                <p className="eyebrow">Get in touch</p>
                <h2 className="h-display mt-4 text-[clamp(1.8rem,3vw,2.6rem)] text-bone">
                  Reach Nick <span className="text-gold">directly.</span>
                </h2>

                <div className="mt-10 space-y-7">
                  <Row icon="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z" label="Call or text" value={SITE.phone} href={SITE.phoneHref} />
                  <Row icon="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" label="Email" value={SITE.email} href={SITE.emailHref} />
                  <Row icon="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" label="Online lessons — send your swing" value={SITE.onlineEmail} href={`mailto:${SITE.onlineEmail}`} />
                </div>

                <div className="my-9 h-px bg-white/10" />

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 text-champagne"><Icon d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /></span>
                  <div>
                    <p className="eyebrow">Find Nick</p>
                    <p className="mt-2 leading-relaxed text-bone/85">
                      {SITE.address.venue}<br />
                      {SITE.address.street}<br />
                      {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                    </p>
                    <p className="mt-2 text-sm text-bone/50">
                      Director of Instruction at the Hickory Course — the only USGA-rated par-3 course in the U.S.
                    </p>
                  </div>
                </div>

                <div className="mt-9 flex gap-4">
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn-dark-outline !px-5 !py-2.5 !text-xs">Instagram</a>
                  <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn-dark-outline !px-5 !py-2.5 !text-xs">Facebook</a>
                </div>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={0.1}>
              <div className="relative h-full min-h-[460px] bg-white">
                <iframe
                  title="Hamilton Farm Golf Club map"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a href={href} className="group flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-champagne transition-colors group-hover:bg-champagne group-hover:text-navy-950">
        <Icon d={icon} />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-accent text-champagne-deep">{label}</span>
        <span className="block truncate text-lg font-bold text-bone transition-colors group-hover:text-champagne md:text-xl">{value}</span>
      </span>
    </a>
  );
}
