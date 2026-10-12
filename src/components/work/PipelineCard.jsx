import { Fragment } from "react";
import { inProgress } from "@/data/portfolio";
import { MotionReveal } from "@/components/MotionReveal";

// Current project, drawn as the data pipeline it implements.
export function PipelineCard() {
  return (
    <MotionReveal className="rounded-2xl border border-dashed border-ink/30 p-6 md:p-10">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-dot rounded-full bg-signal" />
              <span className="relative h-2 w-2 rounded-full bg-signal" />
            </span>
            {inProgress.status} · {inProgress.company}
          </p>
          <h3 className="display-md mt-5">{inProgress.name}</h3>
        </div>
        <p className="leading-relaxed text-ink/75 lg:col-span-7 lg:pt-9">{inProgress.summary}</p>
      </div>

      <ol className="mt-10 flex flex-col items-start md:flex-row md:items-center" aria-label="Processing pipeline">
        {inProgress.steps.map((step, index) => (
          <Fragment key={step.label}>
            {index > 0 ? (
              <li aria-hidden="true" className="pipeline-link ml-7 h-6 w-px md:ml-0 md:h-px md:w-auto md:flex-1" />
            ) : null}
            <li className="flex shrink-0 items-center gap-3 rounded-xl border bg-raised px-4 py-3">
              <span className="font-mono text-[0.625rem] text-signal-deep">0{index + 1}</span>
              <span>
                <span className="block font-display text-base font-semibold leading-none tracking-tight">
                  {step.label}
                </span>
                <span className="mt-1.5 block whitespace-nowrap font-mono text-[0.625rem] leading-none text-muted">
                  {step.detail}
                </span>
              </span>
            </li>
          </Fragment>
        ))}
      </ol>

      <ul className="mt-8 flex flex-wrap gap-2">
        {inProgress.stack.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </MotionReveal>
  );
}
