import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Services",
  "NeroTech organises its broad capability into four connected service pillars, making it easier for clients to move from complex challenges to structured delivery.",
);
import { services } from "@/content/services";

const anchorIds = [
  "governance",
  "data-digital",
  "cybersecurity",
  "capacity-building",
];

const approachSteps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Understand the institution, operating model, systems, risks and decision environment.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Shape practical strategies, frameworks, architectures and delivery plans.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Implement systems, processes, products and governance improvements.",
  },
  {
    number: "04",
    title: "Transfer",
    description:
      "Build internal capability so change can be sustained after the engagement.",
  },
];

export default function ServicesPage() {
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
                Our services
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.10}>
            <h1 className="font-heading mb-6 max-w-[820px] text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-[60px]">
              Four connected pillars. One{" "}
              <span className="text-nerotech-teal">joined-up delivery model</span>{" "}
              for practical transformation.
            </h1>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="max-w-[580px] text-[16.5px] leading-[1.78] text-white/60">
              NeroTech organises its broad capability into four connected service
              pillars, making it easier for clients to move from complex challenges to
              structured delivery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky anchor nav */}
      <nav
        className="sticky top-[68px] z-40 border-b border-nerotech-soft-grey bg-nerotech-off-white px-5 py-5 sm:px-6 lg:px-14"
        aria-label="Service pillars"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-6">
            {services.map((service, i) => (
              <a
                key={service.slug}
                href={`#${anchorIds[i]}`}
                className="inline-flex items-center gap-2 text-[12.5px] font-medium text-nerotech-charcoal transition-colors hover:text-nerotech-teal"
              >
                <span className="font-heading text-[10.5px] font-bold tracking-[0.08em] text-nerotech-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Pillar detail blocks */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={anchorIds[i]}
          className={`px-5 py-20 sm:px-6 lg:px-14 ${
            i % 2 === 0 ? "bg-white" : "bg-nerotech-off-white"
          } ${i > 0 ? "border-t border-nerotech-soft-grey" : ""}`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              {/* Left col */}
              <Reveal>
                <div>
                  <p className="font-heading mb-2 text-[96px] font-extrabold leading-none tracking-[-0.06em] text-nerotech-teal/[0.08]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-nerotech-teal">
                    {service.eyebrow}
                  </p>
                  <h2 className="font-heading mb-4.5 text-[30px] font-extrabold leading-[1.22] tracking-[-0.025em] text-nerotech-charcoal">
                    {service.title}
                  </h2>
                  <p className="mb-7 max-w-[460px] text-[15px] leading-[1.78] text-nerotech-mid-grey">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-semibold text-nerotech-teal transition-colors hover:text-nerotech-dark-teal"
                  >
                    View full capability →
                  </Link>
                </div>
              </Reveal>

              {/* Right col — capabilities grid */}
              <Reveal delay={0.12}>
                <div>
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-nerotech-charcoal/55">
                    Capabilities
                  </p>
                  <div className="border border-nerotech-soft-grey">
                    <div className="grid grid-cols-2">
                      {service.capabilities.map((cap, ci) => (
                        <div
                          key={cap}
                          className={`flex items-center gap-3 p-5 text-[13.5px] font-medium text-nerotech-charcoal ${
                            ci % 2 === 0 ? "border-r border-nerotech-soft-grey" : ""
                          } ${ci >= 2 ? "border-t border-nerotech-soft-grey" : ""}`}
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-nerotech-teal" />
                          {cap}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Approach — dark variant */}
      <section className="relative overflow-hidden bg-nerotech-charcoal px-5 py-20 sm:px-6 lg:px-14">
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
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.20em] text-nerotech-teal">
                Our delivery model
              </p>
              <h2 className="font-heading max-w-[560px] text-[38px] font-extrabold leading-[1.1] tracking-[-0.028em] text-white">
                The same four phases across every engagement.
              </h2>
            </div>
          </Reveal>

          {/* Steps with connector line */}
          <div className="relative">
            {/* Connector line */}
            <div
              aria-hidden="true"
              className="absolute left-[3%] right-[3%] top-[19px] z-0 hidden h-px lg:block"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(18,163,162,0.30), transparent)",
              }}
            />
            <div className="relative z-10 grid grid-cols-2 gap-7 lg:grid-cols-4">
              {approachSteps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.09}>
                  <div>
                    {/* Circle with number */}
                    <div className="mb-5.5 flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-nerotech-teal/50 bg-nerotech-charcoal">
                      <span className="font-heading text-xs font-bold text-nerotech-teal">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-heading mb-2.5 text-[17px] font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-[13px] leading-[1.72] text-white/48">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Not sure which pillar fits? Let's scope it together."
        body="Tell us what you're trying to move forward. We'll come back with a clear view on which capabilities apply and how an engagement would run."
      />
    </>
  );
}
