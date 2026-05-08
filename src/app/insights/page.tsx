import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Insights",
  "Practical perspectives on governance, data, digital transformation, cybersecurity, institutional performance and development delivery.",
);

const placeholderTopics = [
  {
    title: "What makes digital transformation sustainable in public institutions?",
    area: "Digital transformation",
  },
  {
    title: "Why governance reform needs better data systems",
    area: "Governance",
  },
  {
    title: "Moving from dashboards to decision environments",
    area: "Data systems",
  },
  {
    title: "Building capability, not dependency",
    area: "Capacity building",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-[#F3F7F7] py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
              Insights
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[#18232F] sm:text-5xl">
              Insights for stronger systems and smarter delivery.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              NeroTech will publish practical perspectives on governance, data, digital
              transformation, cybersecurity, institutional performance and development
              delivery.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
            Upcoming topics
          </p>
          <div className="space-y-4">
            {placeholderTopics.map((topic) => (
              <div
                key={topic.title}
                className="flex items-start gap-6 rounded-2xl border border-[#E5ECEC] p-6"
              >
                <span className="mt-0.5 shrink-0 rounded-full bg-[#12A3A2]/10 px-3 py-1 text-xs font-semibold text-[#0D6E70]">
                  {topic.area}
                </span>
                <p className="font-heading text-base font-bold text-[#18232F]">
                  {topic.title}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-[#6B7280]">
            Articles will be published as NeroTech&apos;s thought leadership programme
            develops. These topics are indicative of the areas we will cover.
          </p>
        </Container>
      </section>

      <CTASection
        title="Have a question or topic you'd like us to address?"
        body="Reach out and let us know what's on your mind. We'd be happy to discuss it."
      />
    </>
  );
}
