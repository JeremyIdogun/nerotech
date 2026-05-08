import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/content/services";
import { iconMap } from "@/lib/icons";

export function PillarsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Service pillars"
          title="Four connected pillars for practical transformation."
          description="NeroTech brings advisory thinking, technical execution and capability transfer into one joined-up delivery model."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={service.slug}
                className="group flex flex-col rounded-3xl border border-[#E5ECEC] bg-[#F3F7F7] p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#12A3A2]/10">
                  {Icon ? <Icon size={22} className="text-[#12A3A2]" /> : null}
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
                  {service.eyebrow}
                </p>
                <h3 className="font-heading mb-3 text-base font-bold text-[#18232F]">
                  {service.title}
                </h3>
                <p className="mb-6 grow text-sm leading-6 text-[#6B7280]">
                  {service.summary}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#12A3A2] transition-colors hover:text-[#0D6E70]"
                >
                  Explore pillar <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
