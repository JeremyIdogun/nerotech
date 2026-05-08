import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

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
    <section className="bg-[#12A3A2] py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/80">{body}</p>
          <div className="mt-8">
            <Button
              href={ctaHref}
              className="bg-white text-[#0D6E70] hover:bg-[#F3F7F7]"
            >
              {cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
