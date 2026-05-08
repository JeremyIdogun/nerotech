import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const sectors = [
  {
    name: "Government and public institutions",
    need: "Stronger governance, accountability and institutional performance.",
    help: "Procurement reform, PFM advisory, compliance frameworks and digital transformation for agencies and ministries.",
  },
  {
    name: "Development partners and NGOs",
    need: "Evidence-led delivery, monitoring and capacity transfer.",
    help: "MEL systems, institutional strengthening, programme advisory and data infrastructure for development work.",
  },
  {
    name: "Private sector organisations",
    need: "Digital capability, security and operational improvement.",
    help: "Software delivery, cybersecurity, data systems and digital transformation aligned to business objectives.",
  },
  {
    name: "Agribusiness and growth sectors",
    need: "Value chain visibility and sector-specific technical support.",
    help: "Agribusiness advisory, data systems for value chains, and sector-focused capacity building programmes.",
  },
];

export function SectorSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Sectors we serve"
          title="Built for institutions where delivery, accountability and trust matter."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="rounded-3xl border border-[#E5ECEC] p-8"
            >
              <h3 className="font-heading mb-4 text-lg font-bold text-[#18232F]">
                {sector.name}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
                    What they need
                  </p>
                  <p className="text-sm leading-6 text-[#6B7280]">{sector.need}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
                    How NeroTech helps
                  </p>
                  <p className="text-sm leading-6 text-[#6B7280]">{sector.help}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
