'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function WatchVideoButton({ videoId, className }: { videoId: string; className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        <span className="grid h-6 w-6 place-items-center rounded-full border border-current">
          <span className="ml-[2px] h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-current" />
        </span>
        Watch Video
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] grid place-items-center bg-navy-950/90 p-4 backdrop-blur-sm md:p-8"
          >
            <motion.div
              initial={{ scale: 0.94, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close video"
                className="absolute -top-11 right-0 flex items-center gap-2 text-sm font-semibold uppercase tracking-accent text-bone/70 transition-colors hover:text-champagne"
              >
                Close ✕
              </button>
              <div className="relative aspect-video w-full overflow-hidden border border-white/15 bg-black shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Nick Bova Golf"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
