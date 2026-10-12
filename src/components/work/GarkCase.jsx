import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { gark } from "@/data/portfolio";
import { MotionReveal, staggerContainer, staggerItem } from "@/components/MotionReveal";
import { Button } from "@/components/ui/button";
import { BrowserFrame } from "@/components/work/BrowserFrame";
import { cn } from "@/lib/utils";

export function GarkCase({ onPreview }) {
  const [shotId, setShotId] = useState(gark.shots[0].id);
  const shot = gark.shots.find((item) => item.id === shotId);

  return (
    <MotionReveal
      as={motion.article}
      className="surface-ink -mx-5 overflow-hidden px-5 py-12 sm:-mx-8 sm:px-8 md:py-16 lg:mx-0 lg:rounded-[2rem] lg:p-16"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-5">
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-signal">Case 01</span>
            <span className="h-px w-6 bg-ink/30" aria-hidden="true" />
            {gark.kind} · {gark.status}
          </p>
          <h3 className="display-md mt-6 text-balance">{gark.title}</h3>
          <p className="mt-6 leading-relaxed text-ink/75">{gark.summary}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
            {gark.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-2 text-sm leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <Button
            variant="accent"
            size="lg"
            className="mt-10"
            onClick={() => onPreview({ name: `${gark.name} — ${gark.title}`, video: gark.video })}
          >
            <span className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <Play className="h-3.5 w-3.5 fill-current" />
            </span>
            Watch the walkthrough
            <span className="font-mono text-xs opacity-70">{gark.video.length}</span>
          </Button>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <BrowserFrame
            url={`gark / ${shot.label.toLowerCase()}`}
            className="shadow-lift"
            aspectClassName="aspect-[1600/742]"
            toolbar={
              <div role="tablist" aria-label="GARK screens" className="-mr-1.5 flex gap-0.5">
                {gark.shots.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={item.id === shotId}
                    className={cn(
                      "rounded-md px-2 py-1 font-mono text-[0.625rem] uppercase tracking-wider transition-colors",
                      item.id === shotId ? "bg-signal text-white" : "text-muted hover:text-ink",
                    )}
                    onClick={() => setShotId(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            }
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={shot.id}
                src={shot.image}
                alt={`GARK platform — ${shot.label} screen`}
                width={1600}
                height={742}
                loading="lazy"
                className="absolute inset-0 h-full w-full bg-white object-cover object-left-top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              />
            </AnimatePresence>
          </BrowserFrame>
          <p className="mt-4 font-mono text-[0.6875rem] leading-relaxed text-muted">
            Frames from the product demo. Switch tabs to see other modules.
          </p>
        </div>
      </div>

      <motion.ul
        className="mt-14 grid gap-x-8 border-t sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {gark.features.map((feature, index) => (
          <motion.li key={feature.title} className="border-b py-6 lg:border-b-0" variants={staggerItem}>
            <span className="font-mono text-[0.6875rem] text-signal">0{index + 1}</span>
            <h4 className="mt-3 font-display text-lg font-semibold leading-tight tracking-tight">{feature.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{feature.text}</p>
          </motion.li>
        ))}
      </motion.ul>

      <div className="grid gap-8 pt-8 lg:grid-cols-12 lg:gap-10 lg:border-t">
        <p className="font-display text-xl leading-snug tracking-tight lg:col-span-5">{gark.reach}</p>
        <ul className="flex flex-wrap content-start gap-2 lg:col-span-7 lg:justify-end">
          {gark.stack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </MotionReveal>
  );
}
