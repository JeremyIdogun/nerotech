import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/content/services";
import { iconMap } from "@/lib/icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = iconMap[service.iconName];
  const related = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="bg-[#F3F7F7] py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#12A3A2]/10">
              {Icon ? <Icon size={24} className="text-[#12A3A2]" /> : null}
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
              {service.eyebrow}
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[#18232F] sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">{service.description}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
                Outcomes
              </p>
              <ul className="space-y-4">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#12A3A2]/15">
                      <span className="h-2 w-2 rounded-full bg-[#12A3A2]" />
                    </span>
                    <span className="text-base leading-7 text-[#6B7280]">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
                Capabilities
              </p>
              <ul className="space-y-3">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#12A3A2]" />
                    <span className="text-base text-[#6B7280]">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F3F7F7] py-20 sm:py-28">
        <Container>
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
            Related pillars
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((s) => {
              const RelIcon = iconMap[s.iconName];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-[#E5ECEC] bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#12A3A2]/10">
                    {RelIcon ? <RelIcon size={18} className="text-[#12A3A2]" /> : null}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-[#18232F] group-hover:text-[#12A3A2]">
                      {s.title}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs text-[#12A3A2]">
                      Explore <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Need support with ${service.title.toLowerCase()}?`}
        body="Let's clarify the challenge, shape the right approach and define a practical path to delivery."
      />
    </>
  );
}
