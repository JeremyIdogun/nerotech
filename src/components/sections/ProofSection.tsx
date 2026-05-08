import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const proofCards = [
  {
    label: "Case studies in development",
    description:
      "Documented delivery stories from governance reform, digital platforms and capacity programmes.",
  },
  {
    label: "Delivery methodology",
    description:
      "A structured four-phase approach: Diagnose, Design, Deliver, Transfer — applied across every engagement.",
  },
  {
    label: "Sector-specific insight",
    description:
      "Practical perspectives on public sector reform, data systems, cybersecurity and development delivery.",
  },
  {
    label: "Capability transfer",
    description:
      "Programmes designed to build lasting internal capability, not just deliver outputs and exit.",
  },
];

export function ProofSection() {
  return (
    <section className="bg-[#18232F] py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Evidence-led by design"
          title="Evidence-led by design."
          description="As NeroTech enters its next chapter, our digital presence will grow around proof: case studies, delivery stories, client outcomes and practical insight."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proofCards.map((card) => (
            <div
              key={card.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-3 h-1 w-8 rounded-full bg-[#12A3A2]" />
              <h3 className="font-heading mb-3 text-base font-bold text-white">
                {card.label}
              </h3>
              <p className="text-sm leading-6 text-white/60">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
