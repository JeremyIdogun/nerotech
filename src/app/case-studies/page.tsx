import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Case Studies",
  "NeroTech case study library — governance reform, digital platforms, cybersecurity and capacity building.",
);

const categories = [
  "Governance and reform",
  "Data and digital platforms",
  "Cybersecurity and software",
  "Capacity building and development programmes",
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-[#F3F7F7] py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
              Case studies
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[#18232F] sm:text-5xl">
              Case studies are being prepared.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              NeroTech&apos;s case study library will focus on practical evidence: the
              challenge, the system improved, the approach taken and the outcome delivered.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
            Future focus areas
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat}
                className="rounded-2xl border border-[#E5ECEC] p-6"
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-[#12A3A2]" />
                <p className="font-heading text-base font-bold text-[#18232F]">{cat}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-[#6B7280]">
            Case studies will be published as NeroTech&apos;s project portfolio grows. Check
            back for updates.
          </p>
        </Container>
      </section>

      <CTASection
        title="Working on a transformation programme?"
        body="Let's talk about how NeroTech can support delivery and help you build a strong evidence trail."
      />
    </>
  );
}
