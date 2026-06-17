'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NAV, SITE } from '@/lib/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-px flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Nick Bova Golf — home">
          <Image
            src="/brand/logo-white.svg"
            alt="Nick Bova Golf"
            width={54}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'group relative text-sm font-medium tracking-wide transition-colors',
                  active ? 'text-champagne' : 'text-bone/80 hover:text-bone'
                )}
              >
                {item.label}
                <span
                  className={clsx(
                    'absolute -bottom-1.5 left-0 h-px bg-champagne transition-all duration-300',
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            );
          })}
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !px-5 !py-2.5 !text-xs"
          >
            Book Now
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={clsx('h-px w-6 bg-bone transition-all duration-300', open && 'translate-y-[7px] rotate-45')} />
          <span className={clsx('h-px w-6 bg-bone transition-all duration-300', open && 'opacity-0')} />
          <span className={clsx('h-px w-6 bg-bone transition-all duration-300', open && '-translate-y-[7px] -rotate-45')} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'fixed inset-0 z-40 flex flex-col bg-navy-950/97 backdrop-blur-lg transition-all duration-500 md:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'font-display text-3xl tracking-tight transition-all duration-500',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                pathname === item.href ? 'text-champagne' : 'text-bone'
              )}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
            >
              {item.label}
            </Link>
          ))}
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-gold mt-4">
            Book a Lesson
          </a>
        </nav>
      </div>
    </header>
  );
}
