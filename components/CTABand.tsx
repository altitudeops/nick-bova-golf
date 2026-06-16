import { SITE } from '@/lib/content';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';

export default function CTABand() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy-900">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(60% 120% at 80% 0%, rgba(200,162,75,0.18), transparent 60%)',
        }}
      />
      <div className="container-px relative py-20 text-center md:py-28">
        <Reveal>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="h-display mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] text-bone">
            Let’s build a game you can <span className="text-gold italic">trust.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-bone/70">
            Whether you’re chasing your first par or your club championship, every session is
            built around you, your swing and your goals.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href={SITE.bookingUrl} external className="btn-gold">
              Book a Lesson
            </MagneticButton>
            <a href={SITE.phoneHref} className="btn-ghost">
              Call {SITE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
