import type { Metadata } from "next";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "About NeroTech",
  "NeroTech Consulting Limited helps institutions strengthen governance, modernise systems and deliver practical change through advisory, digital capability and implementation support.",
);

const values = [
  {
    number: "01",
    title: "Evidence-led",
    description:
      "We work from data, diagnostics and documented context — not assumptions. Every recommendation can be traced back to what we observed.",
  },
  {
    number: "02",
    title: "Practical delivery",
    description:
      "Strategy is only useful if it ships. We measure ourselves on the systems, processes and capabilities our clients actually use after we leave.",
  },
  {
    number: "03",
    title: "Capability transfer",
    description:
      "We design every engagement so the institution is stronger when we hand over. No black-box solutions, no dependency by design.",
  },
  {
    number: "04",
    title: "Discretion & trust",
    description:
      "We operate where governance, accountability and reputation matter. Confidentiality, integrity and clear communication are non-negotiable.",
  },
];

const teamCards = [
  { practice: "Practice", role: "Public Sector Advisory", description: "Governance, procurement reform and institutional performance." },
  { practice: "Practice", role: "Data & Technology", description: "Data architecture, analytics and digital transformation." },
  { practice: "Practice", role: "Cybersecurity & Software", description: "Secure systems, software delivery and platform engineering." },
  { practice: "Practice", role: "Capacity Building", description: "Training, mentorship and institutional strengthening." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-nerotech-charcoal px-5 py-[88px] sm:px-6 lg:px-14">
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(18,163,162,0.10) 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[600px] w-[700px]"
          style={{
            background:
              "radial-gradient(ellipse at 75% 15%, rgba(18,163,162,0.12), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-nerotech-teal/[0.27] bg-nerotech-teal/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-nerotech-teal" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nerotech-teal">
                About NeroTech
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.10}>
            <h1 className="font-heading mb-6 max-w-[820px] text-4xl font-extrabold leading-[1.1] tracking-[-0.033em] text-white sm:text-5xl lg:text-[54px]">
              A consulting practice built for institutions where{" "}
              <span className="text-nerotech-teal">
                delivery, accountability and trust matter
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="max-w-[700px] text-[17px] leading-[1.78] text-white/60">
              NeroTech Consulting Limited helps institutions strengthen governance,
              modernise systems and improve performance through advisory, technology,
              data and implementation support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white px-5 py-[88px] sm:px-6 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-15">
            <Reveal>
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.20em] text-nerotech-teal">
                  Our mission
                </p>
                <h2 className="font-heading mb-4.5 text-[30px] font-extrabold leading-[1.22] tracking-[-0.025em] text-nerotech-charcoal">
                  Strengthen the institutions that shape lives.
                </h2>
                <p className="text-[15px] leading-[1.78] text-nerotech-mid-grey">
                  To help institutions translate complex challenges into clear strategies,
                  well-designed systems and measurable delivery — combining advisory
                  thinking, technical execution and capability transfer in one joined-up
                  model.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.20em] text-nerotech-teal">
                  Our vision
                </p>
                <h2 className="font-heading mb-4.5 text-[30px] font-extrabold leading-[1.22] tracking-[-0.025em] text-nerotech-charcoal">
                  A trusted partner for transformation across Africa.
                </h2>
                <p className="text-[15px] leading-[1.78] text-nerotech-mid-grey">
                  To be the consulting partner reform-minded leaders turn to when stakes
                  are high, systems are complex and outcomes have to be earned — across
                  public, development and private sectors.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="bg-nerotech-off-white px-5 py-[52px] sm:px-6 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                { value: "4", label: "Service pillars" },
                { value: "4", label: "Client sectors" },
                { value: "Multi-disciplinary", label: "Team composition" },
                { value: "Benin City", label: "Headquartered in" },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  className={`py-6 pr-6 ${i < arr.length - 1 ? "border-r border-nerotech-soft-grey mr-6" : ""}`}
                >
                  <p className="font-heading mb-1.5 text-[36px] font-extrabold leading-none tracking-[-0.025em] text-nerotech-teal">
                    {item.value}
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nerotech-mid-grey">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-white px-5 py-[88px] sm:px-6 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.20em] text-nerotech-teal">
                What we stand for
              </p>
              <h2 className="font-heading max-w-[720px] text-[38px] font-extrabold leading-[1.1] tracking-[-0.028em] text-nerotech-charcoal">
                Four principles that shape how we work.
              </h2>
            </div>
          </Reveal>

          {/* 2×2 bordered grid */}
          <Reveal delay={0.1}>
            <div className="border border-nerotech-soft-grey">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {values.map((value, i) => (
                  <div
                    key={value.title}
                    className={`p-8 ${
                      i % 2 === 0 ? "border-r border-nerotech-soft-grey" : ""
                    } ${i >= 2 ? "border-t border-nerotech-soft-grey" : ""}`}
                  >
                    <p className="font-heading mb-3.5 text-[32px] font-extrabold leading-none tracking-[-0.04em] text-nerotech-teal/[0.09]">
                      {value.number}
                    </p>
                    <h3 className="font-heading mb-3 text-[19px] font-bold text-nerotech-charcoal">
                      {value.title}
                    </h3>
                    <p className="max-w-[500px] text-sm leading-[1.78] text-nerotech-mid-grey">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <ApproachSection
        eyebrow="How we work"
        title="A four-phase delivery model applied to every engagement."
        description="Consistent structure, practical execution — from the first diagnostic to the final handover."
      />

      {/* Team placeholder */}
      <section className="bg-white px-5 py-[88px] sm:px-6 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.20em] text-nerotech-teal">
                  Our team
                </p>
                <h2 className="font-heading max-w-[420px] text-[38px] font-extrabold leading-[1.1] tracking-[-0.028em] text-nerotech-charcoal">
                  Practice leads across four disciplines.
                </h2>
              </div>
              <p className="text-right text-[13px] leading-[1.7] text-nerotech-mid-grey sm:max-w-[260px]">
                Portraits and full bios will be published before launch.
              </p>
            </div>
          </Reveal>

          <Stagger gap={0.09} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {teamCards.map((card) => (
              <div key={card.role} className="border border-nerotech-soft-grey p-6">
                {/* Portrait placeholder */}
                <div className="relative mb-4.5 flex aspect-square items-center justify-center border border-nerotech-soft-grey bg-gradient-to-br from-nerotech-soft-grey to-nerotech-off-white">
                  <span className="font-heading text-[36px] font-extrabold tracking-[-0.03em] text-nerotech-teal/[0.16]">
                    NT
                  </span>
                </div>
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-nerotech-teal">
                  {card.practice}
                </p>
                <h3 className="font-heading mb-1.5 text-sm font-semibold leading-[1.4] text-nerotech-charcoal">
                  {card.role}
                </h3>
                <p className="text-xs leading-[1.6] text-nerotech-mid-grey">
                  {card.description}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Looking for a partner who actually delivers?"
        body="Tell us about the institution, the problem and the outcome you need. We'll come back with a focused, practical conversation."
      />
    </>
  );
}
