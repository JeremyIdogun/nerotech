import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "4", label: "Service pillars" },
  { value: "4", label: "Sectors served" },
  { value: "4-phase", label: "Methodology" },
  { value: "Nigeria", label: "Headquarters" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-nerotech-charcoal py-[88px] px-5 sm:px-6 lg:px-14">
      {/* Dot grid background */}
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
        <div className="max-w-[820px]">
          {/* Eyebrow chip */}
          <Reveal delay={0}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-nerotech-teal/[0.27] bg-nerotech-teal/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-nerotech-teal" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nerotech-teal">
                NeroTech Consulting
              </span>
            </div>
          </Reveal>

          {/* H1 */}
          <Reveal delay={0.10}>
            <h1 className="font-heading mb-7 text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-[60px]">
              Institutional transformation with{" "}
              <span className="text-nerotech-teal">stronger systems</span>, better
              decisions, and measurable delivery.
            </h1>
          </Reveal>

          {/* Body */}
          <Reveal delay={0.22}>
            <p className="mb-11 max-w-[580px] text-[16.5px] leading-[1.78] text-white/60">
              We help governments, development institutions and forward-looking
              organisations strengthen governance, modernise operations, and deliver
              practical change.
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={0.33}>
            <div className="mb-15 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-nerotech-teal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-nerotech-dark-teal"
              >
                Start a conversation
              </Link>
              <Link
                href="/services"
                className="rounded-full border-[1.5px] border-white/[0.18] bg-transparent px-6 py-3.5 text-sm font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                Explore our services
              </Link>
            </div>
          </Reveal>

          {/* Metrics strip */}
          <Reveal delay={0.44}>
            <div className="grid grid-cols-2 border-t border-white/[0.09] pt-9 sm:grid-cols-4">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`pr-7 ${i < metrics.length - 1 ? "mr-7 border-r border-white/[0.07]" : ""}`}
                >
                  <p className="font-heading mb-1.5 text-[28px] font-extrabold tracking-[-0.025em] text-nerotech-teal sm:text-[28px]">
                    {m.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-white/40">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
