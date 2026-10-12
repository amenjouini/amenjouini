import { motion } from "framer-motion";
import { coreStack, stackGroups } from "@/data/portfolio";
import { MotionReveal, staggerContainer, staggerItem } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="03"
          label="Stack"
          title={
            <>
              The tools I reach for <span className="accent-serif">every day.</span>
            </>
          }
        />

        {/* Core stack, set large */}
        <motion.ul
          className="mt-14 flex flex-wrap gap-x-5 gap-y-1 md:mt-20 md:gap-x-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {coreStack.map((item, index) => (
            <motion.li
              key={item}
              variants={staggerItem}
              className="group flex items-start gap-1.5 font-display text-[clamp(1.9rem,5.4vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
            >
              <span className="cursor-default transition-colors duration-300 group-hover:text-signal">{item}</span>
              <span className="mt-[0.5em] font-mono text-[0.625rem] font-normal tracking-normal text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Full toolbox as a spec sheet */}
        <MotionReveal as={motion.dl} className="mt-16 border-t border-ink/30 md:mt-24">
          {stackGroups.map((group) => (
            <div key={group.label} className="grid gap-x-8 gap-y-3 border-b py-5 md:grid-cols-12 md:py-6">
              <dt className="eyebrow md:col-span-3 md:pt-2">{group.label}</dt>
              <dd className="md:col-span-9">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip bg-raised px-3 py-1.5 text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
