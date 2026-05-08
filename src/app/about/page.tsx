import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "About NeroTech",
  "NeroTech Consulting Limited helps institutions strengthen governance, modernise systems and deliver practical change through advisory, digital capability and implementation support.",
);

const values = [
  {
    name: "Clarity",
    description: "We bring structure and precision to complex problems.",
  },
  {
    name: "Integrity",
    description: "We operate with transparency, honesty and professional rigour.",
  },
  {
    name: "Capability",
    description: "We build teams, tools and systems that genuinely work.",
  },
  {
    name: "Impact",
    description: "We measure success by outcomes delivered, not activities completed.",
  },
  {
    name: "Sustainability",
    description: "We design change that lasts beyond the engagement.",
  },
];

const reasons = [
  "Advisory thinking combined with hands-on technical delivery",
  "Deep understanding of public sector and development programme contexts",
  "Nigerian-rooted with sub-Saharan regional ambition",
  "Structured delivery model with clear phases and knowledge transfer",
  "Cross-sector experience across governance, digital, data and capacity",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#F3F7F7] py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
              About
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[#18232F] sm:text-5xl">
              A consulting-first firm built for institutional transformation.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              NeroTech Consulting Limited helps institutions strengthen governance, modernise
              systems and improve performance through advisory, technology, data and
              implementation support.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeader
              eyebrow="Our story"
              title="From technical heritage to transformation partner."
            />
            <p className="text-base leading-8 text-[#6B7280] lg:pt-10">
              NeroTech began with a strong technology foundation. Its next chapter expands
              that foundation into a broader consulting mandate: public sector advisory,
              institutional reform, data systems, cybersecurity, software delivery,
              development consulting and capacity building.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#F3F7F7] py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
                Mission
              </p>
              <p className="font-heading text-xl font-bold leading-relaxed text-[#18232F]">
                To help public and private institutions build stronger systems, smarter
                decisions and sustainable performance through consulting, technology and data.
              </p>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
                Vision
              </p>
              <p className="font-heading text-xl font-bold leading-relaxed text-[#18232F]">
                To become a trusted African consulting partner for governance reform, digital
                transformation and institutional performance improvement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our values"
            title="The principles that guide our work."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div key={value.name} className="rounded-2xl border border-[#E5ECEC] p-6">
                <div className="mb-3 h-1 w-8 rounded-full bg-[#12A3A2]" />
                <h3 className="font-heading mb-2 text-base font-bold text-[#18232F]">
                  {value.name}
                </h3>
                <p className="text-sm leading-6 text-[#6B7280]">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F3F7F7] py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Why NeroTech"
            title="What makes NeroTech different."
          />
          <ul className="mt-10 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#12A3A2]/15">
                  <span className="h-2 w-2 rounded-full bg-[#12A3A2]" />
                </span>
                <span className="text-base text-[#6B7280]">{reason}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
