import { motion } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { BrowserFrame, PhoneFrame } from "@/components/work/BrowserFrame";
import { cn } from "@/lib/utils";

function CaseMeta({ index, project }) {
  return (
    <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="text-signal-deep">Case {index}</span>
      <span className="h-px w-6 bg-ink/30" aria-hidden="true" />
      {project.kind} · {project.status}
    </p>
  );
}

function CaseBody({ project, className }) {
  return (
    <dl className={cn("grid gap-5 text-[0.9375rem] leading-relaxed", className)}>
      <div>
        <dt className="eyebrow mb-2">The need</dt>
        <dd className="text-ink/75">{project.need}</dd>
      </div>
      <div>
        <dt className="eyebrow mb-2">What I delivered</dt>
        <dd className="text-ink/75">{project.delivered}</dd>
      </div>
    </dl>
  );
}

function CaseActions({ project, onPreview }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="link-rule font-medium">
        Visit {project.url}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
        onClick={() => onPreview(project)}
      >
        <Maximize2 className="h-3.5 w-3.5" />
        Live preview
      </button>
    </div>
  );
}

function Stack({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  );
}

// Wide editorial layout: large desktop frame with an overlapping phone.
export function CaseStudyWide({ index, project, onPreview }) {
  return (
    <article className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
      <MotionReveal className="relative lg:col-span-8">
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block" tabIndex={-1}>
          <BrowserFrame
            url={project.url}
            src={project.image}
            alt={`${project.name} — desktop home page`}
            className="sm:mr-[9%]"
            imageClassName="transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />
        </a>
        {project.mobileImage ? (
          <motion.div
            className="absolute -bottom-8 right-0 hidden w-[22%] sm:block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <PhoneFrame src={project.mobileImage} alt={`${project.name} — mobile view`} />
          </motion.div>
        ) : null}
      </MotionReveal>

      <MotionReveal className="lg:col-span-4 lg:pt-2" delay={0.1}>
        <CaseMeta index={index} project={project} />
        <h3 className="display-md mt-6 text-balance">{project.title}</h3>
        <CaseBody project={project} className="mt-8" />
        <div className="mt-8 space-y-6 border-t pt-6">
          <Stack items={project.stack} />
          <CaseActions project={project} onPreview={onPreview} />
        </div>
      </MotionReveal>
    </article>
  );
}

// Compact layout used in the two-up row.
export function CaseStudyCard({ index, project, onPreview, className }) {
  return (
    <MotionReveal as={motion.article} className={className}>
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block" tabIndex={-1}>
        <BrowserFrame
          url={project.url}
          src={project.image}
          alt={`${project.name} — home page`}
          imageClassName="transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        />
      </a>
      <div className="mt-8">
        <CaseMeta index={index} project={project} />
        <h3 className="mt-5 max-w-[24ch] text-balance font-display text-2xl font-semibold leading-[1.08] tracking-tight md:text-[1.75rem]">
          {project.title}
        </h3>
        <CaseBody project={project} className="mt-6 sm:grid-cols-2" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-5">
          <Stack items={project.stack} />
          <CaseActions project={project} onPreview={onPreview} />
        </div>
      </div>
    </MotionReveal>
  );
}
