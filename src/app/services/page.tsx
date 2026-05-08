import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/content/services";
import { iconMap } from "@/lib/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Services",
  "NeroTech organises its broad capability into four connected service pillars, making it easier for clients to move from complex challenges to structured delivery.",
);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#F3F7F7] py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
              Services
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[#18232F] sm:text-5xl">
              Services designed around stronger institutions and better delivery.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              NeroTech organises its broad capability into four connected service pillars,
              making it easier for clients to move from complex challenges to structured
              delivery.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="space-y-8">
            {services.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <div
                  key={service.slug}
                  className="grid gap-8 rounded-3xl border border-[#E5ECEC] p-8 lg:grid-cols-[1fr_2fr]"
                >
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#12A3A2]/10">
                      {Icon ? <Icon size={24} className="text-[#12A3A2]" /> : null}
                    </div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
                      {service.eyebrow}
                    </p>
                    <h2 className="font-heading text-xl font-bold text-[#18232F]">
                      {service.title}
                    </h2>
                  </div>

                  <div>
                    <p className="mb-6 text-base leading-8 text-[#6B7280]">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <p className="mb-3 text-sm font-semibold text-[#18232F]">
                        Key capabilities
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-2 text-sm text-[#6B7280]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#12A3A2]" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#12A3A2] hover:text-[#0D6E70]"
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure where your challenge fits?"
        body="Start a conversation and we'll help you find the right approach."
        cta="Start a conversation"
      />
    </>
  );
}
