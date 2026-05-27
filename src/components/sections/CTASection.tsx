import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type CTASectionProps = {
  title?: string;
  body?: string;
  cta?: string;
  ctaHref?: string;
};

export function CTASection({
  title = "Have a system, reform or digital challenge to move forward?",
  body = "Let's discuss how NeroTech can help you clarify the problem, design the right approach and deliver practical outcomes.",
  cta = "Start a conversation",
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-nerotech-teal px-5 py-[76px] sm:px-6 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-15">
          {/* Left */}
          <Reveal>
            <h2 className="font-heading text-[38px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[42px]">
              {title}
            </h2>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.12}>
            <div>
              <p className="mb-8 text-base leading-[1.75] text-white/82">{body}</p>
              <Link
                href={ctaHref}
                className="inline-block rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-nerotech-dark-teal transition-colors hover:bg-nerotech-off-white"
              >
                {cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
