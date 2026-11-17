import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";

const sectors = [
  {
    name: "Government and public institutions",
    description:
      "Procurement reform, PFM advisory, compliance frameworks and digital transformation for agencies and ministries that need stronger governance, accountability and institutional performance.",
  },
  {
    name: "Development partners and NGOs",
    description:
      "MEL systems, institutional strengthening, programme advisory and data infrastructure for development organisations requiring evidence-led delivery, monitoring and capability transfer.",
  },
  {
    name: "Private sector organisations",
    description:
      "Software delivery, cybersecurity, data systems and digital transformation aligned to business objectives — for organisations that need digital capability, security and operational improvement.",
  },
  {
    name: "Agribusiness and growth sectors",
    description:
      "Agribusiness advisory, data systems for value chains, and sector-focused capacity building programmes to improve value chain visibility and technical capabilities.",
  },
];

export function SectorSection() {
  return (
    <section className="bg-white py-20 px-5 sm:px-6 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="mb-12">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.20em] text-nerotech-teal">
              Sectors we serve
            </p>
            <h2 className="font-heading max-w-[560px] text-[38px] font-extrabold leading-[1.1] tracking-[-0.028em] text-nerotech-charcoal">
              Built for institutions where delivery, accountability and trust matter.
            </h2>
          </div>
        </Reveal>

        {/* Cards grid */}
        <Stagger gap={0.09} className="grid gap-4 sm:grid-cols-2">
          {sectors.map((sector, i) => (
            <div
              key={sector.name}
              className="h-full border border-nerotech-soft-grey p-8"
            >
              {/* Header row with index */}
              <div className="mb-2.5 flex items-start justify-between">
                <h3 className="font-heading text-[15px] font-semibold text-nerotech-charcoal">
                  {sector.name}
                </h3>
                <span className="font-heading ml-4 shrink-0 text-[11px] font-bold text-nerotech-teal/[0.4]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-[13px] leading-[1.72] text-nerotech-mid-grey">
                {sector.description}
              </p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
