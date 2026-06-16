import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center bg-navy-950">
      <div className="container-px text-center">
        <p className="font-display text-7xl text-gold">404</p>
        <h1 className="h-display mt-4 text-3xl text-bone">This shot went out of bounds.</h1>
        <p className="mt-4 text-bone/60">The page you’re looking for isn’t here.</p>
        <Link href="/" className="btn-gold mt-8">
          Back to the clubhouse
        </Link>
      </div>
    </section>
  );
}
