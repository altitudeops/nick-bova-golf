import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
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

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-16 md:pt-52 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-900 to-navy-950" />
        <div className="container-px">
          <Reveal>
            <p className="eyebrow">Contact &amp; Booking</p>
            <h1 className="h-display mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] text-bone">
              Let’s get you on the <span className="text-gold italic">tee sheet.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/75">
              The fastest way to book is online. Prefer to talk it through first? Call or email
              Nick directly — he’ll help you choose the right program.
            </p>
            <div className="mt-9">
              <MagneticButton href={SITE.bookingUrl} external className="btn-gold">
                Book Online Now
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="container-px grid gap-12 py-16 md:grid-cols-2 md:py-24">
          {/* Details */}
          <Reveal>
            <div className="space-y-10">
              <ContactRow label="Call or text" value={SITE.phone} href={SITE.phoneHref} />
              <ContactRow label="Email" value={SITE.email} href={SITE.emailHref} />
              <ContactRow label="Online lessons" value={SITE.onlineEmail} href={`mailto:${SITE.onlineEmail}`} />
              <div>
                <p className="eyebrow mb-3">Find Nick</p>
                <p className="text-lg leading-relaxed text-bone/85">
                  {SITE.address.venue}
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </p>
                <p className="mt-3 text-sm text-bone/55">
                  Director of Instruction at the Hickory Course — the only USGA-rated par-3
                  course in the United States.
                </p>
              </div>
              <div>
                <p className="eyebrow mb-3">Follow along</p>
                <div className="flex gap-4">
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-5 !py-2.5 !text-xs">
                    Instagram
                  </a>
                  <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-5 !py-2.5 !text-xs">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Hamilton Farm Golf Club map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-[420px] w-full md:h-full md:min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <a href={href} className="font-display text-2xl text-bone transition-colors hover:text-champagne md:text-3xl">
        {value}
      </a>
    </div>
  );
}
