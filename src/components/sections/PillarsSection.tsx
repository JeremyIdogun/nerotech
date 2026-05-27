import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/services";

export function PillarsSection() {
  return (
    <section className="bg-white py-20 px-5 sm:px-6 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.20em] text-nerotech-teal">
                Service pillars
              </p>
              <h2 className="font-heading max-w-[400px] text-[38px] font-extrabold leading-[1.1] tracking-[-0.028em] text-nerotech-charcoal">
                Four connected pillars for practical transformation.
              </h2>
            </div>
            <p className="text-right text-[13px] leading-[1.7] text-nerotech-mid-grey sm:max-w-[260px]">
              Advisory thinking, technical execution and capability transfer in one
              joined-up model.
            </p>
          </div>
        </Reveal>

        {/* Bordered card grid */}
        <Reveal delay={0.1}>
          <div className="border border-nerotech-soft-grey">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`block p-7 transition-colors hover:bg-nerotech-off-white/50 ${
                    i < services.length - 1 ? "border-b border-nerotech-soft-grey lg:border-b-0 lg:border-r" : ""
                  } ${i === 1 ? "sm:border-r border-nerotech-soft-grey" : ""}`}
                >
                  {/* Ghost number */}
                  <p className="font-heading mb-3.5 text-[34px] font-extrabold leading-none tracking-[-0.04em] text-nerotech-teal/[0.08]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  {/* Eyebrow */}
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-nerotech-teal">
                    {service.eyebrow}
                  </p>
                  {/* Title */}
                  <h3 className="font-heading mb-2.5 text-sm font-semibold leading-[1.45] text-nerotech-charcoal">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[12.5px] leading-[1.72] text-nerotech-mid-grey">
                    {service.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
