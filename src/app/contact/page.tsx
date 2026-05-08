import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata(
  "Contact",
  "Get in touch with NeroTech Consulting. Start a conversation about your governance, data, digital, cybersecurity or capacity challenge.",
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#F3F7F7] py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#12A3A2]">
              Contact
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[#18232F] sm:text-5xl">
              Start a conversation.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              Tell us about your challenge and we&apos;ll be in touch to discuss how NeroTech
              can help you move it forward.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <ContactForm />

            <div className="space-y-8">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
                  Get in touch
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="mt-0.5 shrink-0 text-[#12A3A2]" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-[#6B7280] hover:text-[#12A3A2]"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-[#12A3A2]" />
                    <span className="text-sm text-[#6B7280]">{siteConfig.location}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-[#F3F7F7] p-6">
                <p className="font-heading text-sm font-bold text-[#18232F]">
                  What to expect
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "We respond to all enquiries within 2 business days",
                    "Initial conversation is always no-commitment",
                    "We'll ask a few focused questions before proposing anything",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#12A3A2]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
