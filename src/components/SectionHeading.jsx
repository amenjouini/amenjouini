import { MotionReveal } from "@/components/MotionReveal";
import { cn } from "@/lib/utils";

export function SectionHeading({ index, label, title, children, className }) {
  return (
    <MotionReveal className={cn("grid gap-6 lg:grid-cols-12 lg:gap-8", className)}>
      <p className="eyebrow flex items-center gap-3 lg:col-span-3 lg:pt-4">
        <span className="text-signal-deep">{index}</span>
        <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
        {label}
      </p>
      <div className="lg:col-span-9">
        <h2 className="display-lg max-w-[18ch] text-balance">{title}</h2>
        {children ? <div className="lede mt-6 max-w-2xl">{children}</div> : null}
      </div>
    </MotionReveal>
  );
}
