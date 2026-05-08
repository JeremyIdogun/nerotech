import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function AboutPreview() {
  return (
    <section className="bg-[#F3F7F7] py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
              About NeroTech
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#18232F] sm:text-4xl">
              A consulting-first evolution of a decade-long technical story.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6B7280]">
              NeroTech is an established Nigerian ICT and consulting firm entering a sharper
              chapter. The firm combines technical delivery heritage with a broadened consulting
              mandate across governance, data, digital transformation, cybersecurity, software
              and institutional development.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Learn about NeroTech
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Nigerian-rooted", sub: "Benin City, Edo State" },
              { label: "Regionally ambitious", sub: "Sub-Saharan Africa" },
              { label: "Advisory-led", sub: "Consulting-first model" },
              { label: "Delivery-focused", sub: "Measurable outcomes" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#E5ECEC] bg-white p-5"
              >
                <p className="font-heading text-sm font-bold text-[#18232F]">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-[#6B7280]">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
