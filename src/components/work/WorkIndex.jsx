import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { moreWork } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/components/MotionReveal";

// Compact index of the remaining live sites.
export function WorkIndex({ startAt = 5 }) {
  return (
    <motion.ul
      className="border-t border-ink/30"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {moreWork.map((project, index) => (
        <motion.li key={project.id} variants={staggerItem} className="border-b">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 py-5 transition-colors duration-300 hover:bg-ink/[0.03] sm:gap-x-6 md:grid-cols-[3rem_9rem_1.3fr_1fr_auto] md:py-6 md:pr-2"
          >
            <span className="hidden font-mono text-xs text-muted md:block">0{startAt + index}</span>

            <span className="row-span-2 block w-24 overflow-hidden rounded-md border bg-raised sm:w-32 md:row-span-1 md:w-auto">
              <img
                src={project.image}
                alt=""
                width={1440}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </span>

            <span className="font-display text-xl font-semibold leading-tight tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-3xl">
              {project.name}
            </span>

            <span className="col-start-2 text-sm text-muted md:col-start-auto">
              {project.kind}
              <span className="mt-1 hidden font-mono text-[0.6875rem] md:block">{project.stack.join(" · ")}</span>
            </span>

            <span className="col-start-3 row-span-2 row-start-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 ease-out group-hover:border-signal group-hover:bg-signal group-hover:text-white md:col-start-auto md:row-span-1 md:row-start-auto">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              <span className="sr-only">Open {project.url} in a new tab</span>
            </span>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
