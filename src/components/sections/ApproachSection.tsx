import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";

interface ApproachSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Understand the institution, operating model, systems, risks and decision environment.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Shape practical strategies, frameworks, architectures and delivery plans.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Implement systems, processes, products and governance improvements.",
  },
  {
    number: "04",
    title: "Transfer",
    description:
      "Build internal capability so change can be sustained after the engagement.",
  },
];

export function ApproachSection({
  eyebrow = "Our approach",
  title = "From complexity to clarity, then from strategy to delivery.",
  description = "We combine advisory thinking with practical implementation, helping clients move from complexity to clarity and from strategy to measurable delivery.",
}: ApproachSectionProps) {
  return (
    <section className="bg-nerotech-off-white py-20 px-5 sm:px-6 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="mb-13">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.20em] text-nerotech-teal">
              {eyebrow}
            </p>
            <h2 className="font-heading max-w-[560px] text-[38px] font-extrabold leading-[1.1] tracking-[-0.028em] text-nerotech-charcoal">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-[540px] text-[15px] leading-[1.78] text-nerotech-mid-grey">
                {description}
              </p>
            )}
          </div>
        </Reveal>

        {/* Steps grid */}
        <Stagger gap={0.09} className="grid grid-cols-2 gap-7 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              {/* Oversized ghost number */}
              <p className="font-heading -mb-3.5 text-[84px] font-extrabold leading-none tracking-[-0.06em] text-nerotech-teal/[0.075]">
                {step.number}
              </p>
              {/* Teal divider */}
              <div className="mt-5 border-t-2 border-nerotech-teal pt-5">
                <h3 className="font-heading mb-2.5 text-[18px] font-bold text-nerotech-charcoal">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.72] text-nerotech-mid-grey">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
