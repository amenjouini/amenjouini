import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

// The CTA shows once the visitor has read past this element…
const START_AFTER = "case-gark";
// …and steps aside when the contact section itself is on screen.
const STOP_AT = "contact";

function useCtaVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const start = document.getElementById(START_AFTER);
      const stop = document.getElementById(STOP_AT);
      if (!start || !stop) return;

      const viewport = window.innerHeight;
      const pastStart = start.getBoundingClientRect().bottom < viewport * 0.75;
      const reachedStop = stop.getBoundingClientRect().top < viewport * 0.8;
      setVisible(pastStart && !reachedStop);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return visible;
}

// One persistent "let's talk" action: a full-width bar on phones, a floating card on larger screens.
export function FloatingCta() {
  const visible = useCtaVisible();

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:inset-x-auto md:right-6 md:px-0 md:pb-6 lg:right-8 lg:pb-8"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            className="surface-ink group pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-full border border-ink/15 py-2 pl-2 pr-2.5 shadow-lift transition-transform duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] md:w-auto"
          >
            <span className="relative shrink-0">
              <img
                src={profile.portrait}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full bg-[#eeeeee] object-cover object-top"
              />
              <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                <span className="absolute inset-0 animate-pulse-dot rounded-full bg-signal" />
                <span className="relative h-3 w-3 rounded-full border-2 border-paper bg-signal" />
              </span>
            </span>

            <span className="min-w-0 flex-1 pr-2 leading-tight md:pr-4">
              <span className="block whitespace-nowrap font-display text-base font-semibold tracking-tight">
                Have a project in mind<span className="hidden sm:inline"> in mind</span>?
              </span>
              <span className="mt-0.5 block truncate font-mono text-[0.625rem] uppercase tracking-wider text-muted">
                {profile.availability}
              </span>
            </span>

            <span className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-signal px-4 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
              Contact
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
