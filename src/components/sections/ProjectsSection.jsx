import { useState } from "react";
import { caseStudies } from "@/data/portfolio";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CaseStudyCard, CaseStudyWide } from "@/components/work/CaseStudy";
import { GarkCase } from "@/components/work/GarkCase";
import { PipelineCard } from "@/components/work/PipelineCard";
import { PreviewDialog } from "@/components/work/PreviewDialog";
import { WorkIndex } from "@/components/work/WorkIndex";

export function ProjectsSection() {
  const [preview, setPreview] = useState(null);
  const [wide, ...pair] = caseStudies;

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="01"
          label="Selected work"
          title={
            <>
              Real products, <span className="accent-serif">in production.</span>
            </>
          }
        >
          Seven projects across SaaS, bookings and brand websites. Every site below is live — open one and click around.
        </SectionHeading>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-40">
          <GarkCase onPreview={setPreview} />

          <CaseStudyWide index="02" project={wide} onPreview={setPreview} />

          <div className="grid gap-20 md:grid-cols-2 md:gap-10 lg:gap-16">
            <CaseStudyCard index="03" project={pair[0]} onPreview={setPreview} />
            <CaseStudyCard index="04" project={pair[1]} onPreview={setPreview} className="md:mt-28" />
          </div>

          <div>
            <MotionReveal className="mb-8 flex items-end justify-between gap-6">
              <h3 className="display-md">More live work</h3>
              <p className="eyebrow hidden pb-2 sm:block">Client &amp; brand websites</p>
            </MotionReveal>
            <WorkIndex />
          </div>

          <PipelineCard />
        </div>
      </div>

      <PreviewDialog preview={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
