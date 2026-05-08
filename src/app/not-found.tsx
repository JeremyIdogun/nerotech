import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-[#F3F7F7] py-32 sm:py-40">
      <Container>
        <div className="max-w-lg">
          <p className="font-heading mb-4 text-6xl font-bold text-[#12A3A2]/30">404</p>
          <h1 className="font-heading mb-5 text-3xl font-bold text-[#18232F]">
            Page not found.
          </h1>
          <p className="mb-8 text-base leading-7 text-[#6B7280]">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Return to
            the homepage or explore our services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/">Back to homepage</Button>
            <Button href="/services" variant="secondary">
              View services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
