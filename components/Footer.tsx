import Link from 'next/link';
import Image from 'next/image';
import { NAV, SITE } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/brand/logo-white.svg" alt="Nick Bova Golf" width={48} height={32} className="h-8 w-auto" />
              <span className="font-display text-xl tracking-tight">
                Nick Bova <span className="text-gold">Golf</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone/60">
              Class A PGA Professional and Director of Instruction at Hamilton Farm Golf Club.
              Private, junior and online golf instruction in Gladstone, New Jersey.
            </p>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-bone/70 transition-colors hover:text-champagne">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Get in touch</h4>
            <ul className="space-y-3 text-sm text-bone/70">
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-champagne">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="transition-colors hover:text-champagne">
                  {SITE.email}
                </a>
              </li>
              <li className="pt-1 leading-relaxed">
                {SITE.address.venue}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </li>
              <li className="flex gap-4 pt-3">
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-bone/70 transition-colors hover:text-champagne">
                  Instagram
                </a>
                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="text-bone/70 transition-colors hover:text-champagne">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-bone/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Nick Bova Golf. All rights reserved.</p>
          <p>PGA Director of Instruction · Hamilton Farm Golf Club</p>
        </div>
      </div>
    </footer>
  );
}
