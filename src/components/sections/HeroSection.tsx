import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const microCards = [
  { label: "Governance reform" },
  { label: "Data systems" },
  { label: "Cybersecurity" },
  { label: "Capacity building" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F3F7F7] py-20 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-[#12A3A2]/5" />
        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-[#12A3A2]/5" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
            NeroTech Consulting Limited
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.15] tracking-tight text-[#18232F] sm:text-5xl lg:text-6xl">
            Institutional transformation with stronger systems, better decisions, and
            measurable delivery.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6B7280]">
            We help governments, development institutions and forward-looking organisations
            strengthen governance, modernise operations, and deliver practical change through
            advisory, digital capability and implementation support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
            <Button href="/services" variant="secondary">
              Explore our services
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {microCards.map((card) => (
              <div
                key={card.label}
                className="rounded-full border border-[#12A3A2]/20 bg-white px-4 py-2 text-sm font-medium text-[#18232F]"
              >
                {card.label}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
