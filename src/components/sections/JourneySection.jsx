import { motion } from "framer-motion";
import { journey } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function JourneySection() {
  return (
    <section id="more" className="border-t bg-raised py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="04"
          label="Beyond the code"
          title={
            <>
              More about <span className="accent-serif">Amen.</span>
            </>
          }
        >
          Years of leading teams, pitching on stage and mentoring others — the part of my work that happens away from
          the keyboard.
        </SectionHeading>

        <motion.ol
          className="mt-14 border-t border-ink/30 md:mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {journey.map((item) => (
            <motion.li
              key={item.organisation}
              variants={staggerItem}
              className="group relative grid gap-x-8 gap-y-4 border-b py-8 md:py-10 lg:grid-cols-12"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-5 w-0.5 origin-top scale-y-0 bg-signal transition-transform duration-500 ease-out group-hover:scale-y-100 sm:-left-8 lg:-left-6"
              />
              <p className="font-mono text-xs text-muted lg:col-span-3 lg:pt-2">
                {item.date}
                <span className="ml-3 text-signal-deep lg:ml-0 lg:mt-2 lg:block">{item.duration}</span>
              </p>

              <div className="lg:col-span-4">
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight md:text-[1.75rem]">
                  {item.organisation}
                </h3>
                <p className="mt-2 text-[0.9375rem] text-ink/75">{item.role}</p>
                <p className="mt-1 font-mono text-[0.6875rem] text-muted">{item.place}</p>
              </div>

              <div className="lg:col-span-5">
                <p className="leading-relaxed text-ink/75">{item.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.takeaways.map((takeaway) => (
                    <li key={takeaway} className="chip">
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
