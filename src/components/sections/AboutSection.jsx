import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { about, education, languages, process, profile, services } from "@/data/portfolio";
import { MotionReveal, staggerContainer, staggerItem } from "@/components/MotionReveal";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="border-y bg-raised py-24 md:py-36">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <MotionReveal className="lg:col-span-4">
            <p className="eyebrow flex items-center gap-3">
              <span className="text-signal-deep">02</span>
              <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
              Profile
            </p>

            <figure className="crop-marks mt-10 w-48 sm:w-56 lg:w-[78%]">
              <div className="overflow-hidden bg-[#eeeeee]">
                <img
                  src={profile.portrait}
                  alt={`Portrait of ${profile.name}`}
                  width={293}
                  height={292}
                  loading="lazy"
                  className="aspect-square w-full object-cover grayscale transition duration-700 ease-out hover:grayscale-0"
                />
              </div>
              <figcaption className="mt-3 flex justify-between font-mono text-[0.6875rem] text-muted">
                <span>{profile.name}</span>
                <span>{profile.location}</span>
              </figcaption>
            </figure>
          </MotionReveal>

          <div className="lg:col-span-8">
            <MotionReveal>
              <h2 className="display-lg max-w-[16ch] text-balance">
                From Tunisian roots to <span className="accent-serif">global impact.</span>
              </h2>
            </MotionReveal>

            <MotionReveal className="mt-10 grid gap-6 md:grid-cols-2 md:gap-10" delay={0.1}>
              <p className="lede">{about.paragraphs[0]}</p>
              <div>
                <p className="leading-relaxed text-ink/75">{about.paragraphs[1]}</p>
                <Button asChild variant="outline" className="mt-8">
                  <a href={profile.cv.href} download={profile.cv.filename}>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </MotionReveal>
          </div>
        </div>

        {/* What I deliver */}
        <div className="mt-24 md:mt-32">
          <MotionReveal className="flex items-end justify-between gap-6 border-b border-ink/30 pb-5">
            <h3 className="display-md">What I can build for you</h3>
            <p className="eyebrow hidden pb-2 sm:block">Services</p>
          </MotionReveal>
          <motion.ul
            className="grid sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {services.map((service, index) => (
              <motion.li
                key={service.title}
                variants={staggerItem}
                className="group border-b py-8 sm:odd:pr-8 sm:even:border-l sm:even:pl-8 lg:border-b-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="font-mono text-[0.6875rem] text-signal-deep">0{index + 1}</span>
                <h4 className="mt-4 font-display text-2xl lg:mt-10 font-semibold leading-tight tracking-tight transition-colors duration-300 group-hover:text-signal-deep">
                  {service.title}
                </h4>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/70">{service.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* How I work + credentials */}
        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-8">
          <MotionReveal className="lg:col-span-5">
            <h3 className="eyebrow">How a project runs</h3>
            <ol className="mt-6">
              {process.map((item) => (
                <li key={item.step} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t py-5 last:border-b">
                  <span className="pt-1 font-mono text-xs text-muted">{item.step}</span>
                  <div>
                    <h4 className="font-display text-xl font-semibold tracking-tight">{item.title}</h4>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink/70">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </MotionReveal>

          <MotionReveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <h3 className="eyebrow">Education</h3>
            <ul className="mt-6">
              {education.map((item) => (
                <li key={item.school} className="grid gap-x-6 gap-y-1 border-t py-5 sm:grid-cols-[7.5rem_1fr]">
                  <span className="pt-1 font-mono text-xs text-muted">{item.date}</span>
                  <div>
                    <h4 className="font-display text-xl font-semibold tracking-tight">{item.degree}</h4>
                    <p className="mt-1.5 text-[0.9375rem] text-ink/70">
                      {item.school}, {item.place}
                      {item.note ? <span className="text-signal-deep"> — {item.note}</span> : null}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="eyebrow mt-10 border-t pt-8">Languages</h3>
            <ul className="mt-5 grid grid-cols-3 gap-4">
              {languages.map((language) => (
                <li key={language.name}>
                  <p className="font-display text-xl font-semibold tracking-tight">{language.name}</p>
                  <p className="mt-1 font-mono text-[0.6875rem] leading-snug text-muted">{language.level}</p>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
