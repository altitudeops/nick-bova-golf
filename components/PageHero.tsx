import Image from 'next/image';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  imagePosition?: string;
  children?: ReactNode;
};

/**
 * Full-bleed photographic hero banner — the model Nick's live site uses on every
 * page. Strong photo, dark wash for legibility, content anchored bottom-left.
 */
export default function PageHero({ eyebrow, title, subtitle, image, imagePosition = 'object-center', children }: Props) {
  return (
    <section className="relative flex min-h-[54vh] items-end overflow-hidden md:min-h-[62vh]">
      <Image src={image} alt="" fill priority className={`-z-10 object-cover ${imagePosition}`} />
      {/* Legibility wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/85 via-navy-950/25 to-transparent" />

      <div className="container-px relative pb-16 pt-40 md:pb-20">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5rem)] text-bone">{title}</h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80">{subtitle}</p>
          )}
          {children && <div className="mt-9 flex flex-wrap items-center gap-4">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
