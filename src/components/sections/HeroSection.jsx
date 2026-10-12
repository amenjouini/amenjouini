import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroDeck, profile, stats } from "@/data/portfolio";
import { CountryMarquee } from "@/components/CountryMarquee";
import { Button } from "@/components/ui/button";
import { BrowserFrame } from "@/components/work/BrowserFrame";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1];

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: profile.timeZone,
    });
    const update = () => setTime(format.format(new Date()));
    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return <span className="tabular-nums">{time || "--:--"}</span>;
}

// Stack positions by rank: 0 is the front card.
const deckPose = [
  { x: "0%", y: "0%", scale: 1, rotate: 0 },
  { x: "6%", y: "-8%", scale: 0.94, rotate: 0 },
  { x: "12%", y: "-16%", scale: 0.88, rotate: 0 },
];

function ProductDeck() {
  const [front, setFront] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = heroDeck.length;

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const timer = window.setInterval(() => setFront((value) => (value + 1) % count), 4200);
    return () => window.clearInterval(timer);
  }, [count, paused, reduceMotion]);

  const current = heroDeck[front];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="grid pr-[11%] pt-[10%]">
        {heroDeck.map((item, index) => {
          const rank = (index - front + count) % count;
          return (
            <motion.div
              key={item.id}
              className="col-start-1 row-start-1 origin-top-right"
              style={{ zIndex: count - rank }}
              initial={false}
              animate={deckPose[rank]}
              transition={{ duration: 0.9, ease }}
            >
              <BrowserFrame
                url={item.url}
                src={item.image}
                alt={rank === 0 ? `${item.label} — screenshot` : ""}
                eager
                className={cn("transition-shadow duration-700", rank === 0 ? "shadow-lift" : "shadow-frame")}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 pr-[11%]">
        <p className="eyebrow truncate" aria-live="polite">
          <span className="text-signal-deep">Fig. 0{front + 1}</span> — {current.label}
        </p>
        <div className="flex gap-1.5">
          {heroDeck.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show ${item.label}`}
              aria-pressed={index === front}
              className="group flex h-6 items-center"
              onClick={() => setFront(index)}
            >
              <span
                className={cn(
                  "h-[3px] rounded-full transition-all duration-500 ease-out",
                  index === front ? "w-8 bg-signal" : "w-4 bg-ink/20 group-hover:bg-ink/50",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[var(--nav-h)]">
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container relative">
        <motion.div
          className="eyebrow flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="flex items-center gap-2.5 text-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-dot rounded-full bg-signal" />
              <span className="relative h-2 w-2 rounded-full bg-signal" />
            </span>
            {profile.availability}
          </span>
          <span className="hidden sm:inline">{profile.coords}</span>
          <span>
            {profile.location} — <LocalTime />
          </span>
        </motion.div>

        <motion.p className="mt-10 text-base font-medium md:mt-14 md:text-lg" {...rise(0.05)}>
          {profile.name} <span className="text-muted">— {profile.role}</span>
        </motion.p>

        <motion.h1 className="display-xl mt-4 text-balance" {...rise(0.12)}>
          I build the software businesses <span className="accent-serif whitespace-nowrap">run on.</span>
        </motion.h1>

        <div className="mt-10 grid items-start gap-12 pb-14 md:mt-14 lg:grid-cols-12 lg:gap-8 lg:pb-20">
          <motion.div className="lg:col-span-5 lg:pt-6" {...rise(0.24)}>
            <p className="lede max-w-xl">
              SaaS platforms, booking systems and business websites — designed, built and shipped end to end, from the
              first conversation to deployment and maintenance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#work">
                  View selected work
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={profile.cv.href} download={profile.cv.filename}>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <a href="#contact" className="link-rule mt-8 text-sm">
              Have a project in mind? Start a conversation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div className="lg:col-span-6 lg:col-start-7" {...rise(0.36)}>
            <ProductDeck />
          </motion.div>
        </div>
      </div>

      <div className="relative border-y bg-raised/60">
        <dl className="container grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col-reverse justify-end gap-2 py-6 md:py-8",
                index % 2 === 1 && "border-l pl-5 lg:pl-8",
                index === 2 && "lg:border-l lg:pl-8",
                index > 1 && "border-t lg:border-t-0",
              )}
            >
              <dt className="max-w-[22ch] text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <CountryMarquee />
    </section>
  );
}
