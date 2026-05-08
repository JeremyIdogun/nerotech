import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

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

export function ApproachSection() {
  return (
    <section className="bg-[#F3F7F7] py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Our approach"
          title="From complexity to clarity, then from strategy to delivery."
          description="We combine advisory thinking with practical implementation, helping clients move from complexity to clarity and from strategy to measurable delivery."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mb-4 font-heading text-5xl font-bold text-[#12A3A2]/20">
                {step.number}
              </div>
              <h3 className="font-heading mb-3 text-lg font-bold text-[#18232F]">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-[#6B7280]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
